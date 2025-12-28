import React, { useState } from 'react';
import { FaCalendarAlt, FaWallet, FaRegClock, FaCheck, FaUser } from 'react-icons/fa';
import Card from '../../components/Card';

const BookPlacementTest = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = Array.from({ length: 20 }, (_, i) => {
        const hour = 1 + Math.floor(i / 2);
        const minute = i % 2 === 0 ? '00' : '30';
        const period = hour >= 12 ? 'مساءً' : 'صباحًا';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:${minute} ${period}`;
    });

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Section - 4 cols */}
                <div className="lg:col-span-4">
                    <Card className="bg-white rounded-2xl p-8">
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                                <FaCalendarAlt className="text-3xl text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-800 mb-2">حجز موعد لتحديد المستوى</h2>
                            <p className="text-neutral-400 text-sm">تأكد من بيانات الموعد، واختر التاريخ المناسب</p>
                        </div>

                        <div className="space-y-6 mb-8">
                            {/* Provider */}
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-xs mb-1">مقدم الخدمة</span>
                                    <span className="text-neutral-800 font-bold">الأستاذ أحمد محمد الأحمد</span>
                                </div>
                                <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center">
                                    <FaUser className="text-neutral-400" />
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-xs mb-1">سعر الخدمة</span>
                                    <span className="text-neutral-800 font-bold">0 ريال سعودي</span>
                                </div>
                                <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center">
                                    <FaWallet className="text-neutral-400" />
                                </div>
                            </div>

                            {/* Date/Time */}
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-xs mb-1">تاريخ ووقت الحجز</span>
                                    <span className="text-neutral-800 font-bold">9 سبتمبر 2025، 05:00 عصرًا</span>
                                </div>
                                <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center">
                                    <FaRegClock className="text-neutral-400" />
                                </div>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 py-4 rounded-2xl font-bold hover:bg-indigo-200 transition-colors">
                            <FaCheck className="text-sm" />
                            تأكيد الحجز
                        </button>
                    </Card>
                </div>

                {/* Right Section - 8 cols */}
                <div className="lg:col-span-8">
                    <div className="p-8">
                        <h3 className="text-xl font-bold text-neutral-800 mb-6">المواعيد المتاحة</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {timeSlots.map((slot, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`flex flex-col items-start justify-center gap-2 py-4 px-4 rounded-xl border-2 transition-all text-center font-medium ${selectedSlot === slot
                                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                        : 'border-transparent bg-neutral-50 hover:border-indigo-200 text-neutral-600'
                                        }`}
                                >
                                    <FaRegClock className={`${selectedSlot === slot ? 'text-indigo-600' : 'text-neutral-400'} text-lg`} />
                                    <span className="text-sm">{slot}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPlacementTest;
