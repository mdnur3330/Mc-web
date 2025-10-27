import { Link } from "react-router";

const Button = ({ 
  label = "", 
  onClick, 
  type = "button", 
  className = "" 
}) => {
  return (
    <Link
      type={type}
      onClick={onClick}
      className={`text-xl px-5 md:px-10 py-2 font-medium md:font-bold cursor-pointer rounded-md md:rounded-full transition ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;