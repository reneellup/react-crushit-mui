import BlankPage from "./views/Blank";
import MainLayout from "./layouts/MainLayout";
import React from "react";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <BlankPage /> }],
  },
];

export default routes;
