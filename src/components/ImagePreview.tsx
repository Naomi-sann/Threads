import { animated, useSpring, easings } from "@react-spring/web";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { closeImage } from "@/features/imagePreviewSlice";

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
  const [springs, api] = useSpring(
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

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as Element).id === "thread-image") return;

    opacityApi.start({
      to: {
        backgroundColor: "rgba(0,0,0,0)",
      },
    });
    api.start({
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

  return (
    <animated.div
      style={{
        position: "fixed",
        inset: 0,
        ...opacity,
      }}
      onClick={handleClick}>
      <animated.img
        id="thread-image"
        src={src}
        style={{
          maxWidth: "90dvh",
          cursor: "grab",
          userSelect: "none",
          ...springs,
        }}
        alt="this is a test"
        draggable="false"
      />
    </animated.div>
  );
}

export default ImagePreview;
