import Card from '../Card';
import { PiVideoLight } from "react-icons/pi";
import usersIcon from '../../assets/usersIcon.svg';
import studentIcon from '../../assets/studentIcon.svg';
import identityicon from '../../assets/identityicon.svg';
import { FaExternalLinkAlt } from "react-icons/fa";

const StatsSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
                <Card className='bg-white flex flex-col rounded-r-lg gap-12'>
                    <img src={usersIcon} alt="Users" className="w-12 h-12" />
                    <div className="flex justify-between gap-4">
                        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600">عدد المستخدمين</p>
                        <span style={{fontSize: '32px', fontWeight: 'bold'}}>1500</span>
                    </div>
                </Card>
                <Card className='bg-white flex flex-col gap-12'>
                    <img src={studentIcon} alt="Students" className="w-12 h-12" />
                    <div className="flex justify-between gap-4">
                        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600">عدد المعلمين</p>
                        <span style={{ fontSize: '32px', fontWeight: 'bold' }}>850</span>
                    </div>
                </Card>
                <Card className='bg-white flex flex-col rounded-l-lg gap-12'>
                    <img src={identityicon} alt="identityicon" className="w-12 h-12" />
                    <div className="flex justify-between gap-12">
                        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600">عدد الطلاب</p>
                        <span style={{ fontSize: '32px', fontWeight: 'bold' }}>320</span>
                    </div>
                </Card>
            </div>
            <div className="lg:col-span-4">
                <Card className="bg-indigo-200 rounded-xl">
                    <PiVideoLight className='text-3xl' />
                    <p className='my-2 text-xl sm:text-2xl lg:text-3xl font-bold'>مسار اللغة الإنجليزية</p>
                    <p className='text-sm sm:text-base'>ينبغي مراجعة المسار واعتماده قبل النشر</p>
                    <button className="bg-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors mt-4">
                        <FaExternalLinkAlt />
                        <span>مراجعة </span>
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default StatsSection;