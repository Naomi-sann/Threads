import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes.tsx";
import { Provider } from "react-redux";
import store from "./features/store.ts";
import PopupContextComponent from "./contexts/PopupContext.tsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupContextComponent>
        <RouterProvider router={router} />
      </PopupContextComponent>
    </Provider>
  </React.StrictMode>
);
