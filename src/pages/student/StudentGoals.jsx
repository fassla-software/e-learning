import { useState } from 'react';
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { PiCardsThree, PiPencilSimpleLight, } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { PiClockCountdown } from "react-icons/pi";
import { PiChecks } from "react-icons/pi";

const StudentGoals = () => {
    const [goalsTab, setGoalsTab] = useState('uncompleted');
    const [goals, setGoals] = useState([
        {
            id: 1,
            title: 'تحقيق الدرجة الكاملة في اختبار الشهر الأول للرياضيات',
            duration: '2025-11-30T10:00',
            status: 'uncompleted'
        },
        {
            id: 2,
            title: 'إنهاء دورة الكيمياء العضوية',
            duration: '2025-12-15T15:00',
            status: 'completed'
        }
        ,
        {
            id: 3,
            title: 'إنهاء دورة الكيمياء العضوية',
            duration: '2025-12-15T15:00',
            status: 'uncompleted'
        }
        ,
        {
            id: 4,
            title: 'إنهاء دورة الكيمياء العضوية',
            duration: '2025-12-15T15:00',
            status: 'uncompleted'
        },
    ]);

    const toggleGoalStatus = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id
                ? { ...goal, status: goal.status === 'completed' ? 'uncompleted' : 'completed' }
                : goal
        ));
    };

    const filteredGoals = goals.filter(goal => goal.status === goalsTab);

    return (
        <div className="p-6">
            <SearchInput placeholder="باستخدام عنوان الهدف أو مدة الهدف" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                {/* Form Section */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                        <PiCardsThree className="text-3xl text-blue-600 mb-4" />
                        <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>إنشاء هدف جديد</h2>
                        <p className="text-neutral-400 mb-6" style={{ fontSize: '1.5rem' }}>تفاصيل هنا....</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                                    عنوان الهدف
                                </label>
                                <input
                                    type="text"
                                    placeholder="تحقيق درجة +60 في اختبار step"
                                    className="w-full px-4 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                                    مدة الهدف
                                </label>
                                <input
                                    type="datetime-local"
                                    className="w-full px-4 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-600"
                                />
                            </div>

                            <button className="text-sm w-auto bg-indigo-100 text-neutral-800 p-2 rounded-full hover:bg-indigo-200 transition-colors flex items-center justify-center gap-2 mt-6">
                                <FiPlus className="w-4 h-4" />
                                إضافة
                            </button>
                        </div>
                    </div>
                </div>

                {/* Goals List Section */}
                <div className="lg:col-span-9">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setGoalsTab('uncompleted')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${goalsTab === 'uncompleted'
                                ? 'bg-blue-200 text-blue-800'
                                : 'hover:bg-blue-100'
                                }`}
                        >
                            <PiClockCountdown className="text-xl" />
                            الأهداف غير المنجزة
                        </button>
                        <button
                            onClick={() => setGoalsTab('completed')}
                            className={`px-4 flex gap-2 items-center py-2 rounded-full transition-colors ${goalsTab === 'completed'
                                ? 'bg-blue-200 text-blue-800'
                                : 'hover:bg-blue-100'
                                }`}
                        >
                            <PiChecks className="text-xl" />
                            الأهداف المنجزة
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredGoals.map((goal) => (
                            <Card key={goal.id} className="bg-blue-200 rounded-3xl p-6 border-none shadow-sm">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={goal.status === 'completed'}
                                            onChange={() => toggleGoalStatus(goal.id)}
                                            className="w-3 h-3 rounded border-1 border-neutral-800 bg-blue-200 checked:bg-blue-600 checked:border-neutral-600 appearance-none cursor-pointer relative transition-colors after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[1px] after:w-[6px] after:h-[10px] after:border-white after:border-b-2 after:border-r-2 after:rotate-45"
                                        />
                                        <h3 className={`text-sm text-neutral-800 ${goal.status === 'completed' ? 'line-through opacity-60' : ''}`}>
                                            {goal.title}
                                        </h3>
                                    </div>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-blue-300 rounded-full transition-colors">
                                        <PiPencilSimpleLight className="text-gray-700 text-xl" />
                                    </button>
                                </div>

                                <div className="mt-2 flex justify-end">
                                    <span className="bg-white text-neutral-600 px-3 py-1 rounded-full text-xs inline-flex items-center gap-2">
                                        متبقي 12 يوم
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                    {filteredGoals.length === 0 && (
                        <div className="text-center py-12 bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
                            <p className="text-neutral-400">لا توجد أهداف في هذه القائمة</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentGoals;