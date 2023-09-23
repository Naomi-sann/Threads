import NavMenu from "@/containers/NavMenu";
import View from "@/containers/View";

const DesktopTemplate = () => {
  return (
    <>
      <header className="w-full h-menuHeight absolute top-0 bg-[rgba(255,255,255,0.85)] backdrop-blur-[28.5px] z-10">
        <NavMenu />
      </header>
      <View device="desktop" />
    </>
  );
};

export default DesktopTemplate;
