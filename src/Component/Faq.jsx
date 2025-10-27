import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "./Container";
import MarqueeText from "./MarqueeText";

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Intensive programs designed to transform beginners into confident professionals.",
  },
  {
    question: "What makes your program unique?",
    answer:
      "We focus on hands-on learning with real-world projects guided by mentors.",
  },
  {
    question: "How long does each course take?",
    answer:
      "Most of our programs last between 8 to 12 weeks, depending on the track.",
  },
  {
    question: "Can I get a certificate after completion?",
    answer:
      "Yes! You’ll receive a certificate after successfully completing all course requirements.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No prior experience is needed. Our courses start from the basics.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
        <section className="mt-28 flex flex-col md:flex-row justify-between gap-22">
        <div className="flex-1">
            <h2 className="section-title">Got <br /> Questions? <br />
             Here's FAQs
            </h2>
        </div>
      <div className="space-y-3 flex-1">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="bg-secondary p-5 transition-all hover:shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Q: {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-secondary" size={22} />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="mt-3 text-secondary text-sm leading-relaxed overflow-hidden">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
            <div className='py-10'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
    </Container>
    
  );
};

export default Faq;
