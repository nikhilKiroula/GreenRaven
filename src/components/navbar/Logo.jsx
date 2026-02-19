import { MdEnergySavingsLeaf } from "react-icons/md";
import LogoImg from "../../assets/images/logo.png"
const Logo = () => {
  return (
    <div className="text-2xl font-bold tracking-wide flex items-center">
        <MdEnergySavingsLeaf className="text-green-600"/>
      <span className="text-white">GreenRaven</span>
    </div>
  );
};

export default Logo;
