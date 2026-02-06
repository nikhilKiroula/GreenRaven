import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section className="my-8">
        <Outlet />
      </section>
      <section className="mt-30">
        <Footer/>
      </section>
    </>
  );
};

export default MainLayout;
