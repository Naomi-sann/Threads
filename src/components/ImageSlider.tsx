import { useState, useRef, useEffect } from "react";
import { getMultiDeviceCursorPosition } from "@/utils/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { openImage } from "@/features/imagePreviewSlice";

interface IImageSliderProps {
  pictures: string[];
}

let isGrabbed = false;
let startPosition = 0;
let grabPosition = 0;
let grabPositionCopy = 0;
let positionCopy = 0;

const ImageSlider = ({ pictures }: IImageSliderProps): JSX.Element => {
  const [position, setPosition] = useState(1);

  const openedPictureSource = useAppSelector((state) => state.imagePreview.src);
  const dispatch = useAppDispatch();

  const imageRef = useRef<HTMLImageElement>(null);

  const handleDown = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>
  ) => {
    if (!(e.target as Element).classList.contains("thread-picture")) return;
    isGrabbed = true;
    startPosition = getMultiDeviceCursorPosition(e).x;
    grabPositionCopy = positionCopy;
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

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    picture: string
  ) => {
    const target = event.target as HTMLImageElement;

    const { top, left } = target.getBoundingClientRect();

    dispatch(
      openImage({
        position: { x: left, y: top },
        src: picture,
        width: target.clientWidth,
        height: target.clientHeight,
      })
    );
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
    <div className="w-full select-none hehe">
      <div
        className="flex gap-2 will-change-transform"
        style={{ transform: `translateX(-${position}px)` }}>
        {pictures.map((pic, index) => {
          return (
            <img
              src={pic}
              alt="content_picture"
              className={`thread-picture rounded-xl transition-transform ease-linear duration-100 active:scale-90 max-w-[clamp(200px,75vw,375px)] w-fit cursor-grab active:cursor-grabbing ${
                openedPictureSource === pic ? "opacity-0" : ""
              }`}
              draggable="false"
              key={index}
              ref={imageRef}
              onClick={(e) =>
                position - grabPositionCopy <= 50 &&
                position - grabPositionCopy >= -50 &&
                handleClick(e, pic)
              }
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
