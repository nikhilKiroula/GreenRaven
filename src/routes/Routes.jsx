import { createBrowserRouter } from "react-router-dom";

import App from "../App"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainProductServices from "../pages/Product and Services/MainProductsServices"
import Financing from "../pages/Financing";
import GetQuote from "../pages/GetQuote";

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
    ],
  },
]);

export default router;
