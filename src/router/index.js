import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "layout";
import { FormPage, HomePage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <FormPage />,
      },
      {
        path: "/q",
        element: <HomePage />,
      },
      {
        path: "/r",
        element: <p>Congratulations</p>,
      },
    ],
  },
]);
