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

const slideState = { pictureLength: 0, slideIndex: 0 };

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
    slideState.pictureLength = pictures.length;

    refSlider.current?.scroll({ left: 500 * slideState.slideIndex });

    refSlider.current?.addEventListener("scrollend", () =>
      setIsScrolling(false)
    );

    return () => {
      refSlider.current?.removeEventListener("scrollend", () =>
        setIsScrolling(false)
      );
    };
  }, []);

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
          refSlider={refSlider}
          scrollState={{ isScrolling, setIsScrolling }}
        />
      )}
    </div>
  );
};

function SlideController({
  refSlider,
  scrollState: { isScrolling, setIsScrolling },
}: {
  refSlider: React.RefObject<HTMLDivElement> | null;
  scrollState: {
    isScrolling: boolean;
    setIsScrolling: (newState: boolean) => void;
  };
}) {
  useEffect(() => {
    refSlider?.current?.addEventListener("scrollend", () =>
      setIsScrolling(false)
    );

    return () => {
      refSlider?.current?.removeEventListener("scrollend", () =>
        setIsScrolling(false)
      );
    };
  }, []);

  const handleScrollClick = (dir: "left" | "right") => {
    if (dir === "left") {
      refSlider?.current?.scrollBy({
        left: -500,
        behavior: "smooth",
      });
      slideState.slideIndex > 0 && slideState.slideIndex--;
    } else if (dir === "right") {
      refSlider?.current?.scrollBy({
        left: 500,
        behavior: "smooth",
      });
      slideState.slideIndex < slideState.pictureLength - 1 &&
        slideState.slideIndex++;
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
        <IconButton onClick={() => !isScrolling && handleScrollClick("left")}>
          <LeftArrowIcon />
        </IconButton>
      </div>
      <div className={`${buttonContainerClass} right-0 translate-x-[100%]`}>
        <IconButton onClick={() => !isScrolling && handleScrollClick("right")}>
          <RightArrowIcon />
        </IconButton>
      </div>
    </>
  );
}

export default ImageSlider;
