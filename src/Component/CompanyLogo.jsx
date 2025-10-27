import Container from "./Container";
import Clogo1 from '../assets/Union.png'
import Clogo2 from '../assets/Vector.png'

const CompanyLogo = () => {
    return (
        <Container>
            <h3 className="text-center text-secondary my-10">Trusted by learners and partners globally</h3>
            <div className="flex gap-7 md:gap-14 flex-wrap justify-center border-b pb-14">
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
                <img src={Clogo1} alt="" />
                <img src={Clogo2} alt="" />
            </div>
        </Container>
    );
};

export default CompanyLogo;