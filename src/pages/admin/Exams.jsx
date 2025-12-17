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

const Exams = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <SearchInput placeholder="باستخدام عنوان الاختبار أو نوعه" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 px-4">
                <div className="lg:col-span-3">
                    <div className="flex justify-between text-2xl font-bold text-neutral-800 mb-4">
                        <p>اختبارات غير معتمدة</p>
                        <CiClock2 />
                    </div>

                    <div className="flex flex-col justify-start bg-indigo-100 rounded-3xl py-6 px-4 gap-4">
                        <PiTextAa className="text-indigo-600 text-4xl" />
                        <p className="text-2xl font-bold text-neutral-800">اختبار في زمن الماضي البسيط</p>
                        <p className="text-base text-neutral-600">اختيار من متعدد</p>
                        <p className="flex gap-3 items-center text-base text-neutral-600"><SlCalender />الخميس، 30، أكتوبر 2025 من 9:15 ص إلى 9:45 ص</p>
                        <div></div>
                        <button
                            onClick={() => navigate('/admin/exams/1')}
                            className='flex justify-between items-center text-base font-bold bg-neutral-800 rounded-full px-4 py-2 text-white hover:bg-neutral-500 transition-colors me-16 w-50'
                        >
                            تفاصيل الاختبار<FiExternalLink />
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
                                        onClick={() => navigate('/admin/exams/2510281001')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    متبقي 3يوم
                                </span>
                            </div>
                        </Card>
                        
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    2
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
                                        onClick={() => navigate('/admin/exams/2510281002')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    متبقي 3يوم
                                </span>
                            </div>
                        </Card>
                        
                        <Card className="bg-white rounded-3xl shadow-md">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-neutral-600 text-base">2510281001</span>
                                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-xl">
                                    3
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
                                        onClick={() => navigate('/admin/exams/2510281003')}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                                    >
                                        <FiExternalLink className="text-gray-600" />
                                    </button>
                                </div>
                                <span
                                    className='bg-orange-100 text-orange-600 rounded-full px-4 py-2'
                                    style={{ fontSize: '12px' }}
                                >
                                    متبقي 3يوم
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