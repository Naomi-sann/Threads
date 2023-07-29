import { Outlet } from "react-router-dom";

const View = () => {
  return (
    <section
      id="view"
      className="w-full h-[calc(100%-75px)] overflow-y-auto overflow-x-hidden">
      <Outlet />
    </section>
  );
};

export default View;
