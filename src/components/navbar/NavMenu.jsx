import { NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react";

const NavMenu = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black font-medium"
      : "text-gray-700 hover:text-black";

  return (
    <nav className="hidden lg:flex items-center gap-8 text-sm ">
      
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkClass}>
        About Us
      </NavLink>
      <NavLink to="/product_and_services" className={linkClass}>
        Products & Services
      </NavLink>

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
