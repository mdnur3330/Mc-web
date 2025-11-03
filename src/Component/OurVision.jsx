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
          <div className="md:w-4/6 flex flex-col justify-between gap-10">
            <motion.div
              className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-6 md:text-xl text-white/90 drop-shadow-md">
                “We exist to empower learners, creators, and entrepreneurs.”
              </h3>
              <p className="text-white/80 leading-relaxed drop-shadow-sm">
                We exist to empower learners, creators, and entrepreneurs with
                the tools, mentorship, and community they need to turn ideas into
                reality. We exist to empower learners, creators, and
                entrepreneurs with the tools, mentorship, and community they
                need to turn ideas into reality.
              </p>
            </motion.div>

            <motion.div
              className="border-t border-white/20 py-4 text-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white drop-shadow-sm">Laura</h4>
              <p className="text-white/70 drop-shadow-sm">CO- Founder & CTO</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt=""
            className="w-full rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm border border-white/20"
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
