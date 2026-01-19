import { useRef, useEffect } from 'react';
import { PiNotification } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";

const NotificationModal = ({ isOpen, onClose, triggerRef }) => {
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

    const notifications = [
        {
            id: 1,
            date: "الأحد، 22 نوفمبر 2025",
            name: "الحسن المكي",
            action: "أضافك إلى شعبة 203",
            read: false
        },
        {
            id: 2,
            date: "الاثنين، 23 نوفمبر 2025",
            name: "أحمد محمد",
            action: "قام بتصحيح واجب الرياضيات",
            read: false
        },
        {
            id: 3,
            date: "الثلاثاء، 24 نوفمبر 2025",
            name: "الإدارة",
            action: "أعلنت عن موعد الاختبار النهائي",
            read: true
        }
    ];

    return (
        <div className="absolute top-full mt-2  left-0 z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 w-[450px] overflow-hidden"
            >
                {/* Header */}
                <div className="p-4 flex flex-col items-start gap-2">
                    <PiNotification className="text-2xl text-neutral-800" />
                    <h3 className="font-bold text-neutral-800 text-2xl">إشعارات غير مقروءة</h3>
                </div>

                {/* Notifications List */}
                <div className="max-h-[500px] overflow-y-auto p-2">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="flex gap-3 items-start p-3 hover:bg-gray-50 transition-colors rounded-xl cursor-pointer"
                        >
                            {/* Icon Container */}
                            <span className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600">
                                <FiInfo className="text-lg" />
                            </span>

                            {/* Text Container */}
                            <div className="flex flex-col gap-1">
                                <span className="text-neutral-600 text-xs">
                                    {notification.date}
                                </span>
                                <p className="text-neutral-600 text-xs">
                                    <span className="font-bold text-sm text-neutral-800">{notification.name}</span> {notification.action}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer (Optional) */}
                <div className="p-4 text-start">
                    <button className="text-xs flex items-center gap-2 text-neutral-800 font-medium hover:text-neutral-600">
                        <BiCheckDouble className="inline-block text-xl" /> قراءة الكل
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
