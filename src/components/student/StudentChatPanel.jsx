import React, { useState } from 'react';
import { PiChatTeardropDots } from 'react-icons/pi';
import { BsFillSendFill } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { IoCloseOutline } from 'react-icons/io5';

const StudentChatPanel = ({ isOpen, onClose }) => {
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-start p-4 ">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            ></div>

            {/* Panel Content */}
            <div className="relative rounded-2xl bg-white w-full max-w-md h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
                {/* Header */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                            <PiChatTeardropDots className="text-blue-600 w-8 h-8" />

                    </div>
                    <h2 className="text-2xl font-bold text-neutral-800 mb-1">محادثة</h2>
                    <p className="text-neutral-500">كيف يمكنني مساعدتك؟</p>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 flex flex-col items-center">
                    {/* Mock Messages */}
                    <div className="w-full max-w-[80%] bg-blue-100 p-4 rounded-2xl text-right">
                        <p className="text-neutral-800">مرحباً، لدي سؤال حول المنهج.</p>
                    </div>

                    <div className="w-full max-w-[80%] bg-neutral-100 p-4 rounded-2xl text-right">
                        <p className="text-neutral-800">أهلاً بك! أنا هنا للمساعدة. ما هو سؤالك بالتحديد؟</p>
                    </div>

                    <div className="w-full max-w-[80%] bg-blue-100 p-4 rounded-2xl text-right">
                        <p className="text-neutral-800">كيف يمكنني الوصول إلى الاختبارات التجريبية؟</p>
                    </div>

                    <div className="w-full max-w-[80%] bg-neutral-100 p-4 rounded-2xl text-right">
                        <p className="text-neutral-800">يمكنك العثور على الاختبارات التجريبية في قسم "الاختبارات" من القائمة الجانبية.</p>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 bg-neutral-100 rounded-2xl p-2 ">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="الرسالة تكتب هنا.."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-neutral-800 py-2 text-right"
                            dir="rtl"
                        />
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-neutral-500 hover:text-neutral-700 transition-colors">
                                <FiPaperclip className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                                <BsFillSendFill className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChatPanel;
