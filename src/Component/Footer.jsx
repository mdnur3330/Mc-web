import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-white md:px-20 pt-16 pb-5">
        <Container>
      <div className="text-center space-y-8 mx-auto md:px-16">
       <div className="mb-9">
         <h2 className="section-title">
          Your freelancing business deserves to grow. Take the next step today.
        </h2>
        <p className="text-secondary text-xl mt-6">
          Limited spots available for serious freelancers only. Join now and
          start your transformation.
        </p>
       </div>
        <Button
         label="Join the Incubator – $150/month"
         className="btn-primary text-black"
         />
        <div>
          
        </div>
        <div className="mt-6 pt-3 text-secondary border-t">
          <p> 2025 Masterclass. All right reserved</p>
        </div>
      </div>
    </Container>
    </footer>
  );
};

export default Footer;
