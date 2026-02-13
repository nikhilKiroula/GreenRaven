import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ScrollContent from "../components/footer/ScrollContent";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <Outlet />
      </section>
      <section className="">
        <ScrollContent />
        <Footer/>
      </section>
    </>
  );
};

export default MainLayout;
