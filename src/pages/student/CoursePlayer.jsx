import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";

import Card from "../../components/Card";
import CircularPercentage from "../../components/CircularPercentage";

const CoursePlayer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data for lessons
    const lessons = [
        {
            id: 1,
            title: "مقدمة في الأزمنة",
            subtitle: "ستتعلم في هذا الدرس مقدمة بسيطة في الأزمنة.",
            percentage: 30,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
        },
        {
            id: 2,
            title: "الدورات المخصصة",
            subtitle: "ستتعلم في هذا الدرس زمن الماضي وقواعده.",
            percentage: 50,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
        },
        {
            id: 3,
            title: "المضارع البسيط",
            subtitle: "شرح مفصل لزمن المضارع البسيط واستخداماته.",
            percentage: 0,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
        },
    ];

    const [currentLessonId, setCurrentLessonId] = useState(lessons[0].id);

    const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);

    const handleNext = () => {
        if (currentIndex < lessons.length - 1) {
            setCurrentLessonId(lessons[currentIndex + 1].id);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentLessonId(lessons[currentIndex - 1].id);
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Sidebar - Lessons List (3 cols) */}
                <div className="lg:col-span-3 flex flex-col gap-4 bg-white rounded-2xl p-6 h-full overflow-y-auto">
                    <h2 className="font-bold text-neutral-800 mb-2" style={{ fontSize: '2rem' }}>{currentLesson.title}</h2>
                    <p className="text-neutral-500 mb-2">{currentLesson.subtitle}</p>
                    {lessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            onClick={() => setCurrentLessonId(lesson.id)}
                            className="cursor-pointer"
                        >
                            <Card
                                className={`p-4 flex justify-between items-start transition-all duration-200 rounded-2xl border-none shadow-none ${currentLessonId === lesson.id
                                    ? 'bg-emerald-100'
                                    : 'bg-neutral-100'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-sm bg-indigo-600 text-white">
                                        {lesson.id}
                                    </span>
                                    <div>
                                        <h3 className={`text-sm font-bold mb-1 ${currentLessonId === lesson.id ? 'text-indigo-900' : 'text-neutral-800'}`}>
                                            {lesson.title}
                                        </h3>
                                        <p className="text-neutral-400 text-xs line-clamp-2">{lesson.subtitle}</p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <CircularPercentage
                                        percentage={lesson.percentage}
                                        w={50}
                                        h={50}
                                        strokeWidth={4}
                                        fontSize="0.7rem"
                                        strokeClass={currentLessonId === lesson.id ? "stroke-indigo-600" : "stroke-neutral-400"}
                                    />
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Main Content - Video Player (9 cols) */}
                <div className="lg:col-span-9">
                    <div className="px-6">
                        {/* Video Container */}
                        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden mb-8 shadow-lg">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={currentLesson.videoUrl}
                                title={currentLesson.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === lessons.length - 1}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${currentIndex === lessons.length - 1
                                    ? 'text-neutral-300 cursor-not-allowed bg-neutral-50'
                                    : 'text-white bg-neutral-800 hover:bg-neutral-700 '
                                    }`}
                            >
                                <GrNext />
                                الدرس التالي
                            </button>
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${currentIndex === 0
                                    ? 'text-neutral-300 cursor-not-allowed bg-neutral-50'
                                    : 'text-white hover:bg-neutral-700 bg-neutral-800'
                                    }`}
                            >
                                الدرس السابق
                                <FcPrevious />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePlayer;
