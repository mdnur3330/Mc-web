import Container from './Container';
import logo from "../assets/Client.jpeg"


let led = [
    {name: "Jocelyn Schleifer", title: "Managing Director", img:logo},
    {name: "Jocelyn Schleifer", title: "Managing Director", img:logo},
    {name: "Jocelyn Schleifer", title: "Managing Director", img:logo},
    {name: "Jocelyn Schleifer", title: "Managing Director", img:logo},
]
const Leadership = () => {
    return (
        <Container>
            <h2 className='section-title '>Leadership</h2>
            <p className='text-secondary my-3'>A small, experienced team dedicated to learner success</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {led.map(item => <div>
                    <img
                    src={item.img}
                     alt="" 
                     className='w-full'
                     />
                    <div className='bg-secondary py-4 px-2'>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className='text-secondary'>{item.title}</p>
                    </div>
                </div>)}
            </div>
        </Container>
    );
};

export default Leadership;