import Footer from '../Component/footer';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;