import React, { useState } from 'react';
import { FaCalendarAlt, FaWallet, FaRegClock, FaCheck, FaUser } from 'react-icons/fa';
import Card from '../../components/Card';
import { CiClock2 } from 'react-icons/ci';

const BookPlacementTest = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = [
        { time: '6:00 صباحًا', reserved: false },
        { time: '7:00 صباحًا', reserved: true },
        { time: '8:00 صباحًا', reserved: false },
        { time: '9:00 صباحًا', reserved: false },
        { time: '10:00 صباحًا', reserved: true },
        { time: '11:00 صباحًا', reserved: false },
        { time: '12:00 مساءً', reserved: false },
        { time: '1:00 مساءً', reserved: false },
        { time: '2:00 مساءً', reserved: false },
        { time: '3:00 مساءً', reserved: true },
        { time: '4:00 مساءً', reserved: false },
        { time: '5:00 مساءً', reserved: false },
        { time: '6:00 مساءً', reserved: false },
        { time: '7:00 مساءً', reserved: false },
        { time: '8:00 مساءً', reserved: false },
        { time: '9:00 مساءً', reserved: false },
        { time: '10:00 مساءً', reserved: false },
        { time: '11:00 مساءً', reserved: false },
        { time: '12:00 مساءً', reserved: false },
        { time: '1:00 مساء', reserved: false }
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Section - 4 cols */}
                <div className="lg:col-span-4">
                    <Card className="bg-white rounded-2xl p-8 h-[70vh]">
                        <div className="flex flex-col items-start justify-center gap-4 mb-8">
                            <FaCalendarAlt className="text-3xl text-indigo-600" />
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-800 mb-2">حجز موعد لتحديد المستوى</h2>
                                <p className="text-neutral-400 text-sm">تأكد من بيانات الموعد، واختر التاريخ المناسب</p>
                            </div>
                        </div>

                        <div className="space-y-6 mb-8">
                            {/* Provider */}
                            <div className="flex items-center gap-2">
                                <span className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                                    <FaUser className="text-neutral-800" />
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-base mb-1">مقدم الخدمة</span>
                                    <span className="text-neutral-800 font-bold text-2xl">الأستاذ أحمد محمد الأحمد</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2">
                                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaWallet className="text-neutral-400" />
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-base mb-1">سعر الخدمة</span>
                                    <span className="text-neutral-800 font-bold text-2xl">0 ريال سعودي</span>
                                </div>
                            </div>

                            {/* Date/Time */}
                            <div className="flex items-center gap-2">
                                <span className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                    <CiClock2 className="text-neutral-800 text-2xl" />
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-400 text-base mb-1">تاريخ ووقت الحجز</span>
                                    <span className="text-neutral-800 font-bold text-2xl">9 سبتمبر 2025، 05:00 عصرًا</span>
                                </div>
                            </div>
                        </div>

                        <button className="flex items-center justify-center gap-2 bg-indigo-100 text-neutral-800 p-2 rounded-full hover:bg-indigo-200 transition-colors">
                            <FaCheck className="text-base" />
                            تأكيد الحجز
                        </button>
                    </Card>
                </div>

                {/* Right Section - 8 cols */}
                <div className="lg:col-span-8">
                    <div className="">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {timeSlots.map((slot, index) => {
                                const isSelected = selectedSlot === slot.time;
                                const isReserved = slot.reserved;

                                return (
                                    <button
                                        key={index}
                                        disabled={isReserved}
                                        onClick={() => setSelectedSlot(slot.time)}
                                        className={`flex flex-col items-start justify-center gap-2 p-2 rounded-xl transition-all text-center font-medium ${isSelected
                                            ? 'bg-emerald-100 text-emerald-600'
                                            : isReserved
                                                ? 'border-transparent bg-orange-100 text-orange-600 cursor-not-allowed'
                                                : 'border-transparent bg-neutral-50 hover:border-indigo-200 text-neutral-600'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between w-full mb-1">
                                            {isSelected ? (
                                                <FaCheck className="text-emerald-600 text-lg" />
                                            ) : (
                                                <FaRegClock className={`${isReserved ? 'text-orange-600' : 'text-indigo-600'} text-lg`} />
                                            )}

                                            {isSelected && (
                                                <span className="bg-white text-neutral-800 text-[10px] px-2 py-0.5 rounded-full">
                                                    مختار
                                                </span>
                                            )}
                                            {isReserved && (
                                                <span className="bg-white text-neutral-800 text-[10px] px-2 py-0.5 rounded-full">
                                                    محجوز
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xl font-bold">{slot.time}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPlacementTest;
