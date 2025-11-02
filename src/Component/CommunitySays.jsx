// import logo from '../assets/banner.png'
// import review from '../assets/group.png'
// import client from '../assets/Client.jpeg'
// import Button from './Button';
// import Container from './Container';
// import MarqueeText from './MarqueeText';

// let items = [
//     {name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
//     {name: "Laura", deg: "Parent of 8th grade student", img: logo, des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
//     {name: "Laura", deg: "Parent of 8th grade student", img: logo , des: "I didn’t know online tutoring could be this individualized. I’d never considered it before, but one session changed my mind.”"},
// ]


// const CommunitySays = () => {
//     return (
//         <Container>
//             <h2 className='section-title text-center my-10'>What our <br /> community says</h2>
//             <div className='flex flex-col md:flex-row justify-between gap-10 bg-tertiary p-5 md:p-14'>
//                 <div className='flex-1 text-center'>
//                     <img src={review} alt="" />
//                     <Button
//                     label='Join a program now'
//                     className='btn-secondary  my-4 w-full'
//                     />
//                 </div>
//                 <div className='flex-1'>
//                     {items.map( item => <div className='flex gap-4 my-13'>
//                         <img src={client} alt="" className='w-16 h-16 rounded-full' />
//                         <div className='flex flex-col justify-between gap-4'>
//                             <p>{item.des}</p>
//                             <div>
//                                 <h3 className='font-bold'>{item.name}</h3>
//                                 <p>{item.deg}</p>
//                             </div>
//                         </div>
//                     </div>)}
//                 </div>
//             </div>
//             <div className='mt-8 border-b pb-22'>
//                 <MarqueeText>
//                     BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
//                 </MarqueeText>
//             </div>
//         </Container>
//     );
// };

// export default CommunitySays;













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
        className='section-title text-center my-10'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What our <br /> community says
      </motion.h2>

      {/* Main Content */}
      <motion.div
        className='flex flex-col md:flex-row justify-between gap-10 bg-tertiary p-5 md:p-14'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left */}
        <motion.div
          className='flex-1 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={review}
            alt=""
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
            <Button label='Join a program now' className='btn-secondary my-4 w-full' />
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className='flex-1'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              className='flex gap-4 my-13'
            >
              <motion.img
                src={client}
                alt=""
                className='w-16 h-16 rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <div className='flex flex-col justify-between gap-4'>
                <p>{item.des}</p>
                <div>
                  <h3 className='font-bold'>{item.name}</h3>
                  <p>{item.deg}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        className='mt-8 border-b pb-22'
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

export default CommunitySays;
