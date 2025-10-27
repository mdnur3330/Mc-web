import AboutBanner from "../Component/AboutBanner";
import Leadership from "../Component/Leadership";
import OurStory from "../Component/OurStory";
import OurVision from "../Component/OurVision";
import Stats from "../Component/Stats";
import WantToJoin from "../Component/WantToJoin";

const About = () => {
    return (
        <div>
            <AboutBanner />
            <OurVision />
             <OurStory />
             <Stats />
            <Leadership />
            <WantToJoin />
        </div>
    );
};

export default About;