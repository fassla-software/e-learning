import { FaFingerprint } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";

const AttendanceCard = ({ onRecordAttendance }) => {
    return (
        <div className="bg-white rounded-3xl p-4 text-start ">
            <FaFingerprint className="text-3xl text-neutral-800 mb-4" />
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">تسجيل الحضور</h3>
            <p className="text-neutral-600 text-base mb-6">لم تسجل حضورك بعد</p>
            <button 
                onClick={onRecordAttendance}
                className="bg-indigo-200 text-neutral-600 flex items-center justify-between gap-3 px-6 py-2 rounded-full hover:bg-indigo-300 transition-colors"
            >
                تسجيل الحضور
                <RxExit/>
            </button>
        </div>
    );
};

export default AttendanceCard;