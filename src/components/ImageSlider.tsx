import { getMultiDeviceCursorPosition } from "@/utils/utils";
import { useState, useRef, useEffect } from "react";

interface IImageSliderProps {
  pictures: string[];
}

type TTargetImageState = Record<"width" | "height" | "top" | "left", number>;

let isGrabbed = false;
let startPosition = 0;
let grabPosition = 0;
let positionCopy = 0;

function closeImage(
  { width, height, top, left }: TTargetImageState,
  onClose: () => void
): void {
  const openedImage = document.getElementById("picture-view")
    ?.firstChild as HTMLImageElement;

  openedImage.className +=
    " transition-[left,top,width,transform,height,border-radius] duration-500";
  openedImage.style.width = width + "px";
  openedImage.style.left = `${left}px`;
  openedImage.style.top = `${top}px`;
  openedImage.style.transform = "";
  openedImage.style.borderRadius = "12px";
  openedImage.ontransitionend = () => {
    onClose();
  };
}

function handleImageSlideClose(
  targetImage: HTMLImageElement,
  {
    img,
    imgContainer,
  }: {
    img: HTMLImageElement;
    imgContainer: HTMLDivElement;
  },
  target: TTargetImageState
): void {
  let grabPosition: { x: number; y: number } = { x: 0, y: 0 };
  let isHolding = false;
  let isReset = true;

  const handleDown = (e: MouseEvent | TouchEvent) => {
    const pos = getMultiDeviceCursorPosition(e);
    isHolding = true;
    grabPosition = {
      x: parseFloat(pos.x.toFixed(2)),
      y: parseFloat(pos.y.toFixed(2)),
    };
  };
  const handleUp = (e: MouseEvent | TouchEvent) => {
    const { x, y } = getMultiDeviceCursorPosition(e);

    const yShift = grabPosition.y - y;
    const xShift = grabPosition.x - x;

    let maxShift = 250;

    if (
      xShift > maxShift ||
      xShift < -maxShift ||
      yShift > maxShift ||
      yShift < -maxShift
    ) {
      imgContainer.style.backgroundColor = "rgba(0,0,0,0)";
      closeImage(target, () => {
        imgContainer.remove();
        targetImage.classList.remove("opacity-0");
      });
    }

    isHolding = isReset = false;
    img.className += " transition-[left,top] duration-500";
    img.style.top = img.style.left = "50%";
    img.ontransitionend = () => {
      img.classList.remove("transition-[left,top]");
      img.classList.remove("duration-500");
      isReset = true;
    };
  };
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isHolding || !isReset) return;

    const { x, y } = getMultiDeviceCursorPosition(e);

    const yShift = grabPosition.y - y;
    const xShift = grabPosition.x - x;

    img.style.top = window.innerHeight / 2 + -yShift + "px";
    img.style.left = window.innerWidth / 2 + -xShift + "px";
  };

  img.addEventListener("mousedown", handleDown);
  img.addEventListener("touchstart", handleDown);
  img.addEventListener("mouseup", handleUp);
  img.addEventListener("touchend", handleUp);
  imgContainer.addEventListener("mousemove", handleMove);
  imgContainer.addEventListener("touchmove", handleMove);
  imgContainer.addEventListener("mouseleave", handleUp);
  imgContainer.addEventListener("touchcancel", handleUp);
}

function openImage(e: React.MouseEvent<HTMLImageElement>): void {
  if (isGrabbed) return;
  const target = e.target as HTMLImageElement;
  const { top, left } = target.getBoundingClientRect();

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = target.src;
  img.draggable = false;

  target.classList.add("opacity-0");

  imgContainer.id = "picture-view";
  imgContainer.className = `fixed left-0 top-0 w-full h-full bg-black animate-fade-in z-10 transition-[background-color] duration-[350ms]`;

  img.className = `absolute max-w-[100dvh] rounded-xl will-change-[width,border-radius,left,top,transform] z-10 cursor-grab select-none animate-place-center`;

  img.style.width = target.clientWidth + "px";
  img.style.top = top + "px";
  img.style.left = left + "px";

  imgContainer.addEventListener("animationend", () => {
    imgContainer.classList.replace("animate-fade-in", "bg-[rgba(0,0,0,1)]");
  });

  function handleImgOpened() {
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.width = "100%";
    img.style.borderRadius = "0";
    img.classList.remove("animate-place-center");

    function handleBackgroundClick(e: Event) {
      if ((e.target as HTMLDivElement).tagName !== "IMG") {
        imgContainer.style.backgroundColor = "rgba(0,0,0,0)";
        closeImage(
          {
            top,
            left,
            width: target.clientWidth,
            height: target.clientHeight,
          },
          () => {
            target.classList.remove("opacity-0");
            imgContainer.remove();
          }
        );
      }
    }

    imgContainer.addEventListener("click", handleBackgroundClick);
    handleImageSlideClose(
      target,
      { img, imgContainer },
      {
        top,
        left,
        width: target.clientWidth,
        height: target.clientHeight,
      }
    );
  }

  img.addEventListener("animationend", handleImgOpened);

  imgContainer.appendChild(img);
  document.body.appendChild(imgContainer);
}

const ImageSlider = ({ pictures }: IImageSliderProps) => {
  const [position, setPosition] = useState(1);

  const imageRef = useRef<HTMLImageElement>(null);

  const handleDown = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>
  ) => {
    if (!(e.target as Element).classList.contains("thread-picture")) return;
    isGrabbed = true;
    startPosition = getMultiDeviceCursorPosition(e).x;
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!imageRef.current) return;

    const { x } = getMultiDeviceCursorPosition(e);

    const sliderWidth =
      imageRef.current.width * (pictures.length - 1) + 8 * pictures.length - 1;

    const slideCalc =
      startPosition - x + grabPosition > 0
        ? startPosition - x + grabPosition
        : 0;

    if (isGrabbed && position > 0 && slideCalc < sliderWidth) {
      setPosition(slideCalc);
      positionCopy = slideCalc;
    }
  };

  const handleUp = () => {
    isGrabbed = false;
    grabPosition = positionCopy;
    startPosition = 0;
  };

  const handleMouseLeave = () => {
    if (isGrabbed) isGrabbed = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchcancel", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchcancel", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full select-none">
      <div
        className="flex gap-2 will-change-transform"
        style={{ transform: `translateX(-${position}px)` }}>
        {pictures.map((pic, index) => {
          return (
            <img
              src={pic}
              alt="content_picture"
              className="thread-picture rounded-xl transition-transform ease-linear duration-100 active:scale-90 max-w-[clamp(200px,75vw,375px)] w-fit cursor-grab active:cursor-grabbing"
              draggable="false"
              key={index}
              ref={imageRef}
              onClick={openImage}
              onMouseDown={handleDown}
              onTouchStart={handleDown}
              onTouchEnd={handleUp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
