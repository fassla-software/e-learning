import { FiPlus } from 'react-icons/fi';
import { PiCaretUpDown } from 'react-icons/pi';
import { BsCalendar2Date } from "react-icons/bs";
import DateIcon from '../../assets/date.svg';
const ScheduleBroadcast = () => {
    return (
        <div className="min-h-screen bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 shadow-lg max-w-md w-full">
                <BsCalendar2Date className="text-2xl text-indigo-600 mb-4" />
                <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>جدولة بث مباشر</h2>
                <p className="text-neutral-400 mb-6 text-2xl">تفاصيل هنا....</p>

                <div className="space-y-4">
                    <div>
                        <label className=" text-sm block font-bold text-neutral-800 mb-2">
                            عنوان البث
                        </label>
                        <input
                            type="text"
                            placeholder="مراجعة عامة"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            المعلم
                        </label>
                        <div className="relative">
                            <select className="w-full text-neutral-600 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>اختر المعلم</option>
                            </select>
                            <PiCaretUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            التاريخ والوقت
                        </label>
                        <input
                            type="datetime-local"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-auto text-sm bg-indigo-200 text-neutral-800 py-2 px-4 rounded-full hover:bg-indigo-300 transition-colors flex items-center justify-center gap-2 mt-6">
                        <img src={DateIcon} className="w-4 h-4" />
                        جدولة
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleBroadcast;