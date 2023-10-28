import { useEffect, useState, forwardRef } from "react";
import usePopupContext from "@/hooks/usePopupContext";
import { animated, useSpring } from "@react-spring/web";
import { IOption, closePopup } from "@/features/popupSlice";
import { PopupStates } from "@/contexts/PopupContext";
import { useAppDispatch } from "@/hooks/useReduxHooks";

interface IPropsBottomNav {
  duration?: number;
  options: (IOption | IOption[])[];
}

const BottomNav = forwardRef<HTMLDivElement, IPropsBottomNav>(
  ({ duration, options }, ref) => {
    const [openStatus, setOpenStatus] = useState({
      isDown: false,
      y: 0,
      initialY: 0,
      yShift: 0,
    });
    const [navSprings, api] = useSpring(() => ({
      from: {
        y: "100%",
      },
      to: {
        y: "0",
      },
      config: {
        duration,
      },
    }));

    const dispatch = useAppDispatch();

    const {
      popupState,
      handlers: { handleClose },
    } = usePopupContext();

    useEffect(() => {
      // console.log(popupState === PopupStates.CLOSING);

      api.start();
      popupState.popupState === PopupStates.CLOSING &&
        api.start({
          from: {
            y: (openStatus.yShift <= 0 ? 0 : openStatus.yShift) + "px",
          },
          to: {
            y: (ref && "current" in ref && ref.current?.clientHeight) + "px",
          },
          config: {
            duration,
          },
        });
    }, [popupState]);

    const handleDown = (e: React.TouchEvent) => {
      setOpenStatus({
        ...openStatus,
        isDown: true,
        initialY: e.touches[0].clientY,
      });
    };

    const handleMove = (e: React.TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const yShift = currentY - openStatus.initialY;

      setOpenStatus({ ...openStatus, y: currentY, yShift });

      if (yShift < 0) return;

      api.start({
        to: {
          y: yShift + "px",
        },
        config: {
          duration: 0,
        },
      });
    };

    const handleUp = () => {
      if (openStatus.yShift > 75)
        handleClose({
          onClose() {
            dispatch(closePopup());
          },
        });
      else
        api.start({
          to: {
            y: "0",
          },
          config: {
            duration,
          },
        });
    };

    return (
      <animated.div
        id="popup-nav"
        className="w-full h-fit absolute bg-white rounded-tl-[1rem] rounded-tr-[1rem] bottom-0 left-0"
        style={{ ...navSprings }}
        ref={ref}>
        <div
          className="w-full h-10 before:w-12 before:h-1 before:bg-gray-600 before:absolute before:rounded-full before:top-3 before:left-1/2 before:-translate-x-1/2 cursor-grab active:cursor-grabbing"
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}></div>
        <OptionList options={options} />
      </animated.div>
    );
  }
);

function OptionList({ options }: { options: (IOption | IOption[])[] }) {
  return (
    <ul className="pb-5 pl-5 pr-5">
      {options.map((option, index) => {
        if (Array.isArray(option)) {
          const res = [];
          for (let i = 0; i < option.length; i++) {
            const opt = option[i];
            res.push(
              <li
                key={opt.id}
                className={`h-14 pl-5 pr-5 bg-gray-200 flex items-center cursor-pointer active:bg-gray-400 select-none border-b-[1px] border-b-gray-600 last:border-b-0`}>
                <button>
                  <span
                    className={`${
                      opt.color === "tomato-red" ? "text-tomatoRed" : ""
                    } capitalize`}>
                    {opt.title}
                  </span>
                </button>
              </li>
            );
          }
          return (
            <ul className="mb-2 rounded-xl overflow-hidden" key={index + 1}>
              {res}
            </ul>
          );
        }

        return (
          <li
            key={option.id}
            className="h-14 pl-5 pr-5 mb-2 bg-gray-200 rounded-xl flex items-center cursor-pointer active:bg-gray-400 select-none">
            <button>
              <span
                className={`${
                  option.color === "tomato-red" ? "text-tomatoRed" : ""
                } capitalize`}>
                {option.title}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default BottomNav;
