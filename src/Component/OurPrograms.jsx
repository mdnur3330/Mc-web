import Button from "./Button";
import Container from "./Container";

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
      <h2 className="section-title mb-10">
        OUR PROGRAMS
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((item) => (
          <div
            key={item.tag}
            className="bg-secondary p-6 shadow-sm transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
              >
                {item.tag}
              </span>
              <p><span className="text-secondary">Live:</span>  {item.liveDate}</p>
            </div>

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-secondary mb-4">{item.description}</p>

            <ul className="mb-6 space-y-1 list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          
          <Button 
          label="Enroll now"
          className="w-full btn-tertiary block text-center"
          />
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
};

export default OurPrograms;
