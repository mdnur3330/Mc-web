import banner from '../assets/banner.png'
import Container from './Container';
import MarqueeText from './MarqueeText';

let items = [
    {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
]

const TrustedByLearners = () => {
    return (
        <Container>
            <h2 className='section-title text-center my-10'>Trusted by learners and partners globally.</h2>
            <div>
                <img 
                src={banner}
                alt=""
                className='w-full h-[400px]'
                  />
                <div className='flex justify-between gap-6 my-5'>
                    {items.map(item => <div className='flex flex-col justify-between gap-5'>
                        <p>{item.des}</p>
                        <div>
                            <h3 className='font-bold'>{item.name}</h3>
                            <p>{item.deg}</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='my-12 border-y py-5'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
        </Container>
    );
};

export default TrustedByLearners;