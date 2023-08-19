import type { MouseEvent, TouchEvent } from "react";
import type { TPosition } from "@/types";
import { animated, useSpring, easings } from "@react-spring/web";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { closeImage } from "@/features/imagePreviewSlice";
import { getMultiDeviceCursorPosition } from "@/utils/utils";

let isGrabbed = false;
let grabPosition: TPosition = { x: 0, y: 0 };
let xShift = 0;
let yShift = 0;

function ImagePreview() {
  const dimensions = useWindowDimensions();

  const { width, height, position, src } = useAppSelector(
    ({ imagePreview }) => imagePreview
  );

  const [opacity, opacityApi] = useSpring(() => ({
    from: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    to: {
      backgroundColor: "rgba(0,0,0,1)",
    },
    config: {
      duration: 150,
    },
  }));
  const [image, imageApi] = useSpring(
    () => ({
      from: {
        x: position.x - 9,
        y: position.y - 7,
        width,
        height,
        transform: "translate(0%,0%)",
        borderRadius: 12,
      },
      to: {
        x: dimensions.x / 2,
        y: dimensions.y / 2,
        transform: "translate(-50%,-50%)",
        width: dimensions.x,
        height: "fit-content",
        borderRadius: 0,
      },
      config: {
        duration: 300,
        easing: easings.easeOutSine,
      },
    }),
    []
  );

  const dispatch = useAppDispatch();

  const handleClose = () => {
    isGrabbed = false;

    opacityApi.start({
      to: {
        backgroundColor: "rgba(0,0,0,0)",
      },
    });
    imageApi.start({
      to: {
        x: position.x - 10,
        y: position.y - 8,
        width,
        transform: "translate(0%,0%)",
        borderRadius: 12,
      },
      onRest() {
        dispatch(closeImage());
      },
      config: {
        easing: easings.easeOutSine,
        duration: 300,
      },
    });
  };

  const handleDown = (e: MouseEvent | TouchEvent) => {
    isGrabbed = true;

    grabPosition = getMultiDeviceCursorPosition(e);
  };

  const handleUp = () => {
    if (xShift > 250 || xShift < -250 || yShift > 250 || yShift < -250) {
      handleClose();
      return;
    }

    imageApi.start({
      to: {
        x: dimensions.x / 2,
        y: dimensions.y / 2,
      },
      config: { duration: 200 },
    });

    isGrabbed = false;
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isGrabbed) return;

    const position: TPosition = getMultiDeviceCursorPosition(e);

    xShift = position.x - grabPosition.x;
    yShift = position.y - grabPosition.y;

    imageApi.set({
      x: xShift + dimensions.x / 2,
      y: yShift + dimensions.y / 2,
    });
  };

  const handleClick = (e: MouseEvent) => {
    if ((e.target as Element).id === "thread-image") return;

    handleClose();
  };

  return (
    <animated.div
      style={{
        position: "fixed",
        inset: 0,
        ...opacity,
      }}
      onClick={handleClick}
      onMouseLeave={handleUp}
      onTouchCancel={handleUp}>
      <animated.img
        id="thread-image"
        src={src}
        style={{
          maxWidth: "90dvh",
          cursor: "grab",
          userSelect: "none",
          ...image,
        }}
        alt="this is a test"
        draggable="false"
        onMouseDown={handleDown}
        onTouchStart={handleDown}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseUp={handleUp}
        onTouchEnd={handleUp}
      />
    </animated.div>
  );
}

export default ImagePreview;
