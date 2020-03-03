import React from "react";
import OrderSupportPage from "./views/OrderSupportPage";
import CompanyPage from "./views/CompanyPage";
import TermsPage from "./views/TermsPage";
import PrivacyPage from "./views/PrivacyPage";

const HomePage = React.lazy(() => import("./views/HomePage"));
const CaseStudySinglePage = React.lazy(() => import("./views/CaseStudies/CaseStudySinglePage"));
const CaseStudyPage = React.lazy(() => import("./views/CaseStudies/CaseStudyPage"));

const AboutFevoBrandsPage = React.lazy(() => import("./views/Brands/AboutFevoBrandsPage"));
const BrandsBlogPage = React.lazy(() => import("./views/Brands/BrandsBlogPage"));
const BrandsBlogSinglePage = React.lazy(() => import("./views/Brands/BrandsBlogSinglePage"));
const VideoTetimonialsPage = React.lazy(() => import("./views/Brands/VideoTetimonialsPage"));

const AboutFevoFansPage = React.lazy(() => import("./views/Fans/AboutFevoFansPage"));
const FansBlogPage = React.lazy(() => import("./views/Fans/FansBlogPage"));
const FansBlogSinglePage = React.lazy(() => import("./views/Fans/FansBlogSinglePage"));

const PressPage = React.lazy(() => import("./views/PressPage"));

// const routes = [
//   { path: "/", exact: true, name: "Home", component: HomePage },
//   { path: "/home", exact: true, name: "Home", component: HomePage },
  
//   { path: "/fans", exact: true, name: "Blog Brands - Fans", component: FansBlogPage },
//   { path: "/fans/view/:id", exact: true, name: "Blog Single - Fan", component: FansBlogSinglePage },
//   { path: "/fans/about-fevo", exact: true, name: "About Fevo - Fans", component: AboutFevoFansPage },

//   { path: "/brands", exact: true, name: "Blog Brands", component: BrandsBlogPage },
//   { path: "/brands/view/:id", exact: true, name: "Blog Single - Brand", component: BrandsBlogSinglePage },
//   { path: "/brands/about-fevo", exact: true, name: "About Fevo - Brands", component: AboutFevoBrandsPage },
//   { path: "/brands/video-testimonials", exact: true, name: "About Fevo - Brands", component: VideoTetimonialsPage },
  
//   { path: "/case-study", exact: true, name: "Case Study", component: CaseStudyPage },
//   { path: "/case-study/:id", exact: true, name: "Case Study - Single", component: CaseStudySinglePage },
  
//   { path: "/press", exact: true, name: "Press", component: PressPage },
//   { path: "/order-support", exact: true, name: "Order Support", component: OrderSupportPage },
  
//   { path: "/company", exact: true, name: "Company", component: CompanyPage },
//   { path: "/terms", exact: true, name: "Terms", component: TermsPage },
//   { path: "/privacy-policy", exact: true, name: "Privacy Policy", component: PrivacyPage },
// ];


const routes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/home", exact: true, name: "Home", component: HomePage },
  
  { path: "/about/press", exact: true, name: "Press", component: PressPage },
  { path: "/about/brands", exact: true, name: "Blog Brands", component: BrandsBlogPage },
  { path: "/about/brands/view/:id", exact: true, name: "Blog Single - Brand", component: BrandsBlogSinglePage },
  { path: "/about/team", exact: true, name: "Team", component: CompanyPage },

  { path: "/partners/case-study", exact: true, name: "Case Study", component: CaseStudyPage },
  { path: "/partners/case-study/:id", exact: true, name: "Case Study - Single", component: CaseStudySinglePage },
  
  { path: "/order-support", exact: true, name: "Order Support", component: OrderSupportPage },
  
  { path: "/terms", exact: true, name: "Terms", component: TermsPage },
  { path: "/privacy-policy", exact: true, name: "Privacy Policy", component: PrivacyPage },
];

export default routes;
