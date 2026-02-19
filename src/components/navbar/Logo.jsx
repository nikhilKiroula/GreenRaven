import LogoImg from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <picture>
        <img
          src={LogoImg}
          alt="Logo"
          className="
            h-8          /* Mobile */
            sm:h-10      /* Small screens */
            md:h-12      /* Medium screens */
            xl:h-14      /* Extra large screens */
            w-auto
            object-contain
          "
        />
      </picture>
    </div>
  );
};

export default Logo;
