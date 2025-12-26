import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaEye, FaCalendarAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbLayoutAlignMiddle } from "react-icons/tb";

import Card from '../../components/Card';
import StatsCards from '../../components/StatsCards';

const Broadcasts = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('scheduled');

    const statsData = [
        {
            icon: MdOutlineOndemandVideo,
            iconBg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            label: 'اجمالي البثوث',
            value: '2'
        },
        {
            icon: TbLayoutAlignMiddle,
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            label: 'متوسط البثوث',
            value: '2 بث كل أسبوعين'
        },
        {
            icon: FaCalendarAlt,
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600',
            label: 'بثوث مجدولة',
            value: '1'
        }
    ];

    return (
        <div className="p-6">
            <StatsCards 
                title="إحصائيات عامة" 
                titleIcon={IoStatsChart} 
                stats={statsData} 
            />

            
            {/* Tabs */}
            <div className="flex justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-800">البثوث المباشرة</h3>
                <div className="flex gap-2 text-slate-800">
                    <button 
                        onClick={() => setActiveTab('scheduled')}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                            activeTab === 'scheduled' 
                                ? 'bg-white' 
                                : 'bg-neutral-50 '
                        }`}
                    >
                        المجدولة
                    </button>
                    <button 
                        onClick={() => setActiveTab('ended')}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                            activeTab === 'ended' 
                                ? 'bg-white' 
                                : 'bg-neutral-50'
                        }`}
                    >
                        منتهي
                    </button>
                </div>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTab === 'scheduled' && (
                    <>
                        <Card className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-neutral-800">شرح الرياضيات - المشتقات</h3>
                                <button onClick={() => navigate('/teacher/broadcasts/1')}>
                                    <FaExternalLinkAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">الصف الثالث ثانوي</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-neutral-800">
                                    <FaCalendarAlt />
                                    <span>اليوم</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                        <FaEye />
                                        <span>18 مشاهدة</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                                        <FaCircle className="text-red-500" />
                                        <span>مباشر الآن</span>
                                    </button>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-neutral-800">شرح الرياضيات - المشتقات</h3>
                                <button onClick={() => navigate('/teacher/broadcasts/2')}>
                                    <FaExternalLinkAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">الصف الثالث ثانوي</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-neutral-800">
                                    <FaCalendarAlt />
                                    <span>اليوم</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                        <FaEye />
                                        <span>18 مشاهدة</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                                        <FaCircle className="text-red-500" />
                                        <span>مباشر الآن</span>
                                    </button>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-neutral-800">شرح الرياضيات - المشتقات</h3>
                                <button onClick={() => navigate('/teacher/broadcasts/3')}>
                                    <FaExternalLinkAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">الصف الثالث ثانوي</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-neutral-800">
                                    <FaCalendarAlt />
                                    <span>اليوم</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                        <FaEye />
                                        <span>18 مشاهدة</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                                        <FaCircle className="text-red-500" />
                                        <span>مباشر الآن</span>
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </>
                )}
                {activeTab === 'ended' && (
                    <>
                        <Card className="bg-white rounded-3xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-neutral-800">شرح الكيمياء العضوية</h3>
                                <button onClick={() => navigate('/teacher/broadcasts/4')}>
                                    <FaExternalLinkAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">الصف الثالث ثانوي</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-neutral-800">
                                    <FaCalendarAlt />
                                    <span>أمس</span>
                                </div>
                                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                    انتهى
                                </button>
                            </div>
                        </Card>
                    </>
                )}
            </div>
        </div>
    );
};

export default Broadcasts;