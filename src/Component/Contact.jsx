// import Container from "./Container";
// import logo from "../assets/plaseHolder.png";
// import Button from "./Button";

// const Contact = () => {
//   return (
//     <Container>
//       <div className="flex flex-col md:flex-row gap-7 mb-24">
//         <div className="space-y-6 flex-1">
//           {/* Contact Form */}
//           <div>
//             <h2 className="section-title my-5">Get in touch</h2>
//             <p>
//               Want more info from our Admissions team or interested in <br /> applying
//               for a course? Let’s chat.
//             </p>
//           </div>
//           <form className="space-y-4 md:w-5/6">
//             <div className="border border-gray-300">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="outline-none p-3 w-full"
//               />
//             </div>
//             <div className="border border-gray-300">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="outline-none p-3 w-full"
//               />
//             </div>
//             <div className="border border-gray-300">
//               <input
//                 type="number"
//                 placeholder="Phone"
//                 className="outline-none p-3 w-full"
//               />
//             </div>
//             <div className="border border-gray-300">
//               <select className="outline-none p-3 w-full">
//                 <option value="">Subject</option>
//                 <option value="admissions">Admissions</option>
//                 <option value="courses">Courses</option>
//                 <option value="support">Support</option>
//               </select>
//             </div>
//             <div>
//               <input type="checkbox" className="mr-2" />
//               <span>
//                 By submitting this form, you agree to receive <br />
//                 <b>Terms & Condition, Privacy policy</b>
//               </span>
//             </div>
//             <div>
//               <Button label="Submit"
//             className="w-full block text-center btn-secondary"
//             />
//             </div>
//           </form>
//         </div>
//         {/* Image */}
//         <div className="flex-1 flex justify-center items-center">
//           <img
//             src={logo}
//             alt="Contact illustration"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Contact;





















import Container from "./Container";
import logo from "../assets/plaseHolder.png";
import Button from "./Button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <Container>
      <motion.div
        className="flex flex-col md:flex-row gap-7 mb-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Section - Form */}
        <motion.div
          className="space-y-6 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <h2 className="section-title my-5">Get in touch</h2>
            <p>
              Want more info from our Admissions team or interested in <br />
              applying for a course? Let’s chat.
            </p>
          </motion.div>

          <motion.form
            className="space-y-4 md:w-5/6"
            variants={fadeUp}
            custom={0.5}
          >
            <motion.div variants={fadeUp} custom={0.6} className="border border-gray-300">
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none p-3 w-full"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.8} className="border border-gray-300">
              <input
                type="email"
                placeholder="Email"
                className="outline-none p-3 w-full"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="border border-gray-300">
              <input
                type="number"
                placeholder="Phone"
                className="outline-none p-3 w-full"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1.2} className="border border-gray-300">
              <select className="outline-none p-3 w-full">
                <option value="">Subject</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Courses</option>
                <option value="support">Support</option>
              </select>
            </motion.div>
            <motion.div variants={fadeUp} custom={1.4}>
              <input type="checkbox" className="mr-2" />
              <span>
                By submitting this form, you agree to receive <br />
                <b>Terms & Condition, Privacy policy</b>
              </span>
            </motion.div>
            <motion.div variants={fadeUp} custom={1.6}>
              <Button
                label="Submit"
                className="w-full block text-center btn-secondary"
              />
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt="Contact illustration"
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Contact;
