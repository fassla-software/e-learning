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
                        <p className="font-bold text-neutral-800" style={{ fontSize: '2rem' }}>الاختبارات المتاحة</p>
                        <p className="text-2xl text-neutral-400">يمكنك رؤية الاختبارات المتاحة لك هنا</p>
                    </div>
                </div>
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 text-neutral-800 text-lg rounded-full px-3 py-1">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <span className="text-sm text-orange-600 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
                                </span>
                                <button
                                    onClick={() => navigate('/student/exams/2510281001')}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-3 h-3" />
                                    بدء الاختبار
                                </button>
                            </div>
                        </Card>
                        
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 text-neutral-800 text-lg rounded-full px-3 py-1">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <span className="text-sm text-orange-600 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
                                </span>
                                <button
                                    onClick={() => navigate('/student/exams/2510281001')}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-3 h-3" />
                                    بدء الاختبار
                                </button>
                            </div>
                        </Card>

                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 text-neutral-800 text-lg rounded-full px-3 py-1">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-50 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <span className="text-sm text-orange-600 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
                                </span>
                                <button
                                    onClick={() => navigate('/student/exams/2510281001')}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-3 h-3" />
                                    بدء الاختبار
                                </button>
                            </div>
                        </Card>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exams;
