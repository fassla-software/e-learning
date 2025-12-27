import React from 'react';
import { PiUserCirclePlus } from 'react-icons/pi';
import { FiMail } from 'react-icons/fi';
import { PiWhatsappLogo } from "react-icons/pi";
import { PiCopySimple } from "react-icons/pi";

const StudentInvitationModal = ({ isOpen, onClose }) => {
    const [selectedTier, setSelectedTier] = React.useState(3);

    if (!isOpen) return null;

    const invitationLink = "https://fassla.com/invite/student-123";

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
                <div className="p-10 text-start">
                    <div className="flex flex-col items-start gap-4 mb-4">
                        <PiUserCirclePlus className="text-blue-600 w-12 h-12" />
                        <div>
                            <h2 className="font-bold text-neutral-800 mb-2" style={{ fontSize: '2rem' }}>دعوة مستخدم</h2>
                            <p className="text-neutral-600 text-xl">
                                استمتع بخصومات لرحلتك التعليمية عند إنشاء دعوة
                            </p>
                        </div>
                    </div>

                    {/* Invitation Link Section */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex-1 bg-neutral-50 rounded-2xl px-4 py-3 text-left text-neutral-500 text-sm overflow-hidden whitespace-nowrap">
                            {invitationLink}
                        </div>
                        <div className="flex gap-1">
                            <button className="p-3 bg-sky-200 hover:bg-sky-300 rounded-full transition-colors text-neutral-600">
                                <FiMail className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-emerald-200 hover:bg-emerald-300 rounded-full transition-colors text-neutral-600">
                                <PiWhatsappLogo className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors text-neutral-600">
                                <PiCopySimple className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="space-y-4 text-right" dir="rtl">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            ملاحظة: ستحصل على الخصم عند تسجيل حساب جديد عن طريق رابط الدعوة الخاص بك.
                        </p>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            ستحصل على الخصم عند تسجيل العدد الموضح أدناه.
                        </p>
                    </div>

                    {/* Discount Tiers Section */}
                    <div className="mt-4 flex justify-center items-center gap-4">
                        {[3, 5, 7, 8].map((num) => (
                            <div key={num} className="flex flex-col items-center gap-2">
                                <button
                                    onClick={() => setSelectedTier(num)}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-base  transition-colors ${selectedTier === num ? 'text-emerald-600 bg-emerald-200' : 'text-neutral-400 bg-neutral-100 hover:bg-neutral-200'}`}
                                >
                                    {num}
                                </button>
                                <span className="text-sm text-neutral-600 font-medium">خصم 10%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentInvitationModal;
