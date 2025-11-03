import Container from './Container';
import logo from "../assets/Client.jpeg";
import { motion } from "framer-motion";

let led = [
  { name: "Jocelyn Schleifer", title: "Managing Director", img: logo },
  { name: "Jocelyn Schleifer", title: "Managing Director", img: logo },
  { name: "Jocelyn Schleifer", title: "Managing Director", img: logo },
  { name: "Jocelyn Schleifer", title: "Managing Director", img: logo },
];

const Leadership = () => {
  return (
    <Container>
      <motion.h2
        className='section-title text-white/90 drop-shadow-md'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Leadership
      </motion.h2>

      <motion.p
        className='text-white/70 mt-4 mb-7 text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        A small, experienced team dedicated to learner success
      </motion.p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {led.map((item, i) => (
          <motion.div
            key={i}
            className='flex flex-col items-center rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-[0_8px_32px_rgba(0,196,204,0.3)] transition-all duration-300'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-48 object-cover rounded-t-2xl'
            />
            <div className='py-4 px-3 text-center'>
              <h3 className="font-bold text-white/90">{item.name}</h3>
              <p className='text-white/70'>{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Leadership;
