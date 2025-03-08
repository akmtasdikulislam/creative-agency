import { Link } from "react-router";
import logo from "/assets/images/logos/logo.png";

const Logo = () => {
  return (
    <Link className="cursor-pointer" href="/">
      <img src={logo} alt="Creative Agency" className="w-32" />
    </Link>
  );
};

export default Logo;
