import View from "@/containers/View";
import NavMenu from "@/containers/NavMenu";

const MobileTemplate = () => {
  return (
    <>
      <View device="mobile" />
      <section className="w-full h-menuHeight absolute bottom-0 bg-menuColor backdrop-blur-menuBlur">
        <NavMenu />
      </section>
    </>
  );
};

export default MobileTemplate;
