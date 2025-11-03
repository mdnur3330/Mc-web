



import Container from "./Container";
import Clogo1 from "../assets/Union.png";
import Clogo2 from "../assets/Vector.png";

const logos = [Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2];

const CompanyLogo = () => {
  return (
    <Container>
      <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] mt-14 mb-10 font-bold text-2xl md:text-3xl">
        Trusted by learners and partners globally
      </h3>
      <div className="relative overflow-hidden border-b pb-14">
        <div className="flex gap-14 animate-slide">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="w-24 md:w-28 h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CompanyLogo;
