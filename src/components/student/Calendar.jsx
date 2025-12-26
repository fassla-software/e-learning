import CalendarIcon from '../../assets/calendar-icon.svg?react';
import ChevronLeft from '../../assets/chevron-left.svg?react';
import ChevronRight from '../../assets/chevron-right.svg?react';
import CloseIcon from '../../assets/close-icon.svg?react';
import EnterIcon from '../../assets/enter-icon.svg?react';
import ClockIcon from '../../assets/clock-icon.svg?react';
import BookIcon from '../../assets/book-icon.svg?react';
import instructorAvatar from '../../assets/instructor-avatar.jpg';

const Calendar = () => {
    const daysOfWeek = [
        { name: 'الثلاثاء', date: '9' },
        { name: 'الإثنين', date: '8' },
        { name: 'الأحد', date: '7', active: true },
        { name: 'السبت', date: '6' },
        { name: 'الجمعة', date: '5' }
    ];

    return (
        <div className="bg-white h-[100vh] rounded-2xl p-6 space-y-4">
            {/* Header with Calendar Icon and Title */}
            <div className="flex flex-col items-start justify-center gap-3">
                <CalendarIcon className="w-6 h-6" style={{ color: '#525252' }} />
                <span className="text-neutral-600 text-xl">التقويم</span>
            </div>

            {/* Month Selector */}
            <div className="bg-neutral-100 rounded-2xl px-4 py-3 flex items-center justify-between">
                <button className="p-1">
                    <ChevronRight className="w-1.5 h-3" style={{ color: '#262626' }} />
                </button>
                <span className="text-neutral-800 text-xl font-bold">نوفمبر 2025</span>
                <button className="p-1">
                    <ChevronLeft className="w-1.5 h-3" style={{ color: '#262626' }} />
                </button>
            </div>

            {/* Days of Week */}
            <div className="flex items-center justify-between gap-2.5">
                <button className="p-1">
                    <ChevronRight className="w-1.5 h-3" style={{ color: '#262626' }} />
                </button>

                <div className="flex gap-2">
                    {daysOfWeek.map((day, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-1 px-1 py-2 rounded-xl ${day.active ? 'bg-indigo-600' : ''
                                }`}
                        >
                            <span className={`text-xl ${day.active ? 'text-white' : 'text-neutral-600'}`}>
                                {day.name}
                            </span>
                            <span className={`text-xl ${day.active ? 'text-white' : 'text-neutral-600'}`}>
                                {day.date}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="p-1">
                    <ChevronLeft className="w-1.5 h-3" style={{ color: '#262626' }} />
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200"></div>

            {/* Recent Class Card */}
            <div className="bg-indigo-100 rounded-2xl p-6 space-y-4">
                {/* Class Title */}
                <h3 className="text-neutral-800 text-2xl font-bold text-right">
                    اختبار تعريفي للغة الإنجليزية
                </h3>

                {/* Instructor Info */}
                <div className="flex items-center justify-start gap-5">
                    <img
                        src={instructorAvatar}
                        alt="الحسن علي المكي"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start gap-0.5">
                        <span className="text-neutral-800 text-xl font-bold">الحسن علي المكي</span>
                        <span className="text-neutral-600 text-base">المحاضر</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-start gap-2.5">
                    <button className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-100 bg-white">
                        <span className="text-neutral-500 text-base">إلغاء</span>
                        <CloseIcon className="w-3 h-3" style={{ color: '#737373' }} />
                    </button>
                    <button className="flex items-center gap-6 px-6 py-2 rounded-full bg-neutral-800">
                        <EnterIcon className="w-4 h-4" style={{ color: '#ffffff' }} />
                        <span className="text-white text-base">دخول</span>
                    </button>
                </div>

                {/* Class Details */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-white/50">
                        <span className="text-neutral-800 text-sm">15, ديسمبر - 8:30 - 9:00 ص</span>
                        <ClockIcon className="w-4 h-4" style={{ color: '#262626' }} />
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-neutral-600 text-base">محتوى المادة</span>
                        <BookIcon className="w-5 h-5" style={{ color: '#525252' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;