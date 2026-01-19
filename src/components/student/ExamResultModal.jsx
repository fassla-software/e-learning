import React from 'react';
import { PiExam } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

const ExamResultModal = ({ isOpen, onClose, score, totalQuestions }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-lg overflow-hidden transform transition-all p-8">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <PiExam className="text-5xl text-indigo-600" />
                    <div>
                        <h2 className="font-bold text-neutral-800 leading-tight mb-2" style={{ fontSize: '2rem' }}>
                            درجة الاختبار
                        </h2>
                        <p className="text-xl text-neutral-600">
                            درجتك في الاختبار: {score} / {totalQuestions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamResultModal;
