import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { PiVideoLight, PiExam } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

import Card from "../../components/Card";
import CircularPercentage from "../../components/CircularPercentage";

const MyCourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - in a real app, this would be fetched based on the ID
    const course = {
        id: id || "2510281001",
        title: "مسار اللغة الإنجليزية",
        description: "في هذا المسار ستتعرف على كل ما يخص اللغة الإنجليزية، من: القواعد، كيفية تكوين جملة مفيدة، ظروف الزمان وكيفية استخدامها، والكثير من الدروس التي بإنتظارك.",
        duration: "7 ساعات",
        videos: "12 فيديو",
        exams: "1 اختبار"
    };

    const contents = [
        { id: 1, title: "مقدمة في الأزمنة", subtitle: "ستتعلم في هذا الدرس مقدمة بسيطة في الأزمنة.", percentage: 30 },
        { id: 2, title: "الدورات المخصصة", subtitle: "ستتعلم في هذا الدرس زمن الماضي وقواعده.", percentage: 0 },
    ];

    const examsList = [
        { id: 1, title: "اختبار تحديد المستوى", subtitle: "اختبار شامل لتحديد مستواك الحالي.", percentage: 0 },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between bg-indigo-100 rounded-2xl gap-12 mb-4">
                {/* Left Section - Course Info */}
                <div className="w-full lg:w-[600px]">
                    <div className="p-8 mb-6">
                        <h1 className="text-3xl font-bold text-neutral-800 mb-4">{course.title}</h1>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                            {course.description}
                        </p>

                        <div className="flex items-center gap-4 w-full">
                            <button
                                onClick={() => navigate(`/student/my-courses/${id}/learn`)}
                                className="flex-1 flex items-center justify-center gap-3 bg-indigo-600 text-white py-4 rounded-full font-bold text-xl hover:bg-neutral-700 transition-colors"
                            >
                                بدء المحتوى الدراسي
                                <FaExternalLinkAlt className="text-2xl" />
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 text-neutral-800 py-4 rounded-2xl font-bold text-lg hover:bg-neutral-50 transition-colors">
                                <FaCirclePlay className="text-2xl text-indigo-600" />
                                مشاهدة الفيديو التعريفي
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Course Stats (Same as Course Card top) */}
                <div className="w-full lg:w-fit">
                    <Card className="p-6">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <PiExam className="text-5xl text-neutral-800" />
                                    <span className="text-neutral-800 text-2xl">{course.exams}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <CgSandClock className="text-5xl text-neutral-800" />
                                    <span className="text-neutral-800 text-2xl">{course.duration}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <PiVideoLight className="text-5xl text-neutral-800" />
                                    <span className="text-neutral-800 text-2xl">{course.videos}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Course Contents Section */}
            <div className=" max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-neutral-800 mb-8">خطة المستوى الأول</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contents.map((item) => (
                        <Card key={item.id} className="bg-white rounded-none p-8 flex justify-between items-start shadow-sm border border-neutral-50">
                            <div className="flex items-start gap-4">
                                <span className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    {item.id}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-800 mb-1">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-4">{item.subtitle}</p>
                                    <button className="flex items-center gap-2 text-sm bg-neutral-800 rounded-full px-3 py-2 text-white transition-colors">
                                        بدأ الدرس
                                        <FaExternalLinkAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <CircularPercentage
                                    percentage={item.percentage}
                                    w={60}
                                    h={60}
                                    strokeWidth={6}
                                    fontSize="0.875rem"
                                    strokeClass="stroke-emerald-600"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Exams Section */}
            <div className="max-w-4xl mx-auto mt-3">
                <div className="grid grid-cols-1 gap-6">
                    {examsList.map((item) => (
                        <Card key={item.id} className="bg-red-100 rounded-none p-8 flex justify-between items-start shadow-sm border border-neutral-50">
                            <div className="flex items-start gap-4">
                                <PiExam className="text-5xl text-red-600" />

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-800 mb-1">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-4">{item.subtitle}</p>
                                    <button className="flex items-center gap-2 text-sm bg-neutral-800 rounded-full px-3 py-2 text-white transition-colors">
                                        بدأ الاختبار
                                        <FaExternalLinkAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <CircularPercentage
                                    percentage={item.percentage}
                                    w={60}
                                    h={60}
                                    strokeWidth={6}
                                    fontSize="0.875rem"
                                    strokeClass="stroke-emerald-600"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCourseDetails;
