import Container from "./Container";
import logo from "../assets/plaseHolder.png"

let years = [2012,2013,2014,2015]

const OurStory = () => {
    return (
        <section className="bg-secondary py-10">
            <Container>
            <h2 className='section-title'>our story</h2>
            <div className="flex gap-5 my-6">
            {years.map(year => (
                <div
                key={year}
                className="
                    border py-1 px-4 rounded-3xl 
                    hover:bg-[var(--color-tertiary)] hover:border-transparent 
                    transition-all duration-300 ease-in-out
                "
                >
                <span>{year}</span>
                </div>
            ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10 border-t pt-10">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-1">
                    <p>We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools.  mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools.</p>

                    <p className="mt-7">
                        We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality  and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality.
                    </p>
                </div>
            </div>
        </Container>
        </section>
        
    );
};

export default OurStory;