// import Container from "./Container";
// import Clogo1 from '../assets/Union.png'
// import Clogo2 from '../assets/Vector.png'

// const CompanyLogo = () => {
//     return (
//         <Container>
//             <h3 className="text-center text-secondary mt-14 mb-10 font-bold">Trusted by learners and partners globally</h3>
//             <div className="flex gap-7 md:gap-14 flex-wrap justify-center border-b pb-14">
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//                 <img src={Clogo1} alt="" />
//                 <img src={Clogo2} alt="" />
//             </div>
//         </Container>
//     );
// };

// export default CompanyLogo;



import Container from "./Container";
import Clogo1 from "../assets/Union.png";
import Clogo2 from "../assets/Vector.png";

const logos = [Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2, Clogo1, Clogo2];

const CompanyLogo = () => {
  return (
    <Container>
      <h3 className="text-center text-secondary mt-14 mb-10 font-bold">
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
