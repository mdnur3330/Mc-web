// import banner from '../assets/plaseHolder.png'
// import Container from './Container';
// import MarqueeText from './MarqueeText';

// let items = [
//     {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
//     {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
//     {name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
// ]

// const TrustedByLearners = () => {
//     return (
//         <Container>
//             <h2 className='section-title text-center my-10'>Trusted by learners and partners globally.</h2>
//             <div>
//                 <img 
//                 src={banner}
//                 alt=""
//                 className='w-full h-[400px]'
//                   />
//                 <div className='flex flex-col md:flex-row justify-between gap-6 my-5'>
//                     {items.map(item => <div className='flex flex-col justify-between gap-5'>
//                         <p>{item.des}</p>
//                         <div>
//                             <h3 className='font-bold'>{item.name}</h3>
//                             <p>{item.deg}</p>
//                         </div>
//                     </div>)}
//                 </div>
//             </div>
//             <div className='my-12 border-y py-5'>
//                 <MarqueeText>
//                     BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
//                 </MarqueeText>
//             </div>
//         </Container>
//     );
// };

// export default TrustedByLearners;




import banner from '../assets/plaseHolder.png'
import Container from './Container';
import MarqueeText from './MarqueeText';
import { motion } from 'framer-motion';

let items = [
    { name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
    { name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
    { name: "Laura", deg: "Parent of 8th grade student", des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
];

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

const TrustedByLearners = () => {
    return (
        <Container>
            <motion.h2
                className='section-title text-center my-10'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Trusted by learners and partners globally.
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.img
                    src={banner}
                    alt=""
                    className='w-full h-[400px] object-cover rounded-2xl shadow-md'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                <motion.div
                    className='flex flex-col md:flex-row justify-between gap-6 my-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={textVariant}
                            className='flex flex-col justify-between gap-5 bg-white/60 backdrop-blur-md p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
                        >
                            <p className='text-gray-700 italic'>{item.des}</p>
                            <div>
                                <h3 className='font-bold text-gray-900'>{item.name}</h3>
                                <p className='text-gray-600 text-sm'>{item.deg}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className='my-12 border-y py-5 overflow-hidden'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </motion.div>
        </Container>
    );
};

export default TrustedByLearners;
