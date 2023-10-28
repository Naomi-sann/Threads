import NavMenu from "@/containers/NavMenu";
import View from "@/containers/View";

const DesktopTemplate = () => {
  return (
    <>
      <header className="w-full h-menuHeight absolute top-0 bg-menuColor backdrop-blur-menuBlur z-10">
        <NavMenu />
      </header>
      <View device="desktop" />
    </>
  );
};

export default DesktopTemplate;
