// import Container from "./Container";
// import logo from "../assets/plaseHolder.png"

// let years = [2012,2013,2014,2015]

// const OurStory = () => {
//     return (
//         <section className="bg-secondary py-16 my-16">
//             <Container>
//             <h2 className='section-title'>our story</h2>
//             <div className="flex gap-5 my-6">
//             {years.map(year => (
//                 <div
//                 key={year}
//                 className="
//                     border py-1 px-4 rounded-3xl 
//                     hover:bg-[var(--color-tertiary)] hover:border-transparent 
//                     transition-all duration-300 ease-in-out
//                 "
//                 >
//                 <span>{year}</span>
//                 </div>
//             ))}
//             </div>
//             <div className="flex flex-col md:flex-row justify-between gap-10 border-t pt-10">
//                 <div className="flex-1">
//                     <img src={logo} alt=""
//                     className="w-full"
//                     />
//                 </div>
//                 <div className="flex-1">
//                     <p>We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools.  mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools.</p>

//                     <p className="mt-7">
//                         We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality  and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality.
//                     </p>
//                 </div>
//             </div>
//         </Container>
//         </section>
        
//     );
// };

// export default OurStory;




import { motion } from "framer-motion";
import Container from "./Container";
import logo from "../assets/plaseHolder.png";

let years = [2012, 2013, 2014, 2015];

const OurStory = () => {
  return (
    <section className="bg-secondary py-16 my-16">
      <Container>
        {/* Title Animation */}
        <motion.h2
          className="section-title"
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
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {years.map((year) => (
            <motion.div
              key={year}
              className="border py-1 px-4 rounded-3xl hover:bg-[var(--color-tertiary)] hover:border-transparent transition-all duration-300 ease-in-out"
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
          className="flex flex-col md:flex-row justify-between gap-10 border-t pt-10"
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
              className="w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right Text Animation */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
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
              className="mt-7"
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
