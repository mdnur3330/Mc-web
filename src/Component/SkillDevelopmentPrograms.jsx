import { motion } from "framer-motion";
import Button from "./Button";
import Container from "./Container";
import MarqueeText from "./MarqueeText";

let development = [
  {
    title: "Workshop",
    des: "Hands-on sessions to sharpen your skills and stay ahead of industry trends.",
    btnTitle: "Join a workshop",
    borderColor: "rgba(162, 255, 138, 1)",
  },
  {
    title: "Bootcamps",
    des: "Intensive programs designed to transform beginners into confident professionals.",
    btnTitle: "Join a bootcamps",
    borderColor: "rgba(135, 135, 255, 1)",
  },
  {
    title: "Incubator",
    des: "A creative hub where ideas turn into scalable businesses with expert mentorship.",
    btnTitle: "Join a incubator",
    borderColor: "rgba(255, 255, 103, 1)",
  },
];

const SkillDevelopmentPrograms = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,196,204,0.2),transparent_70%)] blur-2xl"></div>

      <Container>
        {/* Title animation */}
        <motion.h1
          className="section-title mb-10 mt-16 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Choose your growth <br /> path.
        </motion.h1>

        {/* Glass Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {development.map((path, index) => (
            <motion.div
              key={path.title}
              className="relative flex flex-col justify-between gap-10 p-8 rounded-3xl 
                         backdrop-blur-xl bg-white/10 border shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                         border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-500"
              style={{
                borderTop: `6px solid ${path.borderColor}`,
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h2 className="font-bold text-xl text-[#E8FFF9] mb-3 drop-shadow-sm">
                  {path.title}
                </h2>
                <p className="text-white/80 leading-relaxed">{path.des}</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Button
                  label={path.btnTitle}
                  className="btn-tertiary bg-[#00C4CC] hover:bg-[#00d4dc] text-[#0F3C3C] font-semibold rounded-full px-6 py-3 shadow-md"
                />
              </motion.div>

              {/* glowing ring accent */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${path.borderColor}40`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Marquee animation */}
        <motion.div
          className="mt-16 border-t border-white/10 pt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
        </motion.div>
      </Container>

      {/* bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[120px] bg-[#00C4CC]/25 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default SkillDevelopmentPrograms;
