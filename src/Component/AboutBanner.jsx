import Container from './Container';
import logo from "../assets/plaseHolder.png"
import MarqueeText from './MarqueeText';

let doc = [
    {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
    {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
    {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
    {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
    {des: "We exist to empower learners, creators, and entrepreneurs with the tools, mentorship, and community they need to turn ideas into reality."},
]

const AboutBanner = () => {
    return (
        <Container>
            <h1 className='section-title text-center mt-14'>We exist to empower <br />learners</h1>
            <p className='text-center mt-3'>
                Whether you’re here to sharpen skills, launch a career, or build a business—our <br /> programs are designed to guide you every step of the way.
            </p>
            <img src={logo} alt=""
            className='w-full h-[200px] md:h-[500px] mt-10'
             />
            <div className='grid grid-cols-2 gap-7 my-6 text-secondary'>
                {doc.map(item => <div>
                    <p>{item.des}</p>
                </div>)}
            </div>
            <div className='my-22 border-y py-5'>
                            <MarqueeText>
                                BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                            </MarqueeText>
                        </div>
        </Container>
    );
};

export default AboutBanner;