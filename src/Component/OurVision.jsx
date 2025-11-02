// import logo from "../assets/plaseHolder.png"
// import Container from './Container';

// const OurVision = () => {
//     return (
//         <Container>
//             <div className='flex flex-col md:flex-row justify-between gap-7 my-18'>
//                 <div className="flex-1">
//                     <div className="md:w-4/6 flex flex-col justify-between gap-22">
//                         <div>
//                         <h3 className="font-bold mb-6 md:text-xl">
//                             “We exist to empower learners, creators, and entrepreneurs.” 
//                         </h3>
//                         <p>
//                             We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality.
//                         </p>
//                     </div>
//                     <div className='border-t py-4'>
//                         <h4 className='font-bold'>Laura</h4>
//                         <p>CO- Founder & CTO </p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <img src={logo} alt=""
//                     className="w-full"
//                     />
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default OurVision;









import { motion } from "framer-motion";
import logo from "../assets/plaseHolder.png";
import Container from "./Container";

const OurVision = () => {
  return (
    <Container>
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-7 my-18"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="md:w-4/6 flex flex-col justify-between gap-22">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-6 md:text-xl">
                “We exist to empower learners, creators, and entrepreneurs.”
              </h3>
              <p>
                We exist to empower learners, creators, and entrepreneurs with
                the tools, mentorship, and community they need to turn ideas into
                reality. We exist to empower learners, creators, and
                entrepreneurs with the tools, mentorship, and community they
                need to turn ideas into reality.
              </p>
            </motion.div>

            <motion.div
              className="border-t py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold">Laura</h4>
              <p>CO- Founder & CTO</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt=""
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default OurVision;
