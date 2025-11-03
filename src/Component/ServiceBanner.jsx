import Container from "./Container";

const ServiceBanner = () => {
  return (
    <section className="relative py-16">
      {/* Glass Background Card */}
      <div className="absolute inset-0 backdrop-blur-md pointer-events-none rounded-3xl"></div>

      <Container>
        <div className="relative z-10 text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-6 md:px-16 py-12">
          <h1 className="section-title text-white/90 my-5">
            Choose your growth <br /> path.
          </h1>
          <p className="text-white/70 font-bold">
            Whether you’re here to sharpen skills, launch a career, or build a business—our <br /> programs are designed to guide you every step of the way.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceBanner;
