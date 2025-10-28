import CountUp from "react-countup";
import Container from "./Container";

const TestimonialStats = () => {
  const stats = [
    { value: 4, suffix: ".9/5", label: "Average rating" },
    { value: 2000, suffix: "+", label: "Alumni" },
    { value: 92, suffix: "%", label: "Recommend to a friend" },
    { value: 120, suffix: "+", label: "Hiring partners" },
  ];

  return (
    <Container>
      <section className="py-10 border-t">
      <div className="flex flex-wrap justify-between gap-10">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="section-title">
              <CountUp
                end={item.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              {item.suffix}
            </h2>
            <p className="text-secondary mt-2 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
};

export default TestimonialStats;
