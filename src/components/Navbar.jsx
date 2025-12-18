import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBook, FiSettings, FiChevronDown, FiBell, FiFileText } from 'react-icons/fi';
import { VscChecklist } from 'react-icons/vsc';
import { FaUserCheck } from 'react-icons/fa';
import { PiExam } from 'react-icons/pi';
import { FaChalkboard } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { PiVideoLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import ProfileModal from './ProfileModal';

import logo from '../assets/logo.svg';
const Navbar = ({ role = 'student' }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const logoRef = useRef(null);
    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        if (isNavOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavOpen]);

    // Mock user data - replace with actual user data
    const user = {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        profileImage: ""
    };

    // Define navigation items based on role
    const getNavItems = () => {
        switch (role) {
            case 'admin':
                return [
                    { name: 'لوحة التحكم', path: '/admin', icon: FiHome },
                    { name: 'الفصول', path: '/admin/classes', icon: FaChalkboard },
                    { name: 'الطلاب', path: '/admin/students', icon: FiUsers },
                    { name: 'المعلمون', path: '/admin/teachers', icon: FaUserGraduate },
                    { name: 'المناهج', path: '/admin/curricula', icon: IoBookOutline },
                    { name: 'الاختبارات', path: '/admin/exams', icon: FiFileText },
                    { name: 'البثوث', path: '/admin/broadcasts', icon: PiVideoLight },
                ];
            case 'teacher':
                return [
                    { name: 'لوحة التحكم', path: '/teacher', icon: FiHome },
                    { name: 'My Courses', path: '/teacher/courses', icon: FiBook },
                    { name: 'Students', path: '/teacher/students', icon: FiUsers },
                    { name: 'الواجبات', path: '/teacher/assignments', icon: VscChecklist },
                    { name: 'الاختبارات', path: '/teacher/exams', icon: PiExam },
                    { name: 'الحضور والغياب', path: '/teacher/attendance', icon: FaUserCheck },
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
                        <div className="relative">
                            {role === 'teacher' ? (
                                <button 
                                    ref={logoRef}
                                    onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
                                    className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
                                >
                                    <img src={logo} alt="Logo" className="h-8 w-8" />
                                </button>
                            ) : (
                                <Link to="/" className="flex items-center gap-2 group">
                                    <img src={logo} alt="Logo" className="h-8 w-8" />
                                </Link>
                            )}
                            
                            {/* Profile Modal */}
                            {role === 'teacher' && (
                                <ProfileModal 
                                    isOpen={isProfileModalOpen} 
                                    onClose={() => setIsProfileModalOpen(false)}
                                    user={user}
                                    triggerRef={logoRef}
                                />
                            )}
                        </div>

                        {/* Vertical Divider */}
                        <div className="h-8 w-1 bg-gray-300"></div>

                        {/* Navigation Pill Dropdown */}
                        <div className="relative" ref={navRef}>
                            <button
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                            >
                                <CurrentIcon className="w-4 h-4" />
                                <span className="text-sm font-medium">{currentRoute.name}</span>
                                <HiMiniChevronUpDown className={`w-4 h-4 transition-transform ${isNavOpen ? 'rotate-180' : ''}`} />
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
