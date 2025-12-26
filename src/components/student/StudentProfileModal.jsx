import { useRef, useEffect } from 'react';
import { IoExitOutline } from "react-icons/io5";
import { LuGrid2X2 } from "react-icons/lu";
import { PiPencilSimpleLight, PiExamLight, PiCardsThree } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa6";

const StudentProfileModal = ({ isOpen, onClose, user, triggerRef }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) &&
                triggerRef.current && !triggerRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, triggerRef]);

    if (!isOpen) return null;

    return (
        <div className="absolute top-full mt-2 right-0 z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl border border-gray-200 w-120 p-6"
            >
                {/* Profile Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={user?.profileImage || "https://placehold.co/400"}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">{user?.name || "اسم الطالب"}</h3>
                            <p className="text-sm text-gray-600">{user?.email || "student@example.com"}</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 bg-orange-100 hover:bg-orange-300 text-neutral-600 py-2 px-4 rounded-2xl transition-colors text-sm">
                        <IoExitOutline />
                        تسجيل الخروج
                    </button>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <h3 className='flex gap-2 items-center justify-start bg-neutral-50 rounded-full p-2'> <LuGrid2X2 /> لوحة التحكم </h3>
                        <div className='text-xs text-neutral-400 space-y-3'>
                            <p className='flex gap-2 items-center justify-start mt-2'><PiCardsThree />الأهداف</p>
                            <p className='flex gap-2 items-center justify-start mt-2'><RiProfileLine />الدروس والمحتوى</p>
                            <p className='flex gap-2 items-center justify-start mt-2'><PiPencilSimpleLight />الواجبات</p>
                            <p className='flex gap-2 items-center justify-start mt-2'><MdOndemandVideo />البثوث</p>
                            <p className='flex gap-2 items-center justify-start mt-2'><PiExamLight />الإختبارات</p>
                            <p className='flex gap-2 items-center justify-start mt-2'><FaFingerprint />الحضور والغياب</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileModal;
