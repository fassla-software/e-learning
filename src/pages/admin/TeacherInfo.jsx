import { FiMail, FiPhone } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import RoundedTable from '../../components/RoundedTable';
import ProgressBar from '../../components/ProgressBar';
import StarRating from '../../components/StarRating';
import { IoIosArrowBack } from "react-icons/io";


const TeacherInfo = () => {
    const navigate = useNavigate();
    
    const thStyle = {
        backgroundColor: '#E5E5E5',
        padding: '10px',
        borderBottom: '1px solid #A8A8A8',
        fontWeight: '600',
    };


    const tdStyle = {
        backgroundColor: '#F0F0F0',
        padding: '10px',
        borderBottom: '1px solid #A8A8A8',
    };

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
                <div className="flex flex-col items-end gap-2 py-2">
                    <div className="flex gap-2">
                        <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                            <FiPhone className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="bg-white p-4 hover:bg-gray-100 rounded-full">
                            <FiMail className="w-4 h-4 text-neutral-600" />
                        </button>
                    </div>
                    <button 
                        onClick={() => navigate('/admin/edit-teacher-permissions')}
                        className='text-sm font-semibold bg-blue-400 rounded-full px-3 py-1 text-black hover:bg-blue-500 transition-colors me-16 mt-8'
                    >
                        تعديل الصلاحيات
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white p-6 rounded-3xl shadow-md">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* right Column - 8/12 */}
                {/* tables section */}
                <div className="lg:col-span-8">
                    <div className="bg-white p-4 lg:p-12 rounded-3xl shadow-md">
                        <h3 className="font-bold mb-4" style={{ fontSize: '28px' }}>البثوث المباشرة</h3>
                        <RoundedTable
                            headers={['عنوان البث', 'المادة', 'التاريخ', 'المدة']}
                            data={[
                                ['رياضيات الأساسية', 'رياضيات', '2023-10-01', '1 ساعة'],
                                ['فيزياء متقدمة', 'فيزياء', '2023-10-02', '45 دقيقة'],
                                ['كيمياء عضوية', 'كيمياء', '2023-10-03', '2 ساعة']
                            ]}
                        />

                    </div>
                    <div className="bg-white p-4 lg:p-12 rounded-3xl mt-8 shadow-md">
                        <h3 className="font-bold mb-4" style={{ fontSize: '28px' }}>الواجبات</h3>
                        <RoundedTable
                            headers={['عنوان الواجب', 'المادة', 'التاريخ', 'نسبة التسليم']}
                            data={[
                                ['رياضيات الأساسية', 'رياضيات', '2023-10-01', <ProgressBar percentage={85} />],
                                ['فيزياء متقدمة', 'فيزياء', '2023-10-02', <ProgressBar percentage={78} color="bg-green-300" />],
                                ['كيمياء عضوية', 'كيمياء', '2023-10-03', <ProgressBar percentage={92} />]
                            ]}
                        />

                    </div>
                </div>

                {/* left Column - 4/12 */}
                <div className="lg:col-span-4">

                    {/* tables and classes section */}
                    <div className="bg-white p-6 rounded-3xl space-y-4">
                        <h3 className="font-bold mb-8" style={{ fontSize: '2rem' }}>المواد والصفوف</h3>
                        <div className='rounded-2xl py-3 px-4 flex items-center justify-between font-semibold' style={{ backgroundColor: '#F5F5F5' }}>
                            <div className=''>
                                <p className='text-2xl mb-1'>رياضيات - صف 2/1</p>
                                <p className='text-xl'>28 طالب</p>
                            </div>
                            <IoIosArrowBack className='text-xl font-bold' style={{ color: '#969696' }} />
                        </div>
                        <div className='rounded-2xl py-3 px-4 flex items-center justify-between font-semibold' style={{ backgroundColor: '#F5F5F5' }}>
                            <div className=''>
                                <p className='text-2xl mb-1'>رياضيات - صف 2/1</p>
                                <p className='text-xl'>28 طالب</p>
                            </div>
                            <IoIosArrowBack className='text-xl font-bold' style={{ color: '#969696' }} />
                        </div>
                        <div className='rounded-2xl py-3 px-4 flex items-center justify-between font-semibold' style={{ backgroundColor: '#F5F5F5' }}>
                            <div className=''>
                                <p className='text-2xl mb-1'>رياضيات - صف 2/1</p>
                                <p className='text-xl'>28 طالب</p>
                            </div>
                            <IoIosArrowBack className='text-xl font-bold' style={{ color: '#969696' }} />
                        </div>
                    </div>

                    {/* rating section */}
                    <div className="bg-white p-6 rounded-3xl mt-6">
                        <h3 className="font-bold mb-2" style={{ fontSize: '28px' }}>تقييم الإدارة</h3>
                        <div className="mb-4">
                            <h3 className="font-bold mb-1 text-start text-xl">تقييم الإدارة</h3>
                            <div className="flex items-center gap-2">
                                <StarRating filledStars={5} />
                                <span className="text-lg font-semibold mr-2">(ممتاز)</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-1 text-start text-xl">تقييم الطلاب</h3>
                            <div className="flex items-center gap-2">
                                <StarRating filledStars={4} />
                                <span className="text-lg font-semibold mr-2">(جيد جداً)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherInfo;