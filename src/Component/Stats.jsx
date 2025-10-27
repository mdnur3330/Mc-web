import CountUp from "react-countup";
import Container from "./Container";
import MarqueeText from "./MarqueeText";

const Stats = () => {
  const stats = [
    { value: 5000, suffix: "+", label: "Agents worldwide" },
    { value: 72, suffix: "%", label: "Reported career lift" },
    { value: 300, suffix: "+", label: "Customer projects shipped" },
    { value: 95, suffix: "%", label: "Learner satisfaction" },
  ];

  return (
    <Container>
      <section className="py-14">
      <div className="flex flex-wrap justify-between gap-10 py-10">
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
      <div className='my-12 border-t py-5'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
      </div>
    </section>
    </Container>
    
  );
};

export default Stats;
