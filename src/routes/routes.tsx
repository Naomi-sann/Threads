import App from "@/App";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Thread from "@/pages/NewThread";
import Activity from "@/pages/Activity";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/new-thread",
        element: <Thread />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]!;

export default routes;
