import CallToAction from "../Component/CallToAction";
import CompanyLogo from "../Component/CompanyLogo";
import Faq from "../Component/Faq";
import OurPrograms from "../Component/OurPrograms";
import ServiceBanner from "../Component/ServiceBanner";

const Service = () => {
    return (
        <div>
            <ServiceBanner />
            <OurPrograms />
            <CompanyLogo />
            <Faq />
            <CallToAction />
        </div>
    );
};

export default Service;