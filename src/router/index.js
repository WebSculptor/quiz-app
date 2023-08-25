import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
