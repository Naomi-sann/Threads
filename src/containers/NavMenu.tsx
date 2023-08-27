import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  WriteIcon,
} from "@/assets/icons/Icons";
import { checkPaths } from "@/utils/utils";

const navItems: {
  path: string | string[];
  icon: (isActive: boolean, fillColor?: string) => JSX.Element;
}[] = [
  {
    path: ["/", "/home"],
    icon(isActive, fillColor) {
      return <HomeIcon filled={isActive} fillColor={fillColor} />;
    },
  },
  {
    path: "/search",
    icon(isActive, fillColor) {
      return <SearchIcon filled={isActive} fillColor={fillColor} />;
    },
  },
  {
    path: "/new-thread",
    icon(isActive, fillColor) {
      return <WriteIcon filled={isActive} fillColor={fillColor} />;
    },
  },
  {
    path: "/activity",
    icon(isActive, fillColor) {
      return (
        <HeartIcon
          filled={isActive}
          fillColor={fillColor}
          strokeColor="var(--clr-gray)"
          strokeWidth={3}
        />
      );
    },
  },
  {
    path: "/profile",
    icon(isActive, fillColor) {
      return <UserIcon filled={isActive} fillColor={fillColor} />;
    },
  },
];

const NavMenu = () => {
  const [isItemActive, setIsItemActive] = useState<{
    index: number;
    isActive: boolean;
  } | null>(null);
  const { pathname } = useLocation();

  function handleMouseDown(index: number) {
    setIsItemActive({ index, isActive: true });
  }
  function handleMouseUp(index: number) {
    setIsItemActive({ index, isActive: false });
  }

  return (
    <section className="w-full h-[75px] absolute bottom-0 bg-white">
      <nav className="h-full">
        <ul className="flex justify-evenly items-center h-full">
          {navItems.map(({ path, icon }, index) => {
            const isMultiPath = Array.isArray(path);

            return (
              <Link
                className="group/nav-item w-[calc(100%/5-5vw)] h-[55px] flex justify-center items-center cursor-pointer"
                key={index}
                to={isMultiPath ? path[0] : path}
                draggable="false"
                onMouseDown={() => handleMouseDown(index)}
                onMouseUp={() => handleMouseUp(index)}
                onMouseLeave={() =>
                  isItemActive ? handleMouseUp(index) : undefined
                }
                onTouchStart={() => handleMouseDown(index)}
                onTouchEnd={() => handleMouseUp(index)}>
                {icon(
                  checkPaths(path, pathname) ||
                    (isItemActive?.index === index && isItemActive.isActive)
                )}
              </Link>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default NavMenu;
