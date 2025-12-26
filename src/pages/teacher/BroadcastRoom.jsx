import { useParams } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdAutoFixHigh } from "react-icons/md";
import { PiShare } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiCursorClickLight } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";

import Card from '../../components/Card';

const BroadcastRoom = () => {
    const { id } = useParams();

    return (
        <div className="h-screen bg-gray-100 flex flex-col">
            {/* Main Content */}
            <div className="flex-1 grid grid-cols-12 gap-4 p-4">
                {/* Comments Section - 3 columns */}
                <div className="col-span-4 bg-white rounded-xl h-full flex flex-col">
                    <div className="p-4">
                        <h3 className="font-bold text-neutral-800 " style={{fontSize:'2rem'}}>التعليقات</h3>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {/* Vote Card */}
                        <div className="bg-neutral-100 p-4 rounded-lg">
                            <h4 className="font-bold text-neutral-800 mb-3">ما هو أفضل طريقة لحل هذه المعادلة؟</h4>
                            
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaRegCircleCheck className="text-blue-600" />
                                        <span className="text-sm">التعويض المباشر</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-30 h-3 rounded-full" dir="ltr">
                                            <div className="w-3/4 h-full bg-blue-500 rounded-full text-white flex items-center justify-center"
                                                style={{ fontSize:'10px' }}
                                            >
                                                <span>
                                                    75%
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border border-neutral-600 rounded-full"></div>
                                        <span className="text-sm">استخدام القانون</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-30 h-3 rounded-full" dir="ltr">
                                            <div className="w-1/4 h-full bg-emerald-500 rounded-full text-white flex items-center justify-center"
                                                style={{ fontSize:'10px' }}

                                            >
                                                <span>25%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Regular Question */}
                        <div className="flex gap-3">
                            <img 
                                src="https://placehold.co/400" 
                                alt="Teacher" 
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-neutral-800 text-sm">أحمد محمد</p>
                                <p className="text-sm text-neutral-600 mt-1">هل يمكن شرح هذه النقطة مرة أخرى؟</p>
                            </div>
                        </div>

                        {/* Another Regular Question */}
                        <div className="flex gap-3">
                            <img 
                                src="https://placehold.co/400" 
                                alt="Teacher" 
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-neutral-800 text-sm">فاطمة علي</p>
                                <p className="text-sm text-neutral-600 mt-1">شكراً على الشرح الواضح</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Area - 9 columns */}
                <div className="col-span-8 flex flex-col gap-4">
                    <div className="bg-black rounded-3xl h-150 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <FaVideo className="text-6xl mb-4 mx-auto opacity-50" />
                                <p className="text-xl">منطقة البث المباشر</p>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-white rounded-3xl p-4">
                        <div className='flex items-center justify-between'>
                            <h3 className='text-neutral-800 font-bold' style={{fontSize:'2rem'}}>شرح الرياضيات - المشتقات</h3>
                            <div className='flex items-center justify-start gap-2 text-base'>
                                <button className="rounded-full bg-indigo-100 text-blue-600 px-4 py-2 text-sm flex items-center gap-2 mt-4">
                                    <MdAutoFixHigh className="w-4 h-4" />
                                    أدوات التفاعل
                                </button>
                                <button className="rounded-full bg-indigo-100 text-blue-600 px-4 py-2 text-sm flex items-center gap-2 mt-4">
                                    <PiShare className="w-4 h-4" />
                                    مشاركة
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                                <span className='bg-indigo-100 rounded-full p-2'>
                                    <MdOutlineRemoveRedEye className='text-indigo-600'/> 
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-800 font-bold">22</span>
                                    <span className="text-neutral-600 text-sm">اجمالي المشاهدة</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className='bg-emerald-100 rounded-full p-2'>
                                    <FaVideo className='text-emerald-600'/> 
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-800 font-bold">18</span>
                                    <span className="text-neutral-600 text-sm">المشاهدة الحالية</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className='bg-sky-100 rounded-full p-2'>
                                    <IoChatbubbleEllipsesOutline className='text-sky-600'/> 
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-800 font-bold">120</span>
                                    <span className="text-neutral-600 text-sm">التعليقات</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className='bg-orange-100 rounded-full p-2'>
                                    <PiCursorClickLight className='text-orange-600'/> 
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-800 font-bold">136</span>
                                    <span className="text-neutral-600 text-sm">التفاعل</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className='bg-purple-100 rounded-full p-2'>
                                    <LuClock3 className='text-purple-600'/> 
                                </span>
                                <div className="flex flex-col items-start">
                                    <span className="text-neutral-800 font-bold">23:12</span>
                                    <span className="text-neutral-600 text-sm">مدة البث</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default BroadcastRoom;