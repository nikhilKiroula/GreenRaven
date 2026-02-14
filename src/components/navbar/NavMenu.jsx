import { NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react";  

const NavMenu = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? " font-bold  border-b-2 border-green-600 p-2 text-green-600"
      : "text-white hover:text-green-600";

  return (
    <nav className="hidden lg:flex items-center gap-8 text-md  ">
      
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
