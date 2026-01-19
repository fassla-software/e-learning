import React from 'react';
import { PiWarningCircle } from "react-icons/pi";

const ExamWarningModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-md overflow-hidden transform transition-all p-8">
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                    <PiWarningCircle className="text-5xl text-amber-500" />
                    <div>
                        <h2 className="font-bold text-neutral-800 text-2xl mb-2">
                            تنبيه
                        </h2>
                        <p className="text-lg text-neutral-600">
                            يرجى الإجابة على جميع الأسئلة قبل التسليم
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-neutral-800 text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-neutral-700 transition-colors"
                    >
                        حسناً
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExamWarningModal;
