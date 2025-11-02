import Footer from '../Component/footer';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-[#EEF3F6] pt-5 md:pt-7'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;