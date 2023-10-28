import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { PopupTypes, closePopup } from "@/features/popupSlice";
import BottomNav from "@/components/BottomNav";
import AlertPopup from "@/components/AlertPopup";
import PopupContainer from "./PopupContainer";

const Popup = () => {
  const {
    isOpened,
    type,
    options,
    config: { duration, closeOnBackgroundClick },
  } = useAppSelector((state) => state.popup);

  const dispatch = useAppDispatch();
  const refPopup = useRef<HTMLDivElement>(null);

  const renderAlert = () => {
    switch (type) {
      case PopupTypes.BOTTOM_NAV:
        return (
          <BottomNav duration={duration} options={options} ref={refPopup} />
        );
      case PopupTypes.ALERT_POPUP:
        return <AlertPopup ref={refPopup}></AlertPopup>;
    }
  };

  return (
    isOpened && (
      <PopupContainer
        closeOnClick={closeOnBackgroundClick ?? false}
        onRemove={() => dispatch(closePopup())}>
        {renderAlert()}
      </PopupContainer>
    )
  );
};

export default Popup;
