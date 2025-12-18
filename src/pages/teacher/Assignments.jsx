import { Link } from 'react-router-dom';
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { CiClock2 } from "react-icons/ci";
import { PiTextAa } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FiExternalLink } from 'react-icons/fi';
import { PiNoteBlank } from "react-icons/pi";
import { GoNote } from "react-icons/go";
import { PiPencilSimpleLight } from "react-icons/pi";
import { RiFilePaper2Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const Assignments = () => {

    return (
        <div className="">
            <SearchInput placeholder="باستخدام عنوان الواجب أو نوعه" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 px-4">
                <div className="lg:col-span-3">
                    <div className="flex flex-col justify-start bg-indigo-100 rounded-3xl py-6 px-4 gap-4">
                        <RiFilePaper2Line className="text-2xl" />
                        <p className="font-bold text-neutral-800" style={{fontSize:'2rem'}}>إضافة واجب جديد</p>
                        <p className="text-2xl text-neutral-400">تفاصيل هنا....</p>
                        <Link
                            to='/teacher/assignments/create'
                            className='flex justify-start items-center gap-2 text-sm bg-white rounded-full px-4 py-2 text-neutral-800 hover:bg-neutral-50 transition-colors me-16 w-40'
                        >
                            <FiPlus /> إضافة واجب
                        </Link>
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
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <PiNoteBlank />عنوان الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">الواجب الأول</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />تفاصيل الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">السؤال الأول صفحة 27</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">صورة / ملف</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 mb-8"><SlCalender className="text-xl" />الخميس، 30، أكتوبر 2025 من 9:15 ص إلى 9:45 ص</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <Link 
                                        to='/teacher/assignments/2510281001'
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </Link>
                                </div>
                                
                            </div>
                        </Card>
                                              
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281002</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    2
                                </span>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <PiNoteBlank />عنوان الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">الواجب الثاني</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />تفاصيل الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">السؤال الثاني صفحة 35</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">كتابة</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 mb-8"><SlCalender className="text-xl" />الجمعة، 31، أكتوبر 2025 من 10:00 ص إلى 11:00 ص</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <Link 
                                        to='/teacher/assignments/2510281002'
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </Link>
                                </div>
                                
                            </div>
                        </Card>
                                              
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281003</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    3
                                </span>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <PiNoteBlank />عنوان الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">الواجب الثالث</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />تفاصيل الواجب
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختيار من متعدد - الفصل الثالث</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-neutral-600 flex gap-2 items-center mb-1">
                                    <GoNote />النوع
                                </p>
                                <h3 className="text-xl font-bold text-neutral-800">اختيار من متعدد</h3>
                            </div>
                            <p className="flex gap-3 items-center text-base text-neutral-600 mb-8"><SlCalender className="text-xl" />السبت، 1، نوفمبر 2025 من 2:00 م إلى 3:30 م</p>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                        <PiPencilSimpleLight className="text-gray-600" />
                                    </button>
                                    <Link 
                                        to='/teacher/assignments/2510281003'
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </Link>
                                </div>
                                
                            </div>
                        </Card>
                                              
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;