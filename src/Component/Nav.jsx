import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/Logo.png";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "About", "Service", "Portfolio", "Testimonial"];

  return (
    <Container>
      <nav className="bg-white py-4 px-6 rounded-lg flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-32 sm:w-36" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-6 bg-white rounded-full px-10 py-3 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link}
              to={link === "Home"? "/":`/${link.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {link}
            </NavLink>
          ))}
        </div>
        <Button label="Contact Us" className="btn-primary" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-secondary shadow-lg z-50 py-6 flex flex-col items-center gap-4 text-lg font-medium transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link}
              to={link === "Home"? "/":`/${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link}
            </NavLink>
          ))}
          <Button label="Contact Us" className="btn-primary mt-3" />
        </div>
      )}
    </nav>
    </Container>
  );
};

export default Nav;
