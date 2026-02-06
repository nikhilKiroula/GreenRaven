
import { CiHeart, CiLocationOn, CiSearch } from "react-icons/ci";

const TopBar = () => {
  return (
    <div className="border bg-[#EEEFF2] hidden md:flex justify-end items-center gap-6 px-8 py-4 text-sm text-gray-600">
      <div className="flex items-center gap-1 cursor-pointer hover:text-black">
        <CiLocationOn className="text-[20px] text-red-700"/> Find a dealer
      </div>
      <CiHeart className="text-[20px]  text-red-700"/>
      <CiSearch className="text-[20px]  text-red-700" />
    </div>
  );
};

export default TopBar;
