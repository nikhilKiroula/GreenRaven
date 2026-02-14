import { useState } from "react";

// import TopBar from "./TopBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  fixed top-0 z-50 shadow-lg backdrop-blur-sm bg-black/30">


      <div className="flex items-center justify-between px-6 md:px-10 h-[70px] ">
        <Logo />

        <NavMenu />

        <div className="hidden lg:block">
          <NavLink
            to='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2JTFpFQQdaJA18Wtn4_kH1xqvrQNOHK8PNyfzVYi9G0GOk79bFVjbRLjViO-yV7DVZr_jcr58h'
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700 transition"
          >
            Schedule an Appointment 
          </NavLink>
        </div>

        <button
          className="lg:hidden text-white text-[28px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
