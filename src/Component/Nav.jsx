import { NavLink } from "react-router";
import logo from "../assets/Logo.png"
import Button from "./Button";

const Nav = () => {
  return (
  <nav className="flex justify-between md:px-20 py-10 bg-secondary">
    <div>
      <img src={logo} alt="" />
    </div>
    <div className="flex gap-5 text-xl font-medium items-center">
      <div className="flex gap-5 text-xl font-medium bg-white rounded-full px-11 py-3">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Service</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Service</NavLink>
      </div>
      <div>
        <Button label="Contact US"  className="btn-primary"/>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
