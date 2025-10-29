import Container from "./Container";
import banner from "../assets/banner.png";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-secondary py-10 md:py-20">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="section-title ">
              <span className="hidden md:block">LEARN <br /> Build<br /> Scale</span>
              <span className="md:hidden">LEARN  Build  Scale</span>
            </h1>

            <p className="text-secondary text-base sm:text-lg md:text-xl my-5 leading-relaxed">
              MasterClass Agency empowers creators and professionals through workshops, bootcamps, and a business incubator—designed to help you learn skills, build projects, and scale your success.
            </p>

            <Button
              label="Join a program now"
              className="btn-primary mx-auto w-full md:mx-0"
            />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Freelance Banner"
              className="w-4/5 sm:w-3/4 md:w-full max-w-md object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
