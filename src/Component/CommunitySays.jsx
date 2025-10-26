import logo from '../assets/banner.png'
import Button from './Button';
import Container from './Container';
import MarqueeText from './MarqueeText';

let items = [
    {name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Laura", deg: "Parent of 8th grade student", img: logo , des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
]


const CommunitySays = () => {
    return (
        <Container>
            <h2 className='section-title text-center my-10'>What our <br /> community says</h2>
            <div className='flex justify-between bg-tertiary p-10'>
                <div className='flex-1'>
                    <img src={logo} alt="" />
                    <Button
                    label='Join a program now'
                    className='btn-secondary  my-4'
                    />
                </div>
                <div className='flex-1'>
                    {items.map( item => <div className='flex gap-4 mb-3'>
                        <img src="" alt="" />
                        <div className='flex flex-col justify-between gap-6'>
                            <p>{item.des}</p>
                            <div>
                                <h3 className='font-bold'>{item.name}</h3>
                                <p>{item.deg}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='mt-8'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
        </Container>
    );
};

export default CommunitySays;