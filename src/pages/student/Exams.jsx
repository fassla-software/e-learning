import { useNavigate } from 'react-router-dom';
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FiExternalLink } from 'react-icons/fi';
import { PiShootingStar, PiNoteBlank } from "react-icons/pi";
import { GoNote } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";
import { TbLayoutAlignMiddle } from "react-icons/tb";

import CircularPercentage from "../../components/CircularPercentage";
import StatsCards from "../../components/StatsCards";

const Exams = () => {
    const navigate = useNavigate();

    const stats = [
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
        <div className="">
            <SearchInput placeholder="باستخدام عنوان الاختبار أو نوعه" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 px-4">
                <div className="lg:col-span-3">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6 text-emerald-600">
                            <h3 className="text-xl font-bold ">نسبة تفوقك على زملائك</h3>
                            <TfiStatsUp className=" text-2xl" />
                        </div>

                        <div className="flex justify-center mb-8">
                            <CircularPercentage
                                percentage={75}
                                w={160}
                                h={160}
                                strokeWidth={20}
                                strokeClass="stroke-emerald-600"
                                fontSize='text-5xl font-bold'
                            />
                        </div>

                        <StatsCards
                            stats={stats}
                            gridCols="grid-cols-1"
                        />
                    </div>
                </div>
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="bg-white rounded-3xl">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-75 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-2">
                                <button
                                    onClick={() => navigate('/student/exams/take/2510281001')}
                                    className="text-neutral-600 bg-blue-100 rounded-full p-2 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-5 h-5" />
                                </button>
                                <span className="text-sm text-orange-600 bg-orange-100 rounded-full p-2 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
                                </span>
                            </div>
                        </Card>

                        <Card className="bg-white rounded-3xl">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-75 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-2">
                                <button
                                    onClick={() => navigate('/student/exams/take/2510281001')}
                                    className="text-neutral-600 bg-blue-100 rounded-full p-2 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-5 h-5" />
                                </button>
                                <span className="text-sm text-orange-600 bg-orange-100 rounded-full p-2 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
                                </span>
                            </div>
                        </Card>

                        <Card className="bg-white rounded-3xl">
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
                            <p className="flex gap-3 items-center text-base text-neutral-600 w-75 mb-4">
                                <SlCalender className="text-3xl" />
                                <span>30 أكتوبر 2025<br />من 9:15 ص إلى 9:45 ص</span>
                            </p>
                            <div className="flex justify-between items-center pt-2">
                                <button
                                    onClick={() => navigate('/student/exams/take/2510281001')}
                                    className="text-neutral-600 bg-blue-100 rounded-full p-2 text-sm font-medium flex items-center gap-1 transition-colors"
                                >
                                    <FiExternalLink className="w-5 h-5" />
                                </button>
                                <span className="text-sm text-orange-600 bg-orange-100 rounded-full p-2 flex items-center">
                                    <CiClock2 className="ml-1" /> 30 دقيقة
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
