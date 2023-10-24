import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { openImage } from "@/features/imagePreviewSlice";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons/Icons";
import IconButton from "./IconButton";

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
  const refSlider = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    refSlider.current?.addEventListener("scrollend", () =>
      setIsScrolling(false)
    );
    console.log(isScrolling);

    return () => {
      refSlider.current?.removeEventListener("scrollend", () =>
        setIsScrolling(false)
      );
    };
  }, []);

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

  const handleScroll = (e: React.UIEvent) => {
    const target = e.target as HTMLDivElement;

    if (target.scrollLeft <= 5)
      target.scrollTo({ left: 100, behavior: "smooth" });
    if (target.offsetWidth + target.scrollLeft >= target.scrollWidth - 5)
      target.scrollBy({ left: -100, behavior: "smooth" });
  };

  return (
    <div className="group/image-slider relative -ml-[calc(2.5rem+12px)] overflow-visible">
      <div
        className={`picture-container w-${
          sliderSize?.size ? `[${sliderSize.size}]` : "fullThread"
        } select-none overflow-x-scroll snap-x snap-proximity`}
        ref={refSlider}
        onScroll={device === "desktop" ? handleScroll : undefined}>
        <div className="flex w-fit h-fit gap-2 pl-[calc(5.5rem+12px)]">
          {pictures.map((pic, index) => {
            return (
              <div key={index} className="snap-center snap-always min-w-fit">
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
        <SlideController
          sliderRef={refSlider.current}
          scrollState={[isScrolling, setIsScrolling]}
        />
      )}
    </div>
  );
};

function SlideController({
  sliderRef,
  scrollState: [isScrolling, setIsScrolling],
}: {
  sliderRef: HTMLDivElement | null;
  scrollState: [boolean, (newState: boolean) => void];
}) {
  const handleClick = (dir: "left" | "right") => {
    console.log("hehe");

    if (dir === "left") {
      sliderRef?.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    } else if (dir === "right") {
      sliderRef?.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }

    setIsScrolling(true);
  };

  const buttonContainerClass =
    "absolute top-0 h-full w-20 flex justify-center items-center opacity-0 transition-opacity group-hover/image-slider:opacity-100" +
    " display-none";

  return (
    <>
      <div
        className={`${buttonContainerClass} left-0 -translate-x-[100%] none`}>
        <IconButton onClick={() => !isScrolling && handleClick("left")}>
          <LeftArrowIcon />
        </IconButton>
      </div>
      <div className={`${buttonContainerClass} right-0 translate-x-[100%]`}>
        <IconButton onClick={() => !isScrolling && handleClick("right")}>
          <RightArrowIcon />
        </IconButton>
      </div>
    </>
  );
}

export default ImageSlider;
