import Banner from '../Component/Banner';
import CommunitySays from '../Component/CommunitySays';
import Contact from '../Component/Contact';
import SkillDevelopmentPrograms from '../Component/SkillDevelopmentPrograms';
import TrustedByLearners from '../Component/TrustedByLearners';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner />
            <SkillDevelopmentPrograms />
            <TrustedByLearners />
            <CommunitySays />
            <Contact />
        </div>
    );
};

export default Home;