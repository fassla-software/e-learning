import { useParams } from 'react-router-dom';
import { FiMail, FiPhone, FiTrendingUp, FiBook, FiAward } from 'react-icons/fi';
import { PiShootingStar } from "react-icons/pi";
import { LiaNewspaperSolid } from "react-icons/lia";

const StudentInfo = () => {
    const { id } = useParams();

    return (
        <div className="space-y-8 p-4">
            {/* Student Header Card */}
            <div className="bg-blue-100 rounded-3xl h-30 w-full p-2 flex justify-between items-start px-3">
                <div className="flex items-center gap-4 mt-4">
                    <img
                        src="https://placehold.co/400"
                        alt="Student Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-bold text-neutral-800 text-5xl">
                            أحمد محمد
                        </h3>
                    </div>
                </div>
                <div className="flex gap-2 p-2">
                    <button className="bg-white p-2 hover:bg-gray-100 rounded-full">
                        <FiPhone className="w-4 h-4 text-neutral-600" />
                    </button>
                    <button className="bg-white p-2 hover:bg-gray-100 rounded-full">
                        <FiMail className="w-4 h-4 text-neutral-600" />
                    </button>
                </div>
            </div>
            <p className='text-neutral-800 font-bold text-2xl'>نظرة عامة على الطالب</p>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <PiShootingStar className="text-emerald-600 text-2xl" />
                    </div>
                    <div>
                        <span className="text-neutral-700 font-medium block">نسبة الحضور</span>
                        <p className="text-3xl font-bold text-neutral-800">85%</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <LiaNewspaperSolid className="text-indigo-600 text-2xl" />
                    </div>
                    <div>
                        <span className="text-neutral-700 font-medium block">متوسط الدرجات</span>
                        <p className="text-3xl font-bold text-neutral-800">92%</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        <FiAward className="text-sky-600 text-lg" />
                    </div>
                    <div>
                        <span className="text-neutral-700 font-medium block">الترتيب في الصف</span>
                        <p className="text-3xl font-bold text-neutral-800">4/30</p>
                    </div>
                </div>
            </div>

            {/* Grid of Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-4">
                {/* first section */}
                <div className="bg-white rounded-3xl px-4 md:px-12 pb-2 md:pb-16 pt-6 shadow-sm min-h-96">
                    <h3 className='font-bold text-black text-2xl mb-4'>البثوث المباشرة</h3>
                    
                    {/* Summary Card */}
                    <div className="p-2 md:p-4">
                        <div className="bg-indigo-200 rounded-2xl p-4 text-center mb-4">
                            <p className="text-xl font-bold text-indigo-800">28 / 30</p>
                            <p className="text-black text-base">عدد البثوث التي حضرها</p>
                        </div>

                    </div>
                    
                    {/* Attendance Items */}
                    <div className="space-y-3 px-2 md:px-4">
                        <div className="border border-black rounded-2xl p-3 flex justify-between items-center">
                            <div>
                                <p className="font-bold" style={{fontSize:'15px'}}>درس المشتقات</p>
                                <p style={{fontSize:'15px'}}>الرياضيات</p>
                            </div>
                            <div className="text-center">
                                <span className="bg-lime-500 text-white px-2 py-1 rounded-full text-sm">حضر</span>
                                <p className="text-xs text-neutral-500 mt-1">2025/11/23</p>
                            </div>
                        </div>
                        
                        <div className="border border-black rounded-2xl p-3 flex justify-between items-center">
                            <div>
                                <p className="font-bold" style={{ fontSize: '15px' }}>درس التكامل</p>
                                <p style={{ fontSize: '15px' }}>الرياضيات</p>
                            </div>
                            <div className="text-center">
                                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">غاب</span>
                                <p className="text-xs text-neutral-500 mt-1">2025/11/22</p>
                            </div>
                        </div>
                        
                        <div className="border border-black rounded-2xl p-3 flex justify-between items-center">
                            <div>
                                <p className="font-bold" style={{ fontSize: '15px' }}>درس الجبر</p>
                                <p style={{ fontSize: '15px' }}>الرياضيات</p>
                            </div>
                            <div className="text-center">
                                <span className="bg-lime-500 text-white px-2 py-1 rounded-full text-sm">حضر</span>
                                <p className="text-xs text-neutral-500 mt-1">2025/11/21</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second section */}
                <div className="bg-white rounded-3xl px-4 md:px-8 pb-2 md:pb-16 pt-6 shadow-sm min-h-96">
                    <h3 className='font-bold text-black text-2xl '>أداء المواد</h3>
                    
                    <div className="space-y-6 px-2 md:px-4 mt-2 md:mt-12">
                        <div className="bg-sky-200 border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-xl">درس المشتقات</p>
                                    <p style={{ fontSize: '15px' }}>الرياضيات</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-base font-bold mt-1">92/100</p>
                                    <div className="w-16 bg-slate-400 rounded-full h-2 mt-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-xl">درس التكامل</p>
                                    <p style={{ fontSize: '15px' }}>الرياضيات</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-base font-bold mt-1">78/100</p>
                                    <div className="w-16 bg-slate-400 rounded-full h-2 mt-2">
                                        <div className="bg-green-300 h-2 rounded-full" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-sky-200 border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-xl">درس الجبر</p>
                                    <p style={{ fontSize: '15px' }}>الرياضيات</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-base font-bold mt-1">85/100</p>
                                    <div className="w-16 bg-slate-400 rounded-full h-2 mt-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* third section */}
                <div className="bg-white rounded-3xl px-4 md:px-12 pb-2 md:pb-16 pt-6 shadow-sm min-h-96">
                    <h3 className='font-bold text-black text-2xl '>الاختبارات</h3>
                    <div className="space-y-4 px-2 md:px-4 mt-4 md:mt-10">
                        

                        <div className="border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-center mb-3">
                                <p className="font-semibold text-base">اختبار الفصل الأول</p>
                                <span className="bg-lime-500 text-white px-2 py-1 rounded-full text-sm">ناجح</span>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className='text-xs'>المادة: الرياضيات</p>
                                    <p className='text-xs'>التاريخ: 2025/11/23</p>
                                </div>
                                <div className="text-end">
                                    <p className="text-xs text-black">الدرجة: 90/100</p>
                                    <p className="text-xs text-black">المعلم: أ. إبراهيم النقي</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-center mb-3">
                                <p className="font-semibold text-base">اختبار الفصل الأول</p>
                                <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">يحتاج إلى متابعة</span>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className='text-xs'>المادة: الرياضيات</p>
                                    <p className='text-xs'>التاريخ: 2025/11/23</p>
                                </div>
                                <div className="text-end">
                                    <p className="text-xs text-black">الدرجة: 90/100</p>
                                    <p className="text-xs text-black">المعلم: أ. إبراهيم النقي</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-black rounded-3xl p-5">
                            <div className="flex justify-between items-center mb-3">
                                <p className="font-semibold text-base">اختبار الفصل الأول</p>
                                <span className="bg-lime-500 text-white px-2 py-1 rounded-full text-sm">ناجح</span>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className='text-xs'>المادة: الرياضيات</p>
                                    <p className='text-xs'>التاريخ: 2025/11/23</p>
                                </div>
                                <div className="text-end">
                                    <p className="text-xs text-black">الدرجة: 90/100</p>
                                    <p className="text-xs text-black">المعلم: أ. إبراهيم النقي</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StudentInfo;