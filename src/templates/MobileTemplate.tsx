import View from "@/containers/View";
import NavMenu from "@/containers/NavMenu";

const MobileTemplate = () => {
  return (
    <>
      <View />
      <section className="w-full h-menuHeight absolute bottom-0 bg-white">
        <NavMenu />
      </section>
    </>
  );
};

export default MobileTemplate;
