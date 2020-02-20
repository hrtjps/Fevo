import React from "react";

const HomePage = React.lazy(() => import("./views/HomePage"));

const routes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/home", exact: true, name: "Home", component: HomePage },
];

export default routes;
