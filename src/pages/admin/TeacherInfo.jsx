import { FiMail, FiPhone } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';


const TeacherInfo = () => {
    return (
        <div className="space-y-8 p-4">
            {/* Teacher Header Card */}
            <div className="bg-blue-100 rounded-3xl h-40 w-full  flex justify-between items-start px-3">
                <div className="flex items-center gap-3 mt-4">
                    <img
                        src="https://placehold.co/400"
                        alt="Student Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-bold text-neutral-800 text-5xl">
                            أحمد محمد
                        </h3>
                        <p className="font-semibold text-xl text-sky-600 ">
                            معلم رياضيات
                        </p>
                        <p className="text-black text-xl ">
                            3 صفوف
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2 py-2">
                    <div className="flex gap-2">
                        <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                            <FiPhone className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                            <FiMail className="w-4 h-4 text-neutral-600" />
                        </button>
                    </div>
                    <button className='text-xl font-semibold bg-blue-400 rounded-full px-4 py-2 text-black hover:bg-blue-500 transition-colors me-16 mt-8'>
                        تعديل الصلاحيات
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
                <div className="grid grid-cols-4 gap-6">
                    <div className="text-center">
                        <h4 className="mb-2 font-semibold" style={{ color: '#000000B0', fontSize: '28px' }}>عدد الطلاب</h4>
                        <p className="font-bold text-black" style={{ fontSize: '2rem' }}>128</p>
                    </div>
                    <div className="text-center">
                        <h4 className="mb-2 font-semibold" style={{ color: '#000000B0', fontSize: '28px' }}>عدد المواد</h4>
                        <p className="font-bold text-black" style={{ fontSize: '2rem' }}>8</p>
                    </div>
                    <div className="text-center">
                        <h4 className="mb-2 font-semibold" style={{ color: '#000000B0', fontSize: '28px' }}>تقييم الأداء</h4>
                        <div className="flex justify-center gap-1">
                            <FaStar className="text-amber-300" size={24} />
                            <FaStar className="text-amber-300" size={24} />
                            <FaStar className="text-amber-300" size={24} />
                            <FaStar className="text-amber-300" size={24} />
                            <FaStar style={{ color: '#D9D9D9' }} size={24} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="mb-2 font-semibold" style={{ color: '#000000B0', fontSize: '28px' }}>الحالة</h4>
                        <span className="bg-lime-500 text-white px-3 py-1 rounded-full" style={{ fontSize: '15px' }}>نشط</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left Column - 8/12 */}
                <div className="col-span-8">
                    <div className="bg-white p-6 rounded-3xl">
                        <h3 className="font-bold mb-4" style={{ fontSize: '28px' }}>البثوث المباشرة</h3>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '10px', overflow: 'hidden', border: '2px solid #a8a8a8ff' }}>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>عنوان البث</th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>المادة</th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>التاريخ </th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>المدة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>رياضيات الأساسية</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>رياضيات</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-01</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>1 ساعة</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>فيزياء متقدمة</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>فيزياء</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-02</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>45 دقيقة</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>كيمياء عضوية</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>كيمياء</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-03</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2 ساعة</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-6 rounded-3xl mt-8">
                        <h3 className="font-bold mb-4" style={{ fontSize: '28px' }}>الواجبات</h3>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '10px', overflow: 'hidden', border: '2px solid #a8a8a8ff' }}>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>عنوان الواجب</th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>المادة</th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>التاريخ </th>
                                    <th style={{ backgroundColor: '#D9D9D9', borderTop: '2px solid #a8a8a8ff', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>نسبة التسليم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>رياضيات الأساسية</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>رياضيات</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-01</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span>85%</span>
                                            <div className="w-16 bg-slate-400 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>فيزياء متقدمة</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>فيزياء</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-02</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderBottom: '2px solid #a8a8a8ff', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span>78%</span>
                                            <div className="w-16 bg-slate-400 rounded-full h-2">
                                                <div className="bg-green-300 h-2 rounded-full" style={{ width: '78%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>كيمياء عضوية</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>كيمياء</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>2023-10-03</td>
                                    <td style={{ backgroundColor: '#E9E9E9', borderRight: '2px solid #a8a8a8ff', padding: '8px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span>92%</span>
                                            <div className="w-16 bg-slate-400 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column - 4/12 */}
                <div className="col-span-4">
                    <div className="bg-white p-6 rounded-3xl">
                        <h3 className="font-bold mb-4" style={{ fontSize: '32px' }}>المواد والصفوف</h3>
                        <p className="text-gray-600">هذا نص مؤقت للمحتوى الجانبي...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherInfo;