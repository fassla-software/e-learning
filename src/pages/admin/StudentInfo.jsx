import { useParams } from 'react-router-dom';
import { FiMail, FiPhone, FiTrendingUp, FiBook, FiAward } from 'react-icons/fi';
import { PiShootingStar } from "react-icons/pi";
import { LiaNewspaperSolid } from "react-icons/lia";
import ProgressBar from '../../components/ProgressBar';
import StatsCards from '../../components/StatsCards';

const StudentInfo = () => {
    const { id } = useParams();

    const statsData = [
        {
            icon: PiShootingStar,
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            label: 'نسبة الحضور',
            value: '85%'
        },
        {
            icon: LiaNewspaperSolid,
            iconBg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            label: 'متوسط الدرجات',
            value: '92%'
        },
        {
            icon: FiAward,
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600',
            label: 'الترتيب في الصف',
            value: '4/30'
        }
    ];

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
                        <h3 className="font-bold text-neutral-800 text-2xl md:text-3xl lg:text-5xl">
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
            <StatsCards 
                title="نظرة عامة على الطالب" 
                stats={statsData} 
            />

            {/* Grid of Three Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 md:px-4">
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
                                    <div className="mt-2">
                                        <ProgressBar percentage={92} showPercentage={false} />
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
                                    <div className="mt-2">
                                        <ProgressBar percentage={78} color="bg-green-300" showPercentage={false} />
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
                                    <div className="mt-2">
                                        <ProgressBar percentage={85} showPercentage={false} />
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