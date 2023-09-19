import { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { animated, useSpring } from "@react-spring/web";
import { PopupTypes, closePopup } from "@/features/popupSlice";
import AlertBox from "@/components/AlertBox";
import BottomNav from "@/components/BottomNav";

const Popup = () => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [backgroundSprings, api] = useSpring(() => ({}));
  const {
    isOpened,
    type,
    options,
    config: { duration, closeOnBackgroundClick },
  } = useAppSelector((state) => state.popup);

  const dispatch = useAppDispatch();
  const refPopup = useRef<HTMLDivElement | null>(null);

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
    });
  }, [isOpened]);

  const handleClose = () => {
    setIsClosing(true);
    api.start({
      to: {
        backgroundColor: "rgba(50,50,50,0)",
      },
      config: {
        duration,
      },
      onRest() {
        closeOnBackgroundClick && dispatch(closePopup());
        setIsClosing(false);
      },
    });
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (!target.contains(refPopup.current)) return;

    handleClose();
  };

  const renderAlert = () => {
    switch (type) {
      case PopupTypes.ALERT_BOX:
        return <AlertBox ref={refPopup} />;
      case PopupTypes.BOTTOM_NAV:
        return (
          <BottomNav
            isClosing={isClosing}
            duration={duration}
            options={options}
            handleClose={handleClose}
            ref={refPopup}
          />
        );
    }
  };

  return (
    isOpened && (
      <animated.div
        className="w-full h-full fixed top-0 left-0 z-20"
        style={{ ...backgroundSprings }}
        onClick={closeOnBackgroundClick ? handleBackgroundClick : undefined}>
        {renderAlert()}
      </animated.div>
    )
  );
};

export default Popup;
