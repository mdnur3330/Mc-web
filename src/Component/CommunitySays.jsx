import logo from '../assets/banner.png'
import review from '../assets/group.png'
import client from '../assets/Client.jpeg'
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
            <div className='flex flex-col md:flex-row justify-between gap-10 bg-tertiary p-5 md:p-14'>
                <div className='flex-1 text-center'>
                    <img src={review} alt="" />
                    <Button
                    label='Join a program now'
                    className='btn-secondary  my-4 w-full'
                    />
                </div>
                <div className='flex-1'>
                    {items.map( item => <div className='flex gap-4 my-13'>
                        <img src={client} alt="" className='w-16 h-16 rounded-full' />
                        <div className='flex flex-col justify-between gap-4'>
                            <p>{item.des}</p>
                            <div>
                                <h3 className='font-bold'>{item.name}</h3>
                                <p>{item.deg}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='mt-8 border-b pb-16'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
        </Container>
    );
};

export default CommunitySays;