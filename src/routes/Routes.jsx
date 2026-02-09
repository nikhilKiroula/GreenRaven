import { createBrowserRouter } from "react-router-dom";

import App from "../App"
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductsServices from "../pages/ProductsServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "partners", element: <Partners /> },
      { path: "contact", element: <Contact /> },
      { path: "product_and_services", element: <ProductsServices /> },
    ],
  },
]);

export default router;
