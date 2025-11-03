import { motion } from "framer-motion";
import Container from "./Container";
import logo from "../assets/plaseHolder.png";

let years = [2012, 2013, 2014, 2015];

const OurStory = () => {
  return (
    <section className="py-16 my-16 bg-[#0F3C3C]">
      <Container>
        {/* Title Animation */}
        <motion.h2
          className="section-title text-white/90 drop-shadow-md"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          our story
        </motion.h2>

        {/* Years Animation */}
        <motion.div
          className="flex gap-5 my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {years.map((year) => (
            <motion.div
              key={year}
              className="border border-white/20 py-1 px-4 rounded-3xl backdrop-blur-md bg-white/10 text-white/80 hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] transition-all duration-300 ease-in-out text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <span>{year}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section Animation */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-10 border-t border-white/20 pt-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Image Animation */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={logo}
              alt=""
              className="w-full rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right Text Animation */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] text-white/90"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We exist to empower learners, creators, and entrepreneurs with the
              tools, mentorship, and community they need to turn ideas into
              reality. We exist to empower learners, creators, and entrepreneurs
              with the tools, mentorship, and community they need to turn ideas
              into reality. We exist to empower learners, creators, and
              entrepreneurs with the tools, mentorship, and community they need
              to turn ideas into reality. We exist to empower learners, creators,
              and entrepreneurs with the tools. mentorship, and community they
              need to turn ideas into reality. We exist to empower learners,
              creators, and entrepreneurs with the tools, mentorship, and
              community they need to turn ideas into reality. We exist to empower
              learners, creators, and entrepreneurs with the tools.
            </motion.p>

            <motion.p
              className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] text-white/90 mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We exist to empower learners, creators, and entrepreneurs with the
              tools, mentorship, and community they need to turn ideas into
              reality. We exist to empower learners, creators, and entrepreneurs
              with the tools, mentorship, and community they need to turn ideas
              into reality and entrepreneurs with the tools, mentorship, and
              community they need to turn ideas into reality.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default OurStory;
