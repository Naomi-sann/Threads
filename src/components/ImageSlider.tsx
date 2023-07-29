import { useState, useRef, useEffect } from "react";

interface IImageSliderProps {
  pictures: string[];
}

let isGrabbed = false;
let startPosition = 0;
let grabPosition = 0;
let positionCopy = 0;

function closeImage({ top, left }: { top: number; left: number }) {
  const openedImage = document.getElementById("picture-view")
    ?.firstChild as HTMLImageElement;
  openedImage.style.width = "unset";
  openedImage.style.left = `${left}px`;
  openedImage.style.top = `${top}px`;
}

function openImage(e: React.MouseEvent<HTMLImageElement>) {
  if (isGrabbed) return;

  const target = e.target as HTMLImageElement;
  const { top, left } = target.getBoundingClientRect();

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = target.src;
  img.draggable = false;

  imgContainer.id = "picture-view";
  imgContainer.className = `fixed left-0 top-0 w-full h-full bg-black animate-fade-in z-10`;

  img.className = `absolute max-w-[100dvh] rounded-xl will-change-[width,border-radius,left,top,transform] z-10 animate-place-center cursor-grab select-none transition`;

  img.style.width = target.clientWidth + "px";
  img.style.top = top - 7 + "px";
  img.style.left = left - 7 + "px";

  imgContainer.appendChild(img);
  document.body.appendChild(imgContainer);
  imgContainer.addEventListener("click", (e: Event) => {
    if ((e.target as HTMLDivElement).tagName !== "IMG")
      closeImage({ top, left });
  });
}

const ImageSlider = ({ pictures }: IImageSliderProps) => {
  const [position, setPosition] = useState(1);

  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseDown = (e: any) => {
    if (!e.target.classList.contains("thread-picture")) return;
    isGrabbed = true;
    startPosition = e.touches ? e.touches[0].pageX : e.pageX;
  };

  const handleMouseMove = (e: any) => {
    if (!imageRef.current) return;

    const x = e.touches ? e.touches[0].pageX : e.pageX;

    const slideCalc = startPosition - x + grabPosition;

    const sliderWidth =
      imageRef.current.clientWidth * pictures.length +
      (8 * pictures.length - 1);

    if (
      isGrabbed &&
      position > 0 &&
      position < sliderWidth &&
      slideCalc < sliderWidth
    ) {
      setPosition(slideCalc);
      positionCopy = slideCalc;
    }
  };

  const handleMouseUp = () => {
    isGrabbed = false;
    grabPosition = positionCopy;
  };

  const handleMouseLeave = () => {
    if (isGrabbed) isGrabbed = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchcancel", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("touchmove", handleMouseMove);
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
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
