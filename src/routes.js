import HomePage from "./views/HomePage";
import PartnersPage from "./views/PartnersPage";
import PurposePage from "./views/PurposePage";
import ProductPage from "./views/ProductPage";
import CompanyPage from "./views/CompanyPage";
import PressPage from "./views/PressPage";
import BrandsBlogPage from "./views/Brands/BrandsBlogPage";
import BrandsBlogSinglePage from "./views/Brands/BrandsBlogSinglePage";
import CaseStudyPage from "./views/CaseStudies/CaseStudyPage";
import CaseStudySinglePage from "./views/CaseStudies/CaseStudySinglePage";
import OrderSupportPage from "./views/OrderSupportPage";
import TermsPage from "./views/TermsPage";
import PrivacyPage from "./views/PrivacyPage";

// const OrderSupportPage = React.lazy(() => import("./views/OrderSupportPage"));
// const CompanyPage = React.lazy(() => import("./views/CompanyPage"));
// const TermsPage = React.lazy(() => import("./views/TermsPage"));
// const PrivacyPage = React.lazy(() => import("./views/PrivacyPage"));

// const HomePage = React.lazy(() => import("./views/HomePage"));
// const ProductPage = React.lazy(() => import("./views/ProductPage"));
// const PartnersPage = React.lazy(() => import("./views/PartnersPage"));
// const CaseStudySinglePage = React.lazy(() => import("./views/CaseStudies/CaseStudySinglePage"));
// const CaseStudyPage = React.lazy(() => import("./views/CaseStudies/CaseStudyPage"));

// const BrandsBlogPage = React.lazy(() => import("./views/Brands/BrandsBlogPage"));
// const BrandsBlogSinglePage = React.lazy(() => import("./views/Brands/BrandsBlogSinglePage"));

// const PressPage = React.lazy(() => import("./views/PressPage"));
// const PurposePage = React.lazy(() => import("./views/PurposePage"));

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


// const routes = [
//   { path: "/", exact: true, name: "Home", component: HomePage },
//   { path: "/home", exact: true, name: "Home", component: HomePage },
  
//   { path: "/about/press", exact: true, name: "Press", component: PressPage },
//   { path: "/about/brands", exact: true, name: "Blog Brands", component: BrandsBlogPage },
//   { path: "/about/brands/view/:id", exact: true, name: "Blog Single - Brand", component: BrandsBlogSinglePage },
//   { path: "/about/team", exact: true, name: "Team", component: CompanyPage },

//   { path: "/partners/case-study", exact: true, name: "Case Study", component: CaseStudyPage },
//   { path: "/partners/case-study/:id", exact: true, name: "Case Study - Single", component: CaseStudySinglePage },
  
//   { path: "/order-support", exact: true, name: "Order Support", component: OrderSupportPage },
  
//   { path: "/terms", exact: true, name: "Terms", component: TermsPage },
//   { path: "/purpose", exact: true, name: "Purpose", component: PurposePage },
//   { path: "/privacy-policy", exact: true, name: "Privacy Policy", component: PrivacyPage },
// ];

const routes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/home", exact: true, name: "Home", component: HomePage },
  { path: "/partners", exact: true, name: "Home", component: PartnersPage },
  { path: "/purpose", exact: true, name: "Home", component: PurposePage },
  { path: "/product", exact: true, name: "Home", component: ProductPage },
  { path: "/team", exact: true, name: "Team", component: CompanyPage },
  
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
