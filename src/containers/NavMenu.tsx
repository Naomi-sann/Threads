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
          strokeColor="var(--clr-500-gray)"
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
    <nav className="h-full">
      <ul className="flex justify-evenly items-center h-full">
        {navItems.map(({ path, icon }, index) => {
          const isMultiPath = Array.isArray(path);

          return (
            <Link
              className="group/nav-item relative w-full h-full flex justify-center items-center cursor-pointer before:w-full before:absolute before:h-[96%] before:opacity-0 before:transition-[opacity_scale] before:scale-75 before:-z-10 before:rounded-lg before:bg-gray-200 hover:before:opacity-100 hover:before:scale-90"
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
  );
};

export default NavMenu;
