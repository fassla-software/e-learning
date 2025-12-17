import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PiShootingStar } from "react-icons/pi";
import { LiaNewspaperSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiPencilSimpleLight } from "react-icons/pi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";

import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import StatsCards from '../../components/StatsCards';
const ExamInfo = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('not_rated');

    const statsData = [
        {
            icon: LiaNewspaperSolid,
            iconBg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            label: 'الواجبات المرسلة',
            value: '24'
        },
        {
            icon: PiShootingStar,
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            label: 'اختبارات بحاجة إلى تقييم',
            value: '6'
        },
        {
            icon: FaRegStar,
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600',
            label: 'اختبارات تم تقييمها',
            value: '18'
        }
    ];

    return (
        <div className="px-2">
            <StatsCards 
                title="إحصائيات عامة" 
                stats={statsData} 
            />

            {/* grid section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                <div className="lg:col-span-4">
                    <Card className='bg-white rounded-3xl p-8 flex justify-center flex-col gap-6 '>
                        <div className="flex justify-between text-base text-neutral-800">
                            <span>الثلاثاء، 28، أكتوبر 2025</span>
                            <span>2510281003</span>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-neutral-800'>اختبار في زمن الماضي البسيط</h3>
                            <p className='text-base text-neutral-600'>اختيار من متعدد</p>
                        </div>

                        <div className="bg-neutral-100 rounded-2xl p-4 space-y-4">
                            <div className='flex justify-between items-center'>
                                <SlCalender/>
                                <PiPencilSimpleLight/>
                            </div>
                            <p className='text-base text-neutral-800'>الخميس، 30، أكتوبر 2025. 9:15 - 9:45 ص <span className='text-orange-600'>(قيد المراجعة)</span></p>
                            <ProgressBar color='bg-white' showPercentage={false} percentage={90} width='w-full' height="h-3"/>
                        </div>
                        <div className="flex gap-2 w-50">
                            <button className="flex gap-2 items-center bg-emerald-100 hover:bg-emerald-300 text-neutral-600 rounded-full py-2 px-4 text-base ">
                                <IoCheckmarkDoneSharp/>
                                تعديل
                            </button>
                            <button className="flex-1 bg-emerald-100 text-neutral-600 hover:bg-emerald-300 rounded-full py-2 px-4 text-base ">
                                اعتماد
                            </button>
                        </div>
                    </Card>

                </div>
                <div className="lg:col-span-8">
                    <div className="flex justify-between mb-6">
                        <h3 className="text-2xl font-bold text-neutral-800">الاختبارات</h3>
                        <div className="flex gap-2 text-xl text-neutral-800">
                            <button 
                                onClick={() => setActiveTab('not_rated')}
                                className={`px-2 py-1 rounded-full  ${
                                    activeTab === 'not_rated' 
                                        ? 'bg-white ' 
                                        : 'bg-neutral-50'
                                }`}
                            >
                                لم يتم التقييم
                            </button>
                            <button 
                                onClick={() => setActiveTab('rated')}
                                className={`px-2 py-1 rounded-full ${
                                    activeTab === 'rated' 
                                        ? 'bg-white '
                                        : 'bg-neutral-50 '
                                }`}
                            >
                                تم التقييم
                            </button>
                        </div>
                    </div>
                    <div className="bg-neutral-50 rounded-3xl p-6 text-orange-600 text-xl flex justify-center items-center gap-4 px-12">
                        {activeTab === 'not_rated' && (
                            <div className='flex flex-col gap-4 items-center my-12'>
                                <CiWarning className='text-3xl'/>
                                <p className="">لم يتم اعتماد الاختبار من قبل المشرف أو من هو مخوّل بذلك</p>
                            </div>
                        )}
                        {activeTab === 'rated' && (
                            <div>
                                <p className="">محتوى النتائج</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamInfo;