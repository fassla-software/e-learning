import React from 'react';
import { PiFireLight } from 'react-icons/pi';
import { IoCloseOutline } from 'react-icons/io5';

const StudentFireModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-xl overflow-hidden transform transition-all">
                {/* Body */}
                <div className="px-20 py-12">
                    <div className="flex items-end justify-center gap-4">
                        <PiFireLight className="text-orange-600 w-10 h-10" />
                        <div>
                            <h2 className="font-bold text-neutral-800 leading-none" style={{ fontSize: '2rem' }}>3 أيام!</h2>
                            <p className="text-neutral-600 text-xl">
                                أطول مدة داومت عليها
                            </p>
                        </div>
                    </div>

                    {/* Days of the week */}
                    <div className="mt-10 flex justify-between items-center gap-1">
                        {[
                            { name: 'السبت', num: 1, attended: true },
                            { name: 'الأحد', num: 2, attended: true },
                            { name: 'الاثنين', num: 3, attended: true },
                            { name: 'الثلاثاء', num: 4, attended: false },
                            { name: 'الأربعاء', num: 5, attended: false },
                            { name: 'الخميس', num: 6, attended: false },
                            { name: 'الجمعة', num: 7, attended: false },
                        ].map((day, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${day.attended ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                                    {day.num}
                                </div>
                                <span className="text-xs text-neutral-500 font-medium">{day.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentFireModal;
