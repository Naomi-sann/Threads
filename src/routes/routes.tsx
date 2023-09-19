import App from "@/App";
import Home from "@/pages/PageHome";
import Search from "@/pages/PageSearch";
import Thread from "@/pages/PageNewThread";
import Activity from "@/pages/PageActivity";
import Profile from "@/pages/PageProfile";
import NotFound from "@/pages/PageNotFound";
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
