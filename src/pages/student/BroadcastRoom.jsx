import { useParams } from 'react-router-dom';
import { FaVideo, FaMicrophone, FaUsers, FaHeart } from 'react-icons/fa';
import { FaHand } from "react-icons/fa6";
import { MdDesktopWindows, MdClosedCaption, MdSettings, Md4K, MdFullscreen } from 'react-icons/md';

import Card from '../../components/Card';

const BroadcastRoom = () => {
    const { id } = useParams();

    return (
        <div className="h-screen bg-gray-100 flex flex-col">
            {/* Main Content */}
            <div className="flex-1 grid grid-cols-12 gap-4 p-4">
                {/* Comments Section - 3 columns (Display Only) */}
                <div className="col-span-4 bg-white rounded-xl h-full flex flex-col">
                    <div className="p-4">
                        <h3 className="font-bold text-neutral-800" style={{ fontSize: '2rem' }}>التعليقات</h3>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {/* Vote Card */}
                        <div className="bg-neutral-100 p-4 rounded-lg">
                            <h4 className="font-bold text-neutral-800 mb-3">ما هو أفضل طريقة لحل هذه المعادلة؟</h4>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                                        <span className="text-sm">التعويض المباشر</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-30 h-3 bg-gray-200 rounded-full" dir="ltr">
                                            <div className="w-3/4 h-full bg-blue-500 rounded-full text-white flex items-center justify-center"
                                                style={{ fontSize: '10px' }}
                                            >
                                                <span>75%</span>
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
                                        <div className="w-30 h-3 bg-gray-200 rounded-full" dir="ltr">
                                            <div className="w-1/4 h-full bg-emerald-500 rounded-full text-white flex items-center justify-center"
                                                style={{ fontSize: '10px' }}
                                            >
                                                <span>25%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Regular Comments */}
                        <div className="flex gap-3">
                            <img
                                src="https://placehold.co/400"
                                alt="Student"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-neutral-800 text-sm">أحمد محمد</p>
                                <p className="text-sm text-neutral-600 mt-1">هل يمكن شرح هذه النقطة مرة أخرى؟</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <img
                                src="https://placehold.co/400"
                                alt="Student"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-neutral-800 text-sm">فاطمة علي</p>
                                <p className="text-sm text-neutral-600 mt-1">شكراً على الشرح الواضح</p>
                            </div>
                        </div>
                    </div>
                    {/* No input field at the bottom for students */}
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

                    {/* Control Panel */}
                    <div className="bg-white rounded-2xl p-6">
                        <div className="flex items-center justify-between text-neutral-800">
                            {/* Section 1: Mic and Video */}
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <FaMicrophone className="text-xl" />
                                    </button>
                                    <span className="text-sm">كتم</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <FaVideo className="text-xl" />
                                    </button>
                                    <span className="text-sm">فيديو</span>
                                </div>
                            </div>

                            {/* Section 2: Interaction Controls */}
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <FaUsers className="text-xl" />
                                    </button>
                                    <span className="text-sm">الأعضاء</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <FaHand className="text-xl" />
                                    </button>
                                    <span className="text-sm">رفع اليد</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <MdDesktopWindows className="text-xl" />
                                    </button>
                                    <span className="text-sm">مشاركة الشاشة</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <MdClosedCaption className="text-xl" />
                                    </button>
                                    <span className="text-sm">الاقتباسات</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <FaHeart className="text-xl" />
                                    </button>
                                    <span className="text-sm">التفاعل</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <MdSettings className="text-xl" />
                                    </button>
                                    <span className="text-sm">الاعدادات</span>
                                </div>
                            </div>

                            {/* Section 3: Quality and Fullscreen */}
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <Md4K className="text-xl" />
                                    </button>
                                    <span className="text-sm">الجودة</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                                        <MdFullscreen className="text-xl" />
                                    </button>
                                    <span className="text-sm">تكبير</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BroadcastRoom;
