import { Outlet } from "react-router-dom";

const View = ({ device }: { device?: "desktop" | "mobile" | null }) => {
  return (
    <section
      id="view"
      className={`w-full h-full overflow-y-auto overflow-x-hidden`}>
      {device === "desktop" && <div className="w-full h-menuHeight"></div>}
      <div className="min-h-[calc(100%-75px*2)]">
        <Outlet />
      </div>
      <footer className="h-[70px] w-full flex items-center justify-center">
        <ul className="text-gray-800 font-sans text-[12px]">
          <li className="inline-block">© 2023</li>
          <li className="inline-block ml-3">
            <a href="#" className="hover:underline">
              Threads Terms
            </a>
          </li>
          <li className="inline-block ml-3">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="inline-block ml-3">
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
          </li>
        </ul>
      </footer>
      {device === "mobile" && <div className="w-full h-menuHeight"></div>}
    </section>
  );
};

export default View;
