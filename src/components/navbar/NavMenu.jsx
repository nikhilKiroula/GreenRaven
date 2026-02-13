import { NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react";  

const NavMenu = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? " font-medium  border-b-2 border-[#cc0033] p-2 text-[#cc0033]"
      : "text-white hover:text-red-600";

  return (
    <nav className="hidden lg:flex items-center gap-8 text-sm ">
      
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkClass}>
        About Us
      </NavLink>
      {/* <NavLink to="/product_and_services" className={linkClass}>
        Products & Services
      </NavLink> */}

      <NavLink to="/gallery" className={linkClass}>
        Gallery
      </NavLink>

      <NavLink to="/partners" className={linkClass}>
        Partners
      </NavLink>

      <NavLink to="/contact" className={linkClass}>
        Contact Us
      </NavLink>
    </nav>
  );
};

export default NavMenu;
