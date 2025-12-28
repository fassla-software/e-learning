import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import examData from '../../data/exam_data.json';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';

const TakeExam = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(examData.duration * 60); // in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const currentQuestion = examData.questions[currentQuestionIndex];
    const totalQuestions = examData.questions.length;

    const handleAnswerSelect = (index) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: index
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Submit exam logic
            alert('تم تسليم الاختبار بنجاح!');
            navigate('/student/exams');
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4">
            {/* Top Bar */}
            <div className="w-full max-w-2xl flex justify-between items-center mb-12">
                <div className="bg-white text-xl rounded-full px-6 py-3 flex items-center gap-2 border border-neutral-100">
                    <span className="text-neutral-800">
                        {formatTime(timeLeft)} / {examData.duration}:00
                    </span>
                    <span className="text-neutral-800">دقيقة</span>
                </div>

                <div className="px-6 py-3 flex items-center gap-2 text-xl text-neutral-800">
                    <span className="">
                        {totalQuestions} / {currentQuestionIndex + 1}
                    </span>
                    <span className="">سؤال</span>
                </div>
            </div>

            {/* Question Modal Container */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Question Section */}
                <div className="p-10 border-b border-neutral-100">
                    <h2 className="text-2xl font-bold text-neutral-800 text-center leading-relaxed">
                        {currentQuestion.question}
                    </h2>
                </div>

                {/* Answers Section */}
                <div className="p-8 space-y-4 bg-neutral-50">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswers[currentQuestionIndex] === index;
                        return (
                            <div
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all duration-200 group ${isSelected
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                                    }`}
                            >
                                <div className="text-2xl flex-shrink-0">
                                    {isSelected ? <FaRegDotCircle /> : <FaRegCircle className="text-neutral-500 group-hover:text-neutral-400" />}
                                </div>
                                <span className="text-lg font-medium">{option}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="w-full max-w-2xl flex justify-between mt-10">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className={`px-8 py-3 rounded-full font-bold transition-all ${currentQuestionIndex === 0
                        ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        : 'bg-white text-neutral-800 shadow-sm hover:shadow-md border border-neutral-100'
                        }`}
                >
                    السابق
                </button>

                <button
                    onClick={handleNext}
                    className="px-10 py-3 bg-neutral-800 text-white rounded-full font-bold shadow-lg hover:bg-neutral-700 transition-all"
                >
                    {currentQuestionIndex === totalQuestions - 1 ? 'إنهاء الاختبار' : 'التالي'}
                </button>
            </div>
        </div>
    );
};

export default TakeExam;
