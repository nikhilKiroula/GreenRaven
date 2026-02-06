import { NavLink } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 text-sm flex flex-col transition-all ease-in-out duration-300">
      <NavLink to="/" onClick={onClose}>Home</NavLink>
      <NavLink to="/about" onClick={onClose}>About Us</NavLink>
      <NavLink to="/gallery" onClick={onClose}>Gallery</NavLink>
      <NavLink to="/partners" onClick={onClose}>Partners</NavLink>
      <NavLink to="/contact" onClick={onClose}>Contact Us</NavLink>
      <NavLink to="/product_and_services" onClick={onClose}>Products & Services</NavLink>

    </div>
  );
};

export default MobileMenu;
