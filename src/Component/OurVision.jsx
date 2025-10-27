import logo from "../assets/plaseHolder.png"
import Container from './Container';

const OurVision = () => {
    return (
        <Container>
            <div className='flex flex-col md:flex-row justify-between gap-7 my-16'>
                <div className="flex-1">
                    <div className="md:w-4/6 flex flex-col justify-between gap-14">
                        <div>
                        <h3 className="font-bold my-6 md:text-xl">
                            “We exist to empower learners, creators, and entrepreneurs.” 
                        </h3>
                        <p>
                            We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality. We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality.
                        </p>
                    </div>
                    <div className='border-t py-4'>
                        <h4 className='font-bold'>Laura</h4>
                        <p>CO- Founder & CTO </p>
                    </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default OurVision;