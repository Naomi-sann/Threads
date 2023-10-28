import { useEffect, useRef } from "react";
import usePopupContext from "@/hooks/usePopupContext";
import { animated } from "@react-spring/web";
import { PopupStates } from "@/contexts/PopupContext";

interface IPropsPopupContainer {
  children: React.ReactNode;
  closeOnClick: boolean;
  onRemove: () => void;
  config?: { duration: number };
}

function PopupContainer({
  children,
  closeOnClick,
  onRemove,
  config: { duration } = { duration: 150 },
}: IPropsPopupContainer) {
  const {
    popupState: { handlePopupState },
    spring: { backgroundSprings, api },
    handlers: { handleClose },
  } = usePopupContext();
  const refPopupContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.start({
      from: {
        backgroundColor: "rgba(50,50,50,0)",
      },
      to: {
        backgroundColor: "rgba(50,50,50,.25)",
      },
      config: {
        duration,
      },
      onRest() {
        handlePopupState(PopupStates.OPEN);
      },
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    /* avoid click on navbar code should be written */

    closeOnClick &&
      handleClose({
        onClose: onRemove,
        duration,
      });
  };

  return (
    <animated.div
      className="w-full h-full fixed top-0 left-0 z-30"
      style={{ ...backgroundSprings }}
      onClick={closeOnClick ? handleClick : undefined}
      ref={refPopupContainer}>
      {children}
    </animated.div>
  );
}

export default PopupContainer;
