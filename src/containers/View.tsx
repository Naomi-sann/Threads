import { Outlet } from "react-router-dom";

const View = ({ device }: { device?: "desktop" | "mobile" | null }) => {
  return (
    <section
      id="view"
      className={`w-full h-[calc(100%-theme(height.menuHeight))] overflow-y-auto overflow-x-hidden desktop:h-full`}>
      {device === "desktop" && <div className="w-full h-menuHeight"></div>}
      <Outlet />
    </section>
  );
};

export default View;
