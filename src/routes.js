import React from "react";

const HomePage = React.lazy(() => import("./views/HomePage"));
const CaseStudySinglePage = React.lazy(() => import("./views/CaseStudySinglePage"));
const CaseStudyPage = React.lazy(() => import("./views/CaseStudyPage"));
const AboutFevoBrandsPage = React.lazy(() => import("./views/Brands/AboutFevoBrandsPage"));

const routes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/home", exact: true, name: "Home", component: HomePage },
  { path: "/brands", exact: true, name: "About Fevo - Brands", component: AboutFevoBrandsPage },
  { path: "/brands/about-fevo-brand", exact: true, name: "About Fevo - Brands", component: AboutFevoBrandsPage },
  { path: "/case-study", exact: true, name: "Case Study", component: CaseStudyPage },
  { path: "/case-study-single", exact: true, name: "Case Study - Single", component: CaseStudySinglePage },
];

export default routes;
