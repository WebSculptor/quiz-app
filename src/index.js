import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.scss";
import { router } from "router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);