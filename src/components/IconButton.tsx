import { forwardRef } from "react";

interface IPropsIconButton {
  type?: "static" | "background_scale";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  theme?: "light" | "dark";
}

const IconButton = forwardRef<HTMLButtonElement, IPropsIconButton>(
  ({ type = "static", onClick, children, theme = "light" }, ref) => {
    let className: string = "";

    switch (type) {
      case "static": {
        className = `h-[44px] w-[44px] ${
          theme === "light"
            ? "bg-gray-200 text-black"
            : "bg-gray-900 text-white"
        } rounded-full flex justify-center items-center transition-transform active:scale-[.98] hover:scale-105 will-change-transform`;
        break;
      }
      case "background_scale": {
        className = `w-8 h-8 relative rounded-full flex justify-center items-center p-[8px] hover:before:w-[calc(100%+5px)] hover:before:h-[calc(100%+5px)] before:transition-all before:w-0 before:h-0 before:absolute before:bg-gray-200 before:inset-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-z-[1] before:rounded-full`;
        break;
      }
      default:
        console.error("button type is not valid");
    }

    return (
      <button className={className} onClick={onClick || undefined} ref={ref}>
        {children}
      </button>
    );
  }
);

export default IconButton;
