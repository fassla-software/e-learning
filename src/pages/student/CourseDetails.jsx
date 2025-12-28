import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { PiVideoLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import Card from "../../components/Card";
import CircularPercentage from "../../components/CircularPercentage";

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - in a real app, this would be fetched based on the ID
    const course = {
        id: id || "2510281001",
        title: "مسار اللغة الإنجليزية",
        description: "في هذا المسار ستتعرف على كل ما يخص اللغة الإنجليزية، من: القواعد، كيفية تكوين جملة مفيدة، ظروف الزمان وكيفية استخدامها، والكثير من الدروس التي بإنتظارك.",
        duration: "7 ساعات",
        videos: "12 فيديو"
    };

    const contents = [
        { id: 1, title: "الدورات المخصصة", subtitle: "القراءة، الاستماع، الخ...", percentage: 0 },
        { id: 2, title: "الدورات المخصصة", subtitle: "القراءة، الاستماع، الخ...", percentage: 0 },
        { id: 3, title: "الدورات المخصصة", subtitle: "القراءة، الاستماع، الخ...", percentage: 0 },
        { id: 4, title: "الدورات المخصصة", subtitle: "القراءة، الاستماع، الخ...", percentage: 0 }
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
                {/* Left Section - Course Info */}
                <div className="w-full lg:w-[700px]">
                    <div className="p-8 mb-6">
                        <h1 className="text-3xl font-bold text-neutral-800 mb-4">{course.title}</h1>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                            {course.description}
                        </p>

                        <div className="flex items-center gap-4 w-full">
                            <button
                                onClick={() => navigate('/student/placement-test/book')}
                                className="flex-1 flex items-center justify-center gap-3 bg-neutral-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-neutral-700 transition-colors"
                            >
                                اختبار تحديد المستوى
                                <IoBookOutline className="text-2xl" />
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 text-neutral-800 py-4 rounded-2xl font-bold text-lg border-2 border-neutral-100 hover:bg-neutral-50 transition-colors">
                                <FaCirclePlay className="text-2xl text-indigo-600" />
                                مشاهدة الفيديو التعريفي
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Course Stats (Same as Course Card top) */}
                <div className="w-full lg:w-80">
                    <Card className="p-6">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <CgSandClock className="text-lg" />
                                    <span className="text-neutral-800 text-2xl">{course.duration}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <PiVideoLight className="text-lg" />
                                    <span className="text-neutral-800 text-2xl">{course.videos}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Course Contents Section */}
            <div className="mt-12 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-neutral-800 mb-8">محتويات المسار</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contents.map((item) => (
                        <Card key={item.id} className="bg-white rounded-none p-8 flex justify-between items-start shadow-sm border border-neutral-50">
                            <div className="flex items-start gap-4">
                                <span className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                    {item.id}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-800 mb-1">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <CircularPercentage
                                    percentage={item.percentage}
                                    w={60}
                                    h={60}
                                    strokeWidth={6}
                                    fontSize="0.875rem"
                                    strokeClass="stroke-indigo-600"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
