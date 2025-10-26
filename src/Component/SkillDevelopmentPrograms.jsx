import Button from './Button';
import Container from './Container';
import MarqueeText from './MarqueeText';
let development = [
    {title: "Workshop", des: "Hands-on sessions to sharpen your skills and stay ahead of industry trends.", btnTitle: "Join a workshop", borderColor: "rgba(162, 255, 138, 1)"},
    {title: "Bootcamps", des: "Intensive programs designed to transform beginners into confident professionals.", btnTitle: "Join a bootcamps", borderColor: "rgba(135, 135, 255, 1)"},
    {title: "Incubator", des: "A creative hub where ideas turn into scalable businesses with expert mentorship.", btnTitle: "Join a incubator", borderColor: "rgba(255, 255, 103, 1)"},
]

const SkillDevelopmentPrograms = () => {
    return (
        <Container>
            <h1 className='section-title my-12'>Choose your growth <br /> path.</h1>
            <div className='flex justify-between gap-9 '>
                {development.map(path => <div key={path.title} className='bg-secondary flex flex-col justify-between gap-14 p-8 border-t-10'
                style={{ borderColor: path.borderColor }}
                >
                        <div>
                            <h2 className='font-bold text-xl mb-3'>{path.title}</h2>
                            <p>{path.des}</p>
                        </div>
                        <Button
                         label={path.btnTitle}
                         className='btn-tertiary'
                         />
                </div>)}
            </div>
            <div className='mt-8'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
        </Container>
    );
};

export default SkillDevelopmentPrograms;