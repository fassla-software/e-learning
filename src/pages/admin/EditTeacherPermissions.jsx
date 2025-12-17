import { FiMail, FiPhone, FiCheck, FiX } from 'react-icons/fi';
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";

const PermissionItem = ({ text, isAllowed = false }) => {
    return (
        <div className="flex justify-between items-center ps-4 ">
            <span className="text-base text-neutral-800">{text}</span>
            {isAllowed ? (
                <div className="bg-emerald-100 rounded-full p-2">
                    <FiCheck className="text-green-500 text-xl" />
                </div>
            ) : (
                <div className="bg-emerald-100 rounded-full p-2">
                    <FiX className="text-red-500 text-xl" />
                </div>
            )}
        </div>
    );
};

const EditTeacherPermissions = () => {
    return (
        <div className="space-y-8 p-4">
            {/* Teacher Header Card */}
            <div className="bg-blue-100 rounded-3xl h-40 w-full flex justify-between items-start px-3">
                <div className="flex items-center gap-3 mt-4">
                    <img
                        src="https://placehold.co/400"
                        alt="Student Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-bold text-neutral-800 text-2xl md:text-3xl lg:text-5xl">
                            أحمد محمد
                        </h3>
                        <p className="font-semibold text-sm md:text-lg lg:text-xl text-sky-600">
                            معلم رياضيات
                        </p>
                        <p className="text-black text-sm md:text-lg lg:text-xl">
                            3 صفوف
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 py-2">
                    <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                        <FiPhone className="w-4 h-4 text-neutral-600" />
                    </button>
                    <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                        <FiMail className="w-4 h-4 text-neutral-600" />
                    </button>
                </div>
            </div>

            {/* Permissions Content */}
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className='lg:col-span-8 p-6 '>
                    <div className='flex justify-between pe-3 text-xl text-bold mb-6'>
                        <h2 className="font-bold text-xl">جميع الصلاحيات (باستثناء المعطاء)</h2>
                        <IoLockClosedOutline/>
                    </div>
                    <div className="space-y-4">
                        <PermissionItem text="إضافة طلاب جدد" isAllowed={true} />
                        <PermissionItem text="حذف الطلاب" isAllowed={true} />
                        <PermissionItem text="تعديل الدرجات" isAllowed={true} />
                        <PermissionItem text="إنشاء الاختبارات" isAllowed={true} />
                        <PermissionItem text="حذف المواد" isAllowed={true} />
                    </div>
                </div>
                <div className='lg:col-span-4 p-6'>
                    <div className='flex justify-between pe-3 text-xl text-bold mb-6'>
                        <h2 className="font-bold text-xl">الصلاحيات المعطاء</h2>
                        <IoLockOpenOutline />
                    </div>
                    <div className="space-y-4">
                        <PermissionItem text="حذف الطلاب" isAllowed={false} />
                        <PermissionItem text="حذف المواد" isAllowed={false} />
                    </div>
                </div>
            
            </div>

            <div className="p-6">
            </div>

        </div>
    );
};

export default EditTeacherPermissions;