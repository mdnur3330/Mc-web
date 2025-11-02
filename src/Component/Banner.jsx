import Container from "./Container";
import Button from "./Button";

const Banner = () => {
  return (
   
    <Container>
          {/* Left Content */}
          <div className="text-center bg-[#F1FFED] py-20 my-6">
            <div className="space-y-3 md:space-y-5">
              <p className="md:text-2xl font-bold">Build, grow, scale</p>
              <h1 className="text-3xl md:text-6xl font-bold">
              Build your freelance Business
              </h1>
              <p className="md:text-2xl font-bold">into a Sustainable Growth model</p>
            </div>

            <p className="text-secondary text-base sm:text-lg md:text-xl mt-6 mb-10 md:mb-16 leading-relaxed">
              MasterClass Business Incubator offers a wide range of training and workshops to build the next gen freelancers.
            </p>
            <Button
              label="Join a program now"
              className="btn-primary"
            />
          </div>
    </Container>
  );
};
export default Banner;