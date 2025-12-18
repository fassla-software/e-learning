import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PiShootingStar } from "react-icons/pi";
import { LiaNewspaperSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiPencilSimpleLight } from "react-icons/pi";
import { IoCheckmarkDoneSharp, IoCloudUploadOutline } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { PiNoteBlank } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";

import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import StatsCards from '../../components/StatsCards';

const AssignmentInfo = () => {
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
            label: 'واجبات بحاجة إلى تقييم',
            value: '6'
        },
        {
            icon: FaRegStar,
            iconBg: 'bg-sky-100',
            iconColor: 'text-sky-600',
            label: 'واجبات تم تقييمها',
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
                            <span>{id}</span>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-neutral-800'>الواجب الأول</h3>
                            <p className='text-base text-neutral-600 mt-2'>السؤال الأول من صفحة 27</p>
                        </div>

                        <div className="bg-neutral-100 rounded-2xl p-4 space-y-4">
                            <div className='flex justify-between items-center'>
                                <SlCalender/>
                                <PiPencilSimpleLight/>
                            </div>
                            <p className='text-base text-neutral-800'>الخميس، 30، أكتوبر 2025. 9:15 - 9:45 ص <span className='text-emerald-600'>(متاحة)</span></p>
                            <ProgressBar color='bg-emerald-600' showPercentage={true} percentage={90} width='w-full' height="h-4" bgColor='bg-white'/>
                        </div>
                    </Card>

                </div>
                <div className="lg:col-span-8">
                    <div className="flex justify-between mb-6">
                        <h3 className="text-2xl font-bold text-neutral-800">الواجبات</h3>
                        <div className="flex gap-2 text-xl text-neutral-800">
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
                        </div>
                    </div>
                    <div className="rounded-3xl p-6">
                        {activeTab === 'rated' && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 bg-blue-100 p-4 rounded-2xl">
                                    <div>
                                        <p className="text-base text-neutral-600 flex gap-2 items-center">
                                            <PiNoteBlank  className='text-xl'/>الطالب
                                        </p>
                                        <h3 className="text-xl font-bold text-neutral-800">محمد خالد</h3>
                                    </div>
                                    <div className="flex justify-between items-center rounded-full bg-white p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-indigo-200 rounded-full p-2">
                                                <IoDocumentTextOutline className="text-neutral-800" />
                                            </div>
                                            <span className="text-neutral-800 text-base font-bold">واجب</span>
                                        </div>
                                        <IoCloudUploadOutline className="text-neutral-600 text-xl cursor-pointer hover:text-blue-600" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-neutral-800 mb-2 block">الدرجة</label>
                                        <input 
                                            type="text" 
                                            value="85" 
                                            readOnly 
                                            className="w-full px-3 py-2 border border-white rounded-lg text-sm text-neutral-400"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 bg-blue-100 p-4 rounded-2xl">
                                    <div>
                                        <p className="text-base text-neutral-600 flex gap-2 items-center">
                                            <PiNoteBlank />الطالب
                                        </p>
                                        <h3 className="text-lg font-bold text-neutral-800">سارة أحمد</h3>
                                    </div>
                                    <div className="flex justify-between items-center rounded-full bg-white p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-indigo-200 rounded-full p-2">
                                                <IoDocumentTextOutline className="text-neutral-800" />
                                            </div>
                                            <span className="text-neutral-800 text-base font-bold">واجب</span>
                                        </div>
                                        <IoCloudUploadOutline className="text-neutral-600 text-xl cursor-pointer hover:text-blue-600" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-neutral-800 mb-2 block">الدرجة</label>
                                        <input 
                                            type="text" 
                                            value="92" 
                                            readOnly 
                                            className="w-full px-3 py-2 border border-white rounded-xl text-sm text-neutral-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'not_rated' && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 bg-blue-100 p-4 rounded-2xl">
                                    <div>
                                        <p className="text-base text-neutral-600 flex gap-2 items-center">
                                            <PiNoteBlank />الطالب
                                        </p>
                                        <h3 className="text-lg font-bold text-neutral-800">أحمد محمد</h3>
                                    </div>
                                    <div className="flex justify-between items-center rounded-full bg-white p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-indigo-200  rounded-full p-2">
                                                <IoDocumentTextOutline className="text-neutral-800" />
                                            </div>
                                            <span className="text-neutral-800 text-base font-bold">واجب</span>
                                        </div>
                                        <IoCloudUploadOutline className="text-neutral-600 text-xl cursor-pointer hover:text-blue-600" />
                                    </div>
                                </div>
                                <div className="space-y-4 bg-blue-100 p-4 rounded-2xl">
                                    <div>
                                        <p className="text-base text-neutral-600 flex gap-2 items-center">
                                            <PiNoteBlank />الطالب
                                        </p>
                                        <h3 className="text-lg font-bold text-neutral-800">فاطمة علي</h3>
                                    </div>
                                    <div className="flex justify-between items-center rounded-full bg-white p-2">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-indigo-200 rounded-full p-2">
                                                <IoDocumentTextOutline className="text-neutral-800" />
                                            </div>
                                            <span className="text-neutral-800 text-base font-bold">واجب</span>
                                        </div>
                                        <IoCloudUploadOutline className="text-neutral-600 text-xl cursor-pointer hover:text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentInfo;