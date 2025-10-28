import logo from "../assets/Client.jpeg"
import Container from './Container';

let testimonial = [
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
    {name:"Laura", deg: "Parent of 8th grade student", des:"I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”", image:logo},
]
const TextTestimonial = () => {
    return (
        <Container>
            <h2 className="section-title py-12">WHAT LEARNERS SAY</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-10">
                {testimonial.map(item => <div className="flex flex-col justify-between gap-6">
                    <div>
                        <img src={item.image}
                        className="rounded-full w-16 h-16"
                        alt="" />
                        <p>{item.des}</p>
                    </div>
                    <div>
                        <h2 className="font-bold">{item.name}</h2>
                        <p className="text-secondary">{item.deg}</p>
                    </div>
                </div>)}
            </div>
        </Container>
    );
};

export default TextTestimonial;