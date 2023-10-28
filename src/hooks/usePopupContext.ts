import { useContext } from 'react';
import { PopupContext } from "@/contexts/PopupContext";

const usePopupContext = () => useContext(PopupContext);

export default usePopupContext;