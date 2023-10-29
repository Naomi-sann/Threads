import NavMenu from "@/containers/NavMenu";
import View from "@/containers/View";
import { ThreadLogoIcon, MenuBurgerIcon } from "@/assets/icons/Icons";
import { Link } from "react-router-dom";

const DesktopTemplate = () => {
  return (
    <>
      <header className="w-full max-w-[1230px] mx-auto h-desktopMenuHeight absolute top-0 bg-menuColor backdrop-blur-menuBlur z-10 flex justify-between items-center last:mr-[13px]">
        <div className="w-8 h-8 ml-[19px]">
          <Link to="/" role="link">
            <ThreadLogoIcon />
          </Link>
        </div>
        <section className="w-[calc(96px*5)] h-full">
          <NavMenu />
        </section>
        <div className="group w-12 h-12 text-black flex items-center justify-center cursor-pointer mr-[13px]">
          <MenuBurgerIcon className="text-gray-500 group-hover:text-black transition-[color]" />
        </div>
      </header>
      <View device="desktop" />
    </>
  );
};

export default DesktopTemplate;
