import logo from '../assets/banner.png';
import review from '../assets/group.png';
import client from '../assets/Client.jpeg';
import Button from './Button';
import Container from './Container';
import MarqueeText from './MarqueeText';
import { motion } from 'framer-motion';

let items = [
  { name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
  { name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
  { name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const CommunitySays = () => {
  return (
    <Container>
      {/* Title */}
      <motion.h2
        className='text-center my-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C]'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What our <br /> community says
      </motion.h2>

      {/* Main Content */}
      <motion.div
        className='flex flex-col md:flex-row justify-between gap-10 
                   bg-white/10 backdrop-blur-2xl border border-white/20 
                   rounded-3xl p-5 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                   hover:shadow-[0_8px_40px_rgba(0,196,204,0.3)] 
                   transition-all duration-500'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left */}
        <motion.div
          className='flex-1 text-center flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={review}
            alt=""
            className='w-full drop-shadow-[0_0_25px_rgba(0,196,204,0.3)]'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Button
              label='Join a program now'
              className='w-full mt-6 bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] 
                         text-white rounded-full py-3 px-6 font-semibold 
                         shadow-[0_0_15px_rgba(0,196,204,0.6)] hover:shadow-[0_0_25px_rgba(0,196,204,0.8)] 
                         transition-all duration-300'
            />
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className='flex-1 flex flex-col justify-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              className='flex gap-4 my-3 bg-white/10 backdrop-blur-xl 
                         border border-white/20 rounded-2xl p-5 
                         shadow-[0_8px_24px_rgba(0,0,0,0.2)] 
                         hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] 
                         transition-all duration-300'
            >
              <motion.img
                src={client}
                alt=""
                className='w-16 h-16 rounded-full border-2 border-[#00C4CC]/60 shadow-md'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <div className='flex flex-col justify-between gap-4'>
                <p className='text-gray-100 leading-relaxed italic'>
                  {item.des}
                </p>
                <div>
                  <h3 className='font-semibold text-[#00C4CC]'>{item.name}</h3>
                  <p className='text-gray-300 text-sm'>{item.deg}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        className='mt-10 border-y border-white/20 py-5 backdrop-blur-xl bg-[#0F3C3C]/20 rounded-xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <MarqueeText>
          BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-
          BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-
          BEYOND-BRILLIANT-
        </MarqueeText>
      </motion.div>
    </Container>
  );
};

export default CommunitySays;
