import { Link } from "react-router";
import logo from "/assets/images/logos/logo.png";

const Logo = ({ className }) => {
  return (
    <Link className="cursor-pointer" to="/">
      <img
        src={logo}
        alt="Creative Agency"
        className={`${className || "w-32"}`}
      />
    </Link>
  );
};

export default Logo;
