import Container from "./Container";
import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <section className="bg-secondary py-10">
          <Container>
           <div  className="flex justify-between">
             <div>
                <h1 className="section-title">
              Build & <br /> grow your <br />freelance <br />business
            </h1>
            <p className="text-secondary my-5">
              Join the MasterClass Business Incubator – $150/ month to get <br />
              structured guidance, accountability, and growth.
            </p>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
           </div>
           </Container>
        </section>
    );
};

export default Banner;