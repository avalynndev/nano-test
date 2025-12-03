import React from "react";
import ReactDOM from "react-dom/client";

import { createRouter, RouterProvider } from "@avalynndev/nanojs";
import routes from "./routes";

createRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
