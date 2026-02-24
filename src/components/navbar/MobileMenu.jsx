import { NavLink } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="lg:hidden bg-black/10 backdrop-blur-sm border-t px-6 py-6 space-y-4 text-sm flex flex-col  text-white">
      <NavLink
        to="/"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/get_quote"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Get Quote
      </NavLink>
      <NavLink
        to="/partners"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Partners
      </NavLink>
      <NavLink
        to="/contact"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/product_and_services"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Products & Services
      </NavLink>
      <NavLink
        to="/financing"
        onClick={onClose}
        className={({ isActive }) =>
          isActive ? "text-green-500" : "hover:text-green-500"
        }
      >
        Financing
      </NavLink>

      <style jsx>
        {`
          .active {
            color: green;
          }

          .nav-link:hover {
            color: green;
          }
        `}
      </style>
    </div>
  );
};

export default MobileMenu;
