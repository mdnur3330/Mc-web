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
            {/* Title */}
            <motion.h2
                className='section-title text-center my-10 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C]'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Trusted by learners and partners globally.
            </motion.h2>

            {/* Banner */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-lg"
            >
                <motion.img
                    src={banner}
                    alt=""
                    className='w-full h-[400px] object-cover rounded-3xl'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3C3C]/70 via-[#0F3C3C]/40 to-transparent rounded-3xl" />
            </motion.div>

            {/* Glass effect cards */}
            <motion.div
                className='flex flex-col md:flex-row justify-between gap-6 my-8'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={textVariant}
                        className='flex flex-col justify-between gap-5 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,196,204,0.3)] transition-all duration-300'
                    >
                        <p className='text-gray-100 italic leading-relaxed'>{item.des}</p>
                        <div>
                            <h3 className='font-semibold text-[#00C4CC]'>{item.name}</h3>
                            <p className='text-gray-300 text-sm'>{item.deg}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Marquee Text */}
            <motion.div
                className='my-12 border-y border-white/20 py-5 overflow-hidden backdrop-blur-xl bg-[#0F3C3C]/20 rounded-xl'
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
