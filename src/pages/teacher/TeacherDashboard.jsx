import Schedule from '../../components/teacher/Schedule';
import { PiVideoLight, PiVideoCamera, PiUsers, PiPencilSimple } from 'react-icons/pi';
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { useState } from "react";
import { FaRegStar, FaPlus } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { VscChecklist } from "react-icons/vsc";
import StatsCards from '../../components/StatsCards';
import Card from '../../components/Card';
import StudentCard from '../../components/teacher/StudentCard';
import DashedCard from '../../components/DashedCard';
import AttendanceCard from '../../components/teacher/AttendanceCard';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
    const [hasRecordedAttendance, setHasRecordedAttendance] = useState(false);

    const handleRecordAttendance = () => {
        setHasRecordedAttendance(true);
        // Backend integration will go here
    };

    return (
        <div className="space-y-6 px-8">
            {/* Grid layout: 8 columns for schedule, 4 columns for other content */}
            <div className="grid grid-cols-12 gap-6">
                {/* Schedule section - 8 columns */}
                <div className="col-span-8">
                    <Schedule />
                </div>

                {/* Right section - 4 columns (placeholder for future content) */}
                <div className="col-span-4">
                    <Card className="bg-indigo-200 rounded-xl shadow-lg border border-gray-200">
                        <PiVideoCamera className='text-3xl' />
                        <p className='my-2 text-xl sm:text-2xl lg:text-3xl font-bold'>بث مجدول</p>
                        <p className='text-sm sm:text-base'>لقد تم إسناد إليك بث مباشر، سيبدأ البث في الساعة 9:30 صباحًا.</p>
                        <button className="bg-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors mt-4">
                            <MdContactEmergency />
                            <span>بدء البث المباشر المجدول </span>
                        </button>
                    </Card>
                </div>
            </div>

            {/* stats section */}
            <StatsCards
                title={'إحصائيات عامة'}
                stats={[
                    {
                        label: 'الطلاب',
                        value: '72',
                        icon: PiUsers,
                        iconBg: 'bg-indigo-100',
                        iconColor: 'text-indigo-600'
                    },
                    {
                        label: 'نسبة التقدم في الخطة',
                        value: (
                            <div className="w-full bg-slate-100 rounded-full h-5 relative flex items-center mt-4">
                                <div className="bg-emerald-100 h-5 rounded-full" style={{ width: '30%' }}></div>
                                <span className="absolute inset-0 flex items-center justify-center text-neutral-800" style={{ fontSize: '10px' }}>30%</span>
                            </div>
                        ),
                        icon: AiOutlinePercentage,
                        iconBg: 'bg-emerald-100',
                        iconColor: 'text-emerald-600'
                    },
                    {
                        label: 'الواجبات المرسلة',
                        value: '12',
                        icon: PiPencilSimple,
                        iconBg: 'bg-sky-100',
                        iconColor: 'text-sky-600'
                    }
                ]}
            />

            <div className="grid grid-cols-12 gap-6 ">
                {/* students stats or attendance card */}
                <div className="col-span-3 space-y-4">
                    {hasRecordedAttendance ? (
                        <>
                            <p className='flex items-center justify-between text-2xl font-bold text-neutral-800 mb-8'>أفضل الطلاب <FaRegStar /></p>
                            <StudentCard
                                icon={<FaUserGraduate className="text-xl text-orange-600" />}
                                title="أفضل طالب"
                                studentName="أحمد محمد"
                            />
                            <StudentCard
                                icon={<PiExam className="text-xl text-emerald-600" />}
                                title="الأعلى درجة في الإختبارات "
                                studentName="أحمد محمد"
                            />
                            <StudentCard
                                icon={<VscChecklist className="text-xl text-sky-600" />}
                                title="الأفضل في المشاركة"
                                studentName="أحمد محمد"
                            />
                        </>
                    ) : (
                        <AttendanceCard onRecordAttendance={handleRecordAttendance} />
                    )}
                </div>

                {/* exams section */}
                <div className="col-span-5 px-12 ">
                    <p className='flex items-center justify-between text-2xl font-bold text-neutral-800 mb-8'>الإختبارات<PiExam /></p>
                    <div className="bg-white rounded-2xl p-4 flex justify-between items-center mb-4">
                        <div>
                            <p className="text-base text-neutral-600">الرياضيات</p>
                            <p className='text-2xl text-neutral-800 font-bold mt-2'>الفصل الأول</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <FaExternalLinkAlt className='text-xs'/>
                            <div className='flex items-center gap-2'>
                                <span className="flex items-center gap-2 bg-orange-100 text-orange-600 px-2 py-2 rounded-full text-xs"> <CiClock2 className='text-sm font-bold'/>مدة الإختبار 30 دقيقة</span>
                                <span className="flex items-center gap-2 bg-neutral-100 text-neutral-600 px-2 py-2 rounded-full text-xs">يبدأ بعد 3 أيام</span>

                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 flex justify-between items-center">
                        <div>
                            <p className="text-base text-neutral-600">الرياضيات</p>
                            <p className='text-2xl text-neutral-800 font-bold mt-2'>الفصل الثاني</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <FaExternalLinkAlt className='text-xs'/>
                            <div className='flex items-center gap-2'>
                                <span className="flex items-center gap-2 bg-emerald-100 text-emerald-600 px-2 py-2 rounded-full text-xs"> <CiClock2 className='text-sm font-bold'/>مدة الإختبار 45 دقيقة</span>
                                <span className="flex items-center gap-2 bg-neutral-100 text-neutral-600 px-2 py-2 rounded-full text-xs">يبدأ بعد 3 أيام</span>

                            </div>
                            
                        </div>
                    </div>
                    <DashedCard 
                        icon={<FaPlus />}
                        text="إنشاء إختبار جديد"
                        onClick={() => console.log('إنشاء إختبار')}
                    />
                </div>

                {/* assignments section */}
                <div className="col-span-4">
                    <p className='flex items-center justify-between text-2xl font-bold text-neutral-800 mb-8'>الواجبات<PiPencilSimple /></p>
                    <div className="bg-white rounded-2xl p-4 flex justify-between items-center mb-4">
                        <div>
                            <p className="text-base text-neutral-600">الفيزياء</p>
                            <p className='text-2xl text-neutral-800 font-bold mt-2'>التيار الكهربائي الناتج عن تغيرالمجالات المغناطيسية</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <FaExternalLinkAlt className='text-xs' />
                            <div className='flex items-center gap-2'>
                                <span className="flex items-center gap-2 bg-emerald-100 text-emerald-600 px-2 py-2 rounded-full text-xs">متبقي 14 يوم</span>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 flex justify-between items-center mb-4">
                        <div>
                            <p className="text-base text-neutral-600">الفيزياء</p>
                            <p className='text-2xl text-neutral-800 font-bold mt-2'>مشتقة الدوال</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <FaExternalLinkAlt className='text-xs' />
                            <div className='flex items-center gap-2'>
                                <span className="flex items-center gap-2 bg-orange-100 text-orange-600 px-2 py-2 rounded-full text-xs"> <CiClock2 className='text-sm font-bold' />مدة الإختبار 30 دقيقة</span>
                            </div>

                        </div>
                    </div>
                    <DashedCard 
                        icon={<FaPlus />}
                        text="اضافة واجب جديد"
                        onClick={() => console.log('اضافة واجب')}
                    />
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;