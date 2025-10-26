import Marquee from "react-fast-marquee";

const MarqueeText = ({children}) => {
  return (
    <Marquee 
      gradient={false} 
      speed={40} 
      className="py-3 text-lg font-semibold"
    >
      {children}
    </Marquee>
  );
};

export default MarqueeText;
