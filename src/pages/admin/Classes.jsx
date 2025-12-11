import { FiSearch, FiChevronDown, FiPlus, FiBook, FiEdit, FiExternalLink } from 'react-icons/fi';
import { PiChalkboardTeacher, PiCaretUpDown } from 'react-icons/pi';
import { FaChalkboard } from "react-icons/fa";

const Classes = () => {
    return (
        <div className="space-y-6 p-3">
            {/* Search Input */}
            <div className="">
                <div className="relative">
                    <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="بحث بإستخدام الفصول"
                        className="w-full bg-white rounded-full py-6 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Right Column - Create New Class Form */}
                <div className="lg:col-span-4 px-8">
                    <div className="bg-white rounded-3xl p-6 shadow-sm ">
                        <FaChalkboard className="text-2xl text-blue-600 mb-4" />
                        <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>إنشاء فصل جديد</h2>
                        <p className="text-neutral-400 mb-6" style={{fontSize: '1.5rem'}}>تفاصيل هنا....</p>

                        <div className="space-y-4">
                            {/* Class Name Input */}
                            <div>
                                <label 
                                    className="block font-bold text-neutral-800 mb-2"
                                    style={{ fontSize: '14px' }}
                                >
                                    اسم الفصل الدراسي
                                </label>
                                <input
                                    type="text"
                                    placeholder="أدخل اسم الفصل"
                                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Students Dropdown */}
                            <div>
                                <label 
                                    className="block font-bold text-neutral-800 mb-2"
                                    style={{ fontSize: '14px' }}
                                >
                                    الطلاب
                                </label>
                                <div className="relative">
                                    <select className="w-full text-neutral-600 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                        <option>اختر الطلاب</option>
                                    </select>
                                    <PiCaretUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Teacher Dropdown */}
                            <div>
                                <label
                                    className="block font-bold text-neutral-800 mb-2"
                                    style={{ fontSize: '14px' }}
                                >
                                    المعلم
                                </label>
                                <div className="relative">
                                    <select className="w-full text-neutral-600 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                        <option>اختر المعلم</option>
                                    </select>
                                    <PiCaretUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button className="w-auto bg-blue-200 text-neutral-800 py-2 px-4 rounded-full hover:bg-blue-300 transition-colors flex items-center justify-center gap-2 mt-6">
                                <FiPlus className="w-4 h-4" />
                                إضافة فصل جديد
                            </button>
                        </div>
                    </div>
                </div>
                {/* Left Column - Classes List */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="bg-blue-100 rounded-3xl h-20 w-full p-2 flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800"
                                    style={{ fontSize: '1.5rem' }}
                                >
                                    شعبة 101
                                </h3>
                                <p className="text-sm text-neutral-600">عدد الطلاب 28</p>
                            </div>
                        </div>
                        <div className="flex p-2">
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiEdit className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiExternalLink className="w-4 h-4 text-neutral-600" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-blue-100 rounded-3xl h-20 w-full p-2 flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800"
                                    style={{ fontSize: '1.5rem' }}
                                >
                                    شعبة 102
                                </h3>
                                <p className="text-sm text-neutral-600">عدد الطلاب 32</p>
                            </div>
                        </div>
                        <div className="flex p-2">
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiEdit className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiExternalLink className="w-4 h-4 text-neutral-600" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-blue-100 rounded-3xl h-20 w-full p-2 flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800"
                                    style={{ fontSize: '1.5rem' }}
                                >
                                    شعبة 103
                                </h3>
                                <p className="text-sm text-neutral-600">عدد الطلاب 25</p>
                            </div>
                        </div>
                        <div className="flex p-2">
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiEdit className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-1 hover:bg-blue-200 rounded-full">
                                <FiExternalLink className="w-4 h-4 text-neutral-600" />
                            </button>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    );
};

export default Classes;