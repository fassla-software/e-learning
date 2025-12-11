import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBook, FiSettings, FiChevronDown, FiBell } from 'react-icons/fi';
import { FaChalkboard } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

import logo from '../assets/logo.svg';
const Navbar = ({ role = 'student' }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    // Define navigation items based on role
    const getNavItems = () => {
        switch (role) {
            case 'admin':
                return [
                    { name: 'لوحة التحكم', path: '/admin', icon: FiHome },
                    { name: 'الفصول', path: '/admin/classes', icon: FaChalkboard },
                    { name: 'الطلاب', path: '/admin/students', icon: FiUsers },
                    { name: 'المعلمون', path: '/admin/teachers', icon: FaUserGraduate },
                ];
            case 'teacher':
                return [
                    { name: 'Dashboard', path: '/teacher', icon: FiHome },
                    { name: 'My Courses', path: '/teacher/courses', icon: FiBook },
                    { name: 'Students', path: '/teacher/students', icon: FiUsers },
                    { name: 'Settings', path: '/teacher/settings', icon: FiSettings },
                ];
            case 'student':
            default:
                return [
                    { name: 'Dashboard', path: '/student', icon: FiHome },
                    { name: 'My Courses', path: '/student/courses', icon: FiBook },
                    { name: 'Settings', path: '/student/settings', icon: FiSettings },
                ];
        }
    };

    const navItems = getNavItems();

    // Find current active route
    const currentRoute = navItems.find(item => {
        if (item.path === location.pathname) return true;
        // Handle sub-routes like /admin/students/:id, but exclude exact base paths like /admin
        if (item.path !== '/admin' && item.path !== '/teacher' && item.path !== '/student' && location.pathname.startsWith(item.path + '/')) return true;
        return false;
    }) || navItems[0];
    const CurrentIcon = currentRoute.icon;

    return (
        <nav className="w-full border-b-2 border-blue-200 ">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Center/Right Section */}
                    <div className="flex items-center gap-4">
                        
                        {/* Logo - Far Right */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src={logo} alt="Logo" className="h-8 w-8" />
                        </Link>

                        {/* Vertical Divider */}
                        <div className="h-8 w-1 bg-gray-300"></div>

                        {/* Navigation Pill Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                            >
                                <CurrentIcon className="w-4 h-4" />
                                <span className="text-sm font-medium">{currentRoute.name}</span>
                                <FiChevronDown className={`w-4 h-4 transition-transform ${isNavOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isNavOpen && (
                                <div className="absolute top-full mt-2 left-0 right-0 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setIsNavOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${(location.pathname === item.path || (item.path !== '/admin' && item.path !== '/teacher' && item.path !== '/student' && location.pathname.startsWith(item.path + '/')))
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                    </div>
                    
                    {/* Bell Icon - Far Left */}
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                        <FiBell className="w-5 h-5 text-gray-700" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
