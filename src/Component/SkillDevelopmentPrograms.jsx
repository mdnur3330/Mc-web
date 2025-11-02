// import Button from './Button';
// import Container from './Container';
// import MarqueeText from './MarqueeText';
// let development = [
//     {title: "Workshop", des: "Hands-on sessions to sharpen your skills and stay ahead of industry trends.", btnTitle: "Join a workshop", borderColor: "rgba(162, 255, 138, 1)"},
//     {title: "Bootcamps", des: "Intensive programs designed to transform beginners into confident professionals.", btnTitle: "Join a bootcamps", borderColor: "rgba(135, 135, 255, 1)"},
//     {title: "Incubator", des: "A creative hub where ideas turn into scalable businesses with expert mentorship.", btnTitle: "Join a incubator", borderColor: "rgba(255, 255, 103, 1)"},
// ]

// const SkillDevelopmentPrograms = () => {
//     return (
//         <Container>
//             <h1 className='section-title mb-10 mt-16'>Choose your growth <br /> path.</h1>
//             <div className='flex flex-col md:flex-row justify-between gap-12 '>
//                 {development.map(path => <div key={path.title} className='bg-secondary flex flex-col justify-between gap-14 p-8 border-t-10'
//                 style={{ borderColor: path.borderColor }}
//                 >
//                         <div>
//                             <h2 className='font-bold text-xl mb-3'>{path.title}</h2>
//                             <p>{path.des}</p>
//                         </div>
//                         <Button
//                          label={path.btnTitle}
//                          className='btn-tertiary'
//                          />
//                 </div>)}
//             </div>
//             <div className='mt-8 border-b pb-16'>
//                 <MarqueeText>
//                     BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
//                 </MarqueeText>
//             </div>
//         </Container>
//     );
// };

// export default SkillDevelopmentPrograms;


import { motion } from "framer-motion";
import Button from './Button';
import Container from './Container';
import MarqueeText from './MarqueeText';

let development = [
    {title: "Workshop", des: "Hands-on sessions to sharpen your skills and stay ahead of industry trends.", btnTitle: "Join a workshop", borderColor: "rgba(162, 255, 138, 1)"},
    {title: "Bootcamps", des: "Intensive programs designed to transform beginners into confident professionals.", btnTitle: "Join a bootcamps", borderColor: "rgba(135, 135, 255, 1)"},
    {title: "Incubator", des: "A creative hub where ideas turn into scalable businesses with expert mentorship.", btnTitle: "Join a incubator", borderColor: "rgba(255, 255, 103, 1)"},
];

const SkillDevelopmentPrograms = () => {
    return (
        <Container>
            {/* Title animation */}
            <motion.h1
                className='section-title mb-10 mt-16'
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Choose your growth <br /> path.
            </motion.h1>

            {/* Cards animation */}
            <div className='flex flex-col md:flex-row justify-between gap-12 '>
                {development.map((path, index) => (
                    <motion.div
                        key={path.title}
                        className='bg-secondary flex flex-col justify-between gap-14 p-8 border-t-10'
                        style={{ borderColor: path.borderColor }}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div>
                            <h2 className='font-bold text-xl mb-3'>{path.title}</h2>
                            <p>{path.des}</p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Button
                                label={path.btnTitle}
                                className='btn-tertiary'
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Marquee animation */}
            <motion.div
                className='mt-8 border-b pb-16'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </motion.div>
        </Container>
    );
};

export default SkillDevelopmentPrograms;
