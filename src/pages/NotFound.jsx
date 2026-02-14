import { NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-black px-6">

      <div className="text-center max-w-2xl">

        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent leading-none drop-shadow-lg">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white mt-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <NavLink
          to="/"
          className="group inline-flex items-center mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <IoArrowBackOutline className="text-white mr-2 transition-transform group-hover:-translate-x-2" />
          <span className="text-white font-medium">
            Back to Home
          </span>
        </NavLink>

      </div>
    </section>
  );
};

export default NotFound;
