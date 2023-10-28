import { forwardRef } from "react";

const AlertPopup = forwardRef<HTMLDivElement>((props, ref) => {
  return <div className="w-full h-full bg-black" ref={ref}></div>;
});

export default AlertPopup;
