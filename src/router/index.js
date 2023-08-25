import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "layout";
import { HomePage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
