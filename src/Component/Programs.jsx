import Container from './Container';

let programs = [
    {name: "Leura", deg:"Parent of 8th grade student", title: "High-impact sessions for teams.", des: "“I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Leura", deg:"Parent of 8th grade student", title: "High-impact sessions for teams.", des: "“I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Leura", deg:"Parent of 8th grade student", title: "High-impact sessions for teams.", des: "“I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
    {name: "Leura", deg:"Parent of 8th grade student", title: "High-impact sessions for teams.", des: "“I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
]
const Programs = () => {
    return (
        <Container>
            <div className='py-12'>
                <h2 className='section-title my-10'>BY PROGRAM</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                    {programs.map(item => <div key={item.title} className='bg-secondary flex flex-col justify-between gap-6 p-4'>
                        <div>
                            <h3 className='text-xl font-bold'>{item.title}</h3>
                            <p>{item.des}</p>
                        </div>
                        <div>
                            <h4 className='font-bold'>{item.name}</h4>
                            <p>{item.deg}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </Container>
    );
};

export default Programs;