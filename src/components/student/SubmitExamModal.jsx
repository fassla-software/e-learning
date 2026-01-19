import React from 'react';
import { BsSend } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { BiCheckDouble } from "react-icons/bi";

const SubmitExamModal = ({ isOpen, onClose, onConfirm }) => {
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
                    <BsSend className="text-3xl text-neutral-800" />
                    <div>
                        <h2 className="font-bold text-neutral-800 leading-tight mb-2" style={{ fontSize: '2rem' }}>
                            تسليم الاختبار
                        </h2>
                        <p className="text-xl text-neutral-600">
                            هل أنت متأكد من أنك تريد تسليم الإختبار؟
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={onConfirm}
                        className="flex items-center justify-center gap-2 bg-indigo-200 text-neutral-800 p-3 rounded-full text-sm hover:bg-indigo-300 transition-colors"
                    >
                        <BiCheckDouble className="" />
                        نعم
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 bg-neutral-100 text-neutral-800 p-3 rounded-full text-sm hover:bg-neutral-200 transition-colors"
                    >
                        <IoCloseOutline className="text-xl" />
                        إلغاء
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmitExamModal;
