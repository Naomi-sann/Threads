import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { openImage } from "@/features/imagePreviewSlice";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons/Icons";

interface IImageSliderProps {
  controller?: boolean;
  pictures: string[];
  sliderSize?: { breakPoint: number; size: string | number };
}

const ImageSlider = ({
  controller,
  pictures,
  sliderSize,
}: IImageSliderProps): JSX.Element => {
  const openedImageSrc = useAppSelector((state) => state.imagePreview.src);
  const device = useAppSelector((state) => state.device.device);
  const dispatch = useAppDispatch();

  const refImage = useRef<HTMLImageElement>(null);
  const refSlider = useRef(null);

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

  return (
    <div className="group/test relative -ml-[calc(2.5rem+12px)] overflow-visible pb-2">
      <div
        className={`picture-container w-${
          sliderSize?.size ? `[${sliderSize.size}]` : "fullThread"
        } select-none overflow-x-scroll snap-x`}
        ref={refSlider}>
        <div className="flex w-fit h-fit gap-2 pl-[calc(5.5rem+12px)]">
          {pictures.map((pic, index) => {
            return (
              <div key={index} className="snap-center min-w-fit">
                <img
                  src={pic}
                  alt="content_picture"
                  className={`thread-picture rounded-xl transition-transform ease-linear duration-100 active:scale-[.98] max-h-[460px] cursor-pointer ${
                    openedImageSrc === pic ? "opacity-0" : ""
                  }`}
                  draggable="false"
                  ref={refImage}
                  onClick={(e) => handleClick(e, pic)}
                  loading="lazy"
                />
              </div>
            );
          })}
          <div className="pr-[calc(5.5rem+4px)]"></div>
        </div>
      </div>
      {device === "desktop" && controller && (
        <SlideController sliderRef={refSlider} />
      )}
    </div>
  );
};

function SlideController({
  sliderRef,
}: {
  sliderRef: React.RefObject<HTMLDivElement>;
}) {
  const handleClick = (dir: "left" | "right") => {
    if (dir === "left") {
      sliderRef.current?.scrollBy({
        left: 10,
        top: 200,
      });
      sliderRef.current?.scroll({ left: 100 });
    } else if (dir === "right") {
      sliderRef.current?.scrollBy({
        left: 150,
        top: 200,
      });
      sliderRef.current?.scroll({ left: 100 });
    }
  };

  return (
    <>
      <div className="absolute -translate-x-[100%] left-0 top-0 h-full w-20 flex justify-center items-center">
        <button
          className="opacity-0 group-hover/test:opacity-100 h-[44px] w-[44px] bg-gray-200 rounded-full flex justify-center items-center transition-opacity"
          onClick={() => handleClick("left")}>
          <LeftArrowIcon />
        </button>
      </div>
      <div className="absolute translate-x-[100%] right-0 top-0 h-full w-20 flex justify-center items-center">
        <button
          className="opacity-0 group-hover/test:opacity-100 h-[44px] w-[44px] bg-gray-200 rounded-full flex justify-center items-center transition-opacity"
          onClick={() => handleClick("right")}>
          <RightArrowIcon />
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
