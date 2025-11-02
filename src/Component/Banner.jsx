import Container from "./Container";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-black/40"></div> {/* dark overlay */}

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl shadow-lg px-6 py-16 md:py-20">
          <div className="space-y-3 md:space-y-5">
            <p className="md:text-2xl font-bold text-white">Build, grow, scale</p>
            <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md">
              Build your freelance Business
            </h1>
            <p className="md:text-2xl font-bold text-white">
              into a Sustainable Growth model
            </p>
          </div>

          <p className="text-gray-100 text-base sm:text-lg md:text-xl mt-6 mb-10 md:mb-16 leading-relaxed">
            MasterClass Business Incubator offers a wide range of training and workshops 
            to build the next gen freelancers.
          </p>

          <Button label="Join a program now" className="btn-primary" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
