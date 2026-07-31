import { createBrowserRouter } from "react-router-dom";

import App from "../App"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainProductServices from "../pages/Product and Services/MainProductsServices"
import Financing from "../pages/Financing/Financing";
import GetQuote from "../pages/GetQuote";
import TermsOfUse from "../pages/TermsOfUse";

import FundwellRedirect from "../pages/Financing/FundwellRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "financing", element: <Financing /> },
      { path: "partners", element: <Partners /> },
      { path: "contact", element: <Contact /> },
      { path: "product_and_services", element: <MainProductServices /> },
      { path: "get_quote", element: <GetQuote /> },
      { path: "terms-of-use", element: <TermsOfUse /> },

      { path: "fundwell/line-of-credit", element: <FundwellRedirect to="https://www.fundwell.com/green-raven?utm_campaign=green-raven&utm_source=sled_referral&utm_medium=channel" /> },
      { path: "fundwell/learn-more",     element: <FundwellRedirect to="https://www.fundwell.com" /> },
      { path: "fundwell/how-it-works",   element: <FundwellRedirect to="https://www.fundwell.com" /> },
    ],
  },
]);

export default router;