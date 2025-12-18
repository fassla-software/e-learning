import { useNavigate } from 'react-router-dom';
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { CiClock2 } from "react-icons/ci";
import { PiTextAa } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FiExternalLink } from 'react-icons/fi';
import { PiNoteBlank } from "react-icons/pi";
import { GoNote } from "react-icons/go";
import { PiPencilSimpleLight } from "react-icons/pi";
import { FaPlus, FaTimes } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

const Exams = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <SearchInput placeholder="باستخدام عنوان الاختبار أو نوعه" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 px-4">
                <div className="lg:col-span-3">
                    <div className="flex flex-col justify-start bg-indigo-100 rounded-3xl py-6 px-4 gap-4">
                        <PiExam className="text-2xl" />
                        <p className="font-bold text-neutral-800" style={{fontSize:'2rem'}}>إنشاء اختبار جديد</p>
                        <p className="text-2xl text-neutral-400">تفاصيل هنا....</p>
                        <button
                            onClick={() => navigate('/teacher/exams/create')}
                            className='flex justify-start items-center gap-2 text-sm bg-white rounded-full px-4 py-2 text-neutral-800 hover:bg-neutral-50 transition-colors me-16 w-40'
                        >
                            <FiPlus /> إضافة اختبار
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    1
                                </span>
                            </div>
                            <div className="mb-3">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <PiNoteBlank />عنوان الاختبار
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار رياضيات - الفصل الأول</h3>
                            </div>
                            <div className="mb-2">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار من متعدد</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-8"><SlCalender className="text-3xl" />الخميس، 30، أكتوبر 2025 من 9:15 ص إلى 9:45 ص</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <button 
                                        onClick={() => navigate('/teacher/exams/2510281001')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    <CiClock2 className='inline me-1 text-xl' />مدة الإختبار 30 دقيقة
                                </span>
                            </div>
                        </Card>
                        
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    1
                                </span>
                            </div>
                            <div className="mb-3">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <PiNoteBlank />عنوان الاختبار
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار رياضيات - الفصل الأول</h3>
                            </div>
                            <div className="mb-2">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار من متعدد</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-8"><SlCalender className="text-3xl" />الخميس، 30، أكتوبر 2025 من 9:15 ص إلى 9:45 ص</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <button 
                                        onClick={() => navigate('/teacher/exams/2510281001')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    <CiClock2 className='inline me-1 text-xl' />مدة الإختبار 30 دقيقة
                                </span>
                            </div>
                        </Card>
                        
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    1
                                </span>
                            </div>
                            <div className="mb-3">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <PiNoteBlank />عنوان الاختبار
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار رياضيات - الفصل الأول</h3>
                            </div>
                            <div className="mb-2">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-2">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختبار من متعدد</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-8"><SlCalender className="text-3xl" />الخميس، 30، أكتوبر 2025 من 9:15 ص إلى 9:45 ص</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <button 
                                        onClick={() => navigate('/teacher/exams/2510281001')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    <CiClock2 className='inline me-1 text-xl' />مدة الإختبار 30 دقيقة
                                </span>
                            </div>
                        </Card>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Exams;