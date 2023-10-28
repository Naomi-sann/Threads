import { createContext, useState } from "react";
import { SpringRef, useSpring, Lookup, SpringValues } from "@react-spring/web";

export const enum PopupStates {
  OPEN,
  CLOSED,
  CLOSING,
}

type THandleClose = (properties?: {
  duration?: number;
  onClose?: () => void;
}) => void;

interface IContextPopup {
  popupState: {
    popupState: PopupStates;
    handlePopupState: (newState: PopupStates) => void;
  };
  spring: {
    backgroundSprings: SpringValues<Lookup<any>>;
    api: SpringRef<any>;
  };
  handlers: {
    handleClose: THandleClose;
  };
}

const PopupContext = createContext<IContextPopup>({} as IContextPopup);

const PopupContextComponent = ({ children }: { children: React.ReactNode }) => {
  const [popupState, setPopupState] = useState<PopupStates>(PopupStates.CLOSED);
  const [backgroundSprings, api] = useSpring(() => ({}));

  const handlePopupState = (newState: PopupStates) => {
    setPopupState(newState);
  };

  const handleClose: THandleClose = (
    { onClose, duration } = { duration: 150 }
  ) => {
    setPopupState(PopupStates.CLOSING);
    api.start({
      to: {
        backgroundColor: "rgba(50,50,50,0)",
      },
      config: {
        duration,
      },
      onRest() {
        onClose?.();
        setPopupState(PopupStates.CLOSED);
      },
    });
  };

  return (
    <PopupContext.Provider
      value={{
        popupState: { popupState, handlePopupState },
        spring: { backgroundSprings, api },
        handlers: { handleClose },
      }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext };
export default PopupContextComponent;
