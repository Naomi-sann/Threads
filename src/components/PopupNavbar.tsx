import {
  Children,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { animated, useSpring } from "@react-spring/web";

interface IPropsPopupNavbar {
  readonly children:
    | ReactElement<IPropsPopupNavbarOption>
    | ReactElement<IPropsPopupNavbarOption>[];
}

const PopupNavbar = forwardRef<HTMLDivElement, IPropsPopupNavbar>(
  ({ children }, ref) => {
    const [popup] = useSpring(() => ({
      from: {
        scale: 0.35,
        opacity: 0,
      },
      to: {
        scale: 1,
        opacity: 1,
      },
      config: {
        duration: 125,
      },
    }));

    return (
      <animated.div
        className="absolute h-fit min-h-20 w-48 bg-white rounded-2xl right-0 shadow-[0_10px_21px_rgba(0,0,0,.08)] z-[5] overflow-hidden origin-top-right select-none"
        ref={ref}
        style={popup}>
        <ul>
          {Children.map(children, (child: ReactNode) => {
            if (isValidElement(child) && child.type === PopupNavbarOption) {
              return child;
            }
          })}
        </ul>
      </animated.div>
    );
  }
);

interface IPropsPopupNavbarOption {
  children: ReactNode;
  color?: string;
}

const PopupNavbarOption = ({
  color,
  children,
}: IPropsPopupNavbarOption): JSX.Element => {
  const classStyles =
    "px-4 py-3 cursor-pointer active:bg-gray-200 font-bold text-[15px] transition-colors border-b-[2px] border-b-gray-300 last:border-none" +
    (color ? " text-[" + color + "]" : "");

  return <li className={classStyles}>{children}</li>;
};

export { PopupNavbarOption };
export default PopupNavbar;
