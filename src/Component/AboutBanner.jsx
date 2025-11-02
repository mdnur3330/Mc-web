// import Container from './Container';
// import logo from "../assets/plaseHolder.png"
// import MarqueeText from './MarqueeText';

// let doc = [
//     {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
//     {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
//     {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
//     {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
//     {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
// ]

// const AboutBanner = () => {
//     return (
//         <Container>
//             <h1 className='section-title text-center mt-14'>We exist to empower <br />learners</h1>
//             <p className='text-center mt-3'>
//                 Whether you’re here to sharpen skills, launch a career, or build a business—our <br /> programs are designed to guide you every step of the way.
//             </p>
//             <img src={logo} alt=""
//             className='w-full h-[200px] md:h-[500px] mt-10'
//              />
//             <div className='grid grid-cols-2 gap-7 my-6 text-secondary'>
//                 {doc.map(item => <div>
//                     <p>{item.des}</p>
//                 </div>)}
//             </div>
//             <div className='my-22 border-y py-5'>
//                             <MarqueeText>
//                                 BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
//                             </MarqueeText>
//                         </div>
//         </Container>
//     );
// };

// export default AboutBanner;


















import { motion } from "framer-motion";
import Container from "./Container";
import logo from "../assets/plaseHolder.png";
import MarqueeText from "./MarqueeText";

let doc = [
  { des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality." },
  { des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality." },
  { des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality." },
  { des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality." },
  { des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality." },
];

const AboutBanner = () => {
  return (
    <Container>
      {/* Title */}
      <motion.h1
        className="section-title text-center mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        We exist to empower <br /> learners
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-center mt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Whether you’re here to sharpen skills, launch a career, or build a business—our <br /> 
        programs are designed to guide you every step of the way.
      </motion.p>

      {/* Image */}
      <motion.img
        src={logo}
        alt=""
        className="w-full h-[200px] md:h-[500px] mt-10 object-cover"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Text grid */}
      <motion.div
        className="grid grid-cols-2 gap-7 my-6 text-secondary"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {doc.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p>{item.des}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee Section */}
      <motion.div
        className="my-22 border-y py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <MarqueeText>
          BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
        </MarqueeText>
      </motion.div>
    </Container>
  );
};

export default AboutBanner;
