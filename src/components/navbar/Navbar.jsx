import { useState } from "react";

import TopBar from "./TopBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50">
      <TopBar />

      <div className="flex items-center justify-between px-6 md:px-10 py-4 bg-white">
        <Logo />

        <NavMenu />

        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition"
          >
            Request 
          </NavLink>
        </div>

        <button
          className="lg:hidden text-[28px]"
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
