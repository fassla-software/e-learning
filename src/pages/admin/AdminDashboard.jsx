import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsSection from '../../components/admin/StatsSection';
import Card from '../../components/Card';
import { PiVideoLight } from "react-icons/pi";
import { FaExternalLinkAlt, FaEye, FaCalendarAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { PiPencilSimpleLight } from "react-icons/pi";
import { PiExam } from "react-icons/pi";
import { HiOutlineMinus } from "react-icons/hi";
import { LuNotebookText } from "react-icons/lu";
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('الواجبات');
    const navigate = useNavigate();

    return (
        <div className="space-y-6">            
            <StatsSection />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Section - البثوث */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between gap-2 mb-4">
                        <h2 style={{fontSize: '24px'}} className="font-bold">البثوث</h2>
                        <PiVideoLight className="text-xl" />
                    </div>

                    <Card className="bg-white rounded-3xl shadow-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <h3 style={{fontSize: '24px'}} className="font-bold">شرح الرياضيات - المشتقات</h3>
                            <FaExternalLinkAlt className="text-gray-500" />
                        </div>

                        <p className="text-gray-600 mb-12">الصف الثالث ثانوي</p>

                        <div className="flex justify-between items-center gap-3">
                            
                            <div className="flex items-center gap-1 text-neutral-800"
                                style={{ fontSize: '16px' }}
                            >
                                <FaCalendarAlt />
                                <span>اليوم</span>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                                <button className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                                    <FaEye className="text-xs" />
                                    <span>18 مشاهدة</span>
                                </button>

                                <button className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                                    <FaCircle className="text-red-500 text-xs" />
                                    <span>مباشر الآن</span>
                                </button>

                            </div>
                        </div>
                    </Card>
                    <div 
                        className="card-dashed-container mt-4 cursor-pointer"
                        onClick={() => navigate('/admin/schedule-broadcast')}
                    >
                        <svg className="card-dashed-border" width="100%" height="100%">
                            <rect
                                x="2"
                                y="2"
                                width="calc(100% - 4px)"
                                height="calc(100% - 4px)"
                                fill="none"
                                stroke="#A1A1A1"
                                strokeWidth="3"
                                strokeDasharray="15 10"
                                strokeLinecap="round"
                                rx="24"
                                ry="24"
                            />
                        </svg>
                        <div className="card-dashed-content flex flex-col items-center justify-center gap-2 text-neutral-400 "
                            style={{ fontSize: '24px' }}
                        >
                            <FaCalendarAlt/>
                            <p className="mt-2 text-center">جدولة بث جديد</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Cards Grid */}
                <div className="lg:col-span-8">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-4">
                        <button 
                            onClick={() => setActiveTab('الواجبات')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${
                                activeTab === 'الواجبات' 
                                    ? 'bg-blue-200 text-blue-800' 
                                    : 'hover:bg-blue-100'
                            }`}
                        >
                            <PiPencilSimpleLight/>الواجبات
                        </button>
                        <button 
                            onClick={() => setActiveTab('الإختبارات')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${
                                activeTab === 'الإختبارات' 
                                    ? 'bg-blue-200 text-blue-800' 
                                    : 'hover:bg-blue-100'
                            }`}
                        >
                            <PiExam/>الإختبارات
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeTab === 'الواجبات' ? (
                            <>
                                <Card className='bg-white d-flex flex-col justify-center align-start gap-2 rounded-3xl shadow-md border border-gray-200'>
                                    <div className="flex justify-between items-center">
                                        <p className="text-neutral-600">2510281001</p>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <PiPencilSimpleLight className="text-gray-600" />
                                            </button>
                                            <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{fontSize: '32px', fontWeight: 'bold'}}>مشتقة الدوال</p>
                                    <p className="text-neutral-600"><LuNotebookText className="inline-block mr-2" /> تفاصيل الواجب</p>
                                    <p className='text-neutral-800 mb-4' style={{ fontSize: '20px', fontWeight: 'bold' }}>السؤال الأول صفحة 27</p>
                                    <span 
                                        className='bg-orange-100 text-orange-600 rounded-full px-4 py-2 mt-4'
                                        style={{ fontSize: '12px' }}
                                    >
                                        متبقي 3يوم
                                    </span>
                                </Card>
                                <Card className='bg-white d-flex flex-col justify-center align-start gap-2 rounded-3xl shadow-md border border-gray-200'>
                                    <div className="flex justify-between items-center">
                                        <p className="text-neutral-600">2510281001</p>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <PiPencilSimpleLight className="text-gray-600" />
                                            </button>
                                            <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{fontSize: '32px', fontWeight: 'bold'}}>مشتقة الدوال</p>
                                    <p className="text-neutral-600"><LuNotebookText className="inline-block mr-2" /> تفاصيل الواجب</p>
                                    <p className='text-neutral-800 mb-4' style={{ fontSize: '20px', fontWeight: 'bold' }}>السؤال الأول صفحة 27</p>
                                    <span 
                                        className='bg-orange-100 text-orange-600 rounded-full px-4 py-2 mt-4'
                                        style={{ fontSize: '12px' }}
                                    >
                                        متبقي 3يوم
                                    </span>
                                </Card>
                                <Card className='bg-white d-flex flex-col justify-center align-start gap-2 rounded-3xl shadow-md border border-gray-200'>
                                    <div className="flex justify-between items-center">
                                        <p className="text-neutral-600">2510281001</p>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <PiPencilSimpleLight className="text-gray-600" />
                                            </button>
                                            <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{fontSize: '32px', fontWeight: 'bold'}}>مشتقة الدوال</p>
                                    <p className="text-neutral-600"><LuNotebookText className="inline-block mr-2" /> تفاصيل الواجب</p>
                                    <p className='text-neutral-800 mb-4' style={{ fontSize: '20px', fontWeight: 'bold' }}>السؤال الأول صفحة 27</p>
                                    <span 
                                        className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                        style={{ fontSize: '12px' }}
                                    >
                                        متبقي 3يوم
                                    </span>
                                </Card>
                                
                            </>
                        ) : (
                            <>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-lg'>
                                    <p>اختبار الرياضيات</p>
                                </Card>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-lg'>
                                    <p>اختبار الفيزياء</p>
                                </Card>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-lg'>
                                    <p>اختبار الكيمياء</p>
                                </Card>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
