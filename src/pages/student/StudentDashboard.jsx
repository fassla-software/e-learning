import { useState } from 'react';
import StatsCards from '../../components/StatsCards';
import Calendar from '../../components/student/Calendar';
import { LuClock3 } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { PiPencilSimpleLight, PiExam } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { PiShootingStar } from "react-icons/pi";
import { GoNote } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";
import { TbLayoutAlignMiddle } from "react-icons/tb";
import { VscPercentage } from "react-icons/vsc";

import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';

const StudentDashboard = () => {
    const [activeTab, setActiveTab] = useState('الواجبات');
    const stats = [
        {
            label: 'ساعات التعلم',
            value: '12',
            icon: LuClock3,
            iconBg: 'bg-indigo-100',
            iconColor: 'text-indigo-600'
        },
        {
            label: 'الدورات المسجلة',
            value: '3',
            icon: RiProfileLine,
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600'
        },
        {
            label: 'المستوى الدراسي',
            value: 'ممتاز',
            icon: FaUserGraduate,
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600'
        }
    ];

    const examStats = [
        {
            label: "أفضل درجة",
            value: "20 / 20",
            icon: PiShootingStar,
            iconBg: "",
            iconColor: "text-emerald-600"
        },
        {
            label: "متوسط الدرجات",
            value: "19.15 / 20",
            icon: TbLayoutAlignMiddle,
            iconBg: "",
            iconColor: "text-sky-600 text-4xl"
        },
        {
            label: "أفضل مادة من حيث الدرجة",
            value: "اللغة الإنجليزية، 20 / 20",
            icon: GoNote,
            iconBg: "",
            iconColor: "text-orange-600"
        }
    ];

    return (
        <div className="space-y-8 p-6">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Stats Section - 3 columns */}
                <div className="lg:col-span-3">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6 text-emerald-600">
                            <h3 className="text-xl font-bold ">نسبة التقدم دراسيًا</h3>
                            <VscPercentage className=" text-2xl" />
                        </div>
                        <p className="text-neutral-600 text-base mb-2"><span className="font-bold text-4xl">73</span> يوم</p>
                        <div className="mb-8">
                            <ProgressBar
                                percentage={20}
                                color="bg-emerald-600"
                                bgColor="bg-white"
                                width="w-full"
                                height="h-6"
                                textInside="20%"
                            />
                        </div>

                        <StatsCards
                            stats={examStats}
                            gridCols="grid-cols-1"
                        />
                    </div>
                </div>

                {/* Main Content Section - 9 columns */}
                <div className="lg:col-span-9 space-y-8">
                    <StatsCards title="إحصائيات عامة" titleIcon={IoIosStats} stats={stats} />

                    {/* Tabs */}
                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setActiveTab('الواجبات')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${activeTab === 'الواجبات'
                                ? 'bg-blue-200 text-blue-800'
                                : 'hover:bg-blue-100'
                                }`}
                        >
                            <PiPencilSimpleLight />الواجبات
                        </button>
                        <button
                            onClick={() => setActiveTab('الإختبارات')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${activeTab === 'الإختبارات'
                                ? 'bg-blue-200 text-blue-800'
                                : 'hover:bg-blue-100'
                                }`}
                        >
                            <PiExam />الإختبارات
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeTab === 'الواجبات' ? (
                            <>
                                <Card className='bg-white d-flex flex-col justify-center align-start gap-2 rounded-3xl shadow-md border border-gray-200'>
                                    <div className="flex justify-between items-center">
                                        <p className="text-neutral-600">2510281001</p>
                                        <div className="flex gap-2">

                                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{ fontSize: '32px', fontWeight: 'bold' }}>مشتقة الدوال</p>
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
                                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{ fontSize: '32px', fontWeight: 'bold' }}>مشتقة الدوال</p>
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
                                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200">
                                                <FaExternalLinkAlt className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='my-4 text-neutral-800' style={{ fontSize: '32px', fontWeight: 'bold' }}>مشتقة الدوال</p>
                                    <p className="text-neutral-600"><LuNotebookText className="inline-block mr-2" /> تفاصيل الواجب</p>
                                    <p className='text-neutral-800 mb-4' style={{ fontSize: '20px', fontWeight: 'bold' }}>السؤال الأول صفحة 27</p>
                                    <span
                                        className='bg-orange-100 text-orange-600 rounded-full px-4 py-2 mt-4'
                                        style={{ fontSize: '12px' }}
                                    >
                                        متبقي 3يوم
                                    </span>
                                </Card>
                            </>
                        ) : (
                            <>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-3xl p-6'>
                                    <p className="text-neutral-800 font-bold">اختبار الرياضيات</p>
                                    <p className="text-neutral-600 text-sm mt-2">سيظهر هنا تفاصيل الاختبار قريباً...</p>
                                </Card>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-3xl p-6'>
                                    <p className="text-neutral-800 font-bold">اختبار الفيزياء</p>
                                    <p className="text-neutral-600 text-sm mt-2">سيظهر هنا تفاصيل الاختبار قريباً...</p>
                                </Card>
                                <Card className='bg-white shadow-md border border-gray-200 rounded-3xl p-6'>
                                    <p className="text-neutral-800 font-bold">اختبار الكيمياء</p>
                                    <p className="text-neutral-600 text-sm mt-2">سيظهر هنا تفاصيل الاختبار قريباً...</p>
                                </Card>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;


