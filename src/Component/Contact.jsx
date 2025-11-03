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
            <h2 className="section-title my-5 text-white/90 drop-shadow-md">Get in touch</h2>
            <p className="text-gray-200 leading-relaxed">
              Want more info from our Admissions team or interested in <br />
              applying for a course? Let’s chat.
            </p>
          </motion.div>

          <motion.form
            className="space-y-4 md:w-5/6"
            variants={fadeUp}
            custom={0.5}
          >
            <motion.div variants={fadeUp} custom={0.6} className="border border-white/30 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none p-3 w-full bg-transparent text-white placeholder-white/70"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.8} className="border border-white/30 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <input
                type="email"
                placeholder="Email"
                className="outline-none p-3 w-full bg-transparent text-white placeholder-white/70"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="border border-white/30 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <input
                type="number"
                placeholder="Phone"
                className="outline-none p-3 w-full bg-transparent text-white placeholder-white/70"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1.2} className="border border-white/30 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <select className="outline-none p-3 w-full bg-transparent text-white placeholder-white/70">
                <option value="">Subject</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Courses</option>
                <option value="support">Support</option>
              </select>
            </motion.div>
            <motion.div variants={fadeUp} custom={1.4} className="flex items-center text-white/80">
              <input type="checkbox" className="mr-2 accent-[#00C4CC]" />
              <span>
                By submitting this form, you agree to receive <br />
                <b>Terms & Condition, Privacy policy</b>
              </span>
            </motion.div>
            <motion.div variants={fadeUp} custom={1.6}>
              <Button
                label="Submit"
                className="w-full block text-center bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-[0_0_25px_rgba(0,196,204,0.6)] transition-all duration-300"
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
            className="w-full h-full rounded-2xl shadow-lg backdrop-blur-sm"
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
