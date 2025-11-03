import Container from "./Container";
import Button from "./Button";

const Banner = () => {
  return (
    <Container>
      {/* Glass Effect Banner */}
      <div className="relative flex items-center justify-center min-h-[70vh] my-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 "></div>

        {/* Glass Card */}
        <div className="relative z-10 text-center backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
                        px-6 md:px-16 py-16 max-w-4xl mx-auto hover:shadow-[0_8px_48px_rgba(0,196,204,0.4)] transition-all duration-500">
          <div className="space-y-3 md:space-y-5">
            <p className="md:text-2xl font-bold text-white/90 drop-shadow-md">
              Build, grow, scale
            </p>
            <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg">
              Build your freelance Business
            </h1>
            <p className="md:text-2xl font-bold text-teal-200 drop-shadow-sm">
              into a Sustainable Growth model
            </p>
          </div>

          <p className="text-white/80 text-base sm:text-lg md:text-xl mt-6 mb-10 md:mb-16 leading-relaxed drop-shadow-sm">
            MasterClass Business Incubator offers a wide range of training and workshops to build the next gen freelancers.
          </p>

          <Button
            label="Join a program now"
            className="btn-primary bg-gradient-to-r from-[#00C4CC] to-[#0F3C3C] 
                       text-white font-semibold px-8 py-3 rounded-full 
                       shadow-[0_0_15px_rgba(0,196,204,0.6)] hover:shadow-[0_0_25px_rgba(0,196,204,0.8)] 
                       transition-all duration-300"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
