import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";

const programs = [
  {
    tag: "Workshop",
    tagColor: "bg-green-200 text-green-700",
    liveDate: "15 Oct, 2025",
    title: "Learn fast, apply faster",
    description:
      "Quick, actionable learning modules designed to upgrade your skills in days, not months.",
    points: [
      "UI/UX fundamental",
      "Marketing strategy",
      "Creative pitching",
      "Productivity hacks",
    ],
  },
  {
    tag: "Bootcamps",
    tagColor: "bg-blue-200 text-blue-700",
    liveDate: "15 Oct, 2025",
    title: "Deep Dive Into Your Future",
    description:
      "Intensive programs that prepare you for real-world challenges and help you become career-ready.",
    points: [
      "Freelancing Mastery",
      "SaaS Product Design",
      "Digital Marketing",
      "Entrepreneurship Bootcamp",
    ],
  },
  {
    tag: "Incubator",
    tagColor: "bg-yellow-200 text-yellow-700",
    liveDate: "15 Oct, 2025",
    title: "Turn Ideas Into Impact",
    description:
      "Quick, actionable learning modules designed to upgrade your skills in days, not months.",
    points: [
      "UI/UX fundamental",
      "Marketing strategy",
      "Creative pitching",
      "Productivity hacks",
    ],
  },
];

const OurPrograms = () => {
  return (
    <Container>
      <section className="py-24">
        <motion.h2
          className="section-title mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          OUR PROGRAMS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((item, i) => (
            <motion.div
              key={item.tag}
              className="flex flex-col p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <p>
                  <span className="text-white/70">Live:</span> {item.liveDate}
                </p>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white/90">{item.title}</h3>
              <p className="text-white/70 mb-4">{item.description}</p>

              <ul className="mb-6 space-y-1 list-disc list-inside text-white/70">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <Button
                label="Enroll now"
                className="w-full btn-tertiary text-black block text-center"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default OurPrograms;
