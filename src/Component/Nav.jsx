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
      <nav
        className="relative z-50 mt-4 bg-white/10 backdrop-blur-xl border border-white/20 
                   rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
                   px-6 py-4 flex justify-between items-center 
                   transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,196,204,0.3)]"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-32 sm:w-36 drop-shadow-[0_2px_8px_rgba(0,196,204,0.3)]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div
            className="flex gap-8 bg-white/5 backdrop-blur-md border border-white/20 
                       rounded-full px-10 py-3 text-lg font-medium text-gray-100 
                       shadow-inner"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#00C4CC]"
                      : "text-gray-200 hover:text-[#00C4CC]"
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>

          <Button
            label="Contact Us"
            className="bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] 
                       text-white px-6 py-2 rounded-full shadow-md 
                       hover:shadow-[0_0_15px_rgba(0,196,204,0.6)] 
                       transition-all duration-300"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute top-20 left-0 w-full 
                       bg-[#0F3C3C]/60 backdrop-blur-2xl 
                       border-t border-white/20 shadow-lg z-50 
                       py-6 flex flex-col items-center gap-4 text-lg font-medium 
                       text-gray-100 transition-all duration-500 rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#00C4CC] transition-colors"
              >
                {link}
              </NavLink>
            ))}

            <Button
              label="Contact Us"
              className="bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] 
                         text-white px-6 py-2 rounded-full shadow-md 
                         hover:shadow-[0_0_15px_rgba(0,196,204,0.6)] 
                         transition-all duration-300 mt-3"
            />
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Nav;
