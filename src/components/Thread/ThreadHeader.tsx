import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { Link } from "react-router-dom";
import { openPopup, PopupTypes } from "@/features/popupSlice";
import { DotsIcon, TickIcon } from "@/assets/icons/Icons";
import IconButton from "../IconButton";
import PopupNavbar, { PopupNavbarOption } from "../PopupNavbar";

interface IPropsThreadHeader {
  userLink: string;
  username: string;
  isVerified?: boolean;
  date: string;
}

function ThreadHeader({
  userLink,
  username,
  isVerified,
  date,
}: IPropsThreadHeader) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const device = useAppSelector((state) => state.device.device);
  const refPopup = useRef<HTMLDivElement>(null);
  const refMoreButton = useRef<HTMLButtonElement>(null);

  const handleOptionsClick = () => {
    device === "mobile"
      ? dispatch(
          openPopup({
            type: PopupTypes.BOTTOM_NAV,
            config: {
              closeOnBackgroundClick: true,
              duration: 150,
            },
            options: [
              { id: 1, title: "mute" },
              [
                { id: 2, title: "hide" },
                { id: 3, title: "block", color: "tomato-red" },
                { id: 4, title: "report", color: "tomato-red" },
              ],
            ],
          })
        )
      : isPopupOpen
      ? setIsPopupOpen(false)
      : setIsPopupOpen(true);
  };

  return (
    <header className="flex justify-between h-5 mb-[6px]">
      <div className="flex pt-[2px] items-center -mt-[1px]">
        <h2 className="text-md font-bold mr-[6px]">
          <Link to={userLink}>{username}</Link>
        </h2>
        {isVerified && <TickIcon width={14} height={14} />}
      </div>
      <div className="flex">
        <span className="text-gray-600 text-[15px] flex items-center mr-2">
          {date}
        </span>
        <div className="relative">
          <IconButton
            type="background_scale"
            onClick={handleOptionsClick}
            ref={refMoreButton}
            style={{ marginTop: "-5.5px" }}>
            <DotsIcon />
          </IconButton>
          {isPopupOpen && (
            <PopupNavbar ref={refPopup}>
              <PopupNavbarOption>Mute</PopupNavbarOption>
              <PopupNavbarOption>Hide</PopupNavbarOption>
              <PopupNavbarOption color="theme(colors.tomatoRed)">
                Block
              </PopupNavbarOption>
              <PopupNavbarOption color="theme(colors.tomatoRed)">
                Report
              </PopupNavbarOption>
            </PopupNavbar>
          )}
        </div>
      </div>
    </header>
  );
}

export default ThreadHeader;
