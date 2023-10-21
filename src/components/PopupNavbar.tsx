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
        className="absolute h-fit min-h-20 w-48 bg-white rounded-2xl right-0 shadow-[0_10.5px_21px_rgba(0,0,0,.08)] z-10 overflow-hidden origin-top-right"
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
  return (
    <li
      className={
        `px-4 py-3 cursor-pointer border border-b-gray-400 last:border-none active:bg-gray-200 transition-colors` +
        ` text-[${color}]`
      }>
      {children}
    </li>
  );
};

export { PopupNavbarOption };
export default PopupNavbar;
