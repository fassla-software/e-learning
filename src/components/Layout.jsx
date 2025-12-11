import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ role }) => {
    return (
        <div className="min-h-screen">
            <Navbar className='mx-12' role={role} />
            <main className="w-full py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
