import { useState } from 'react';
import {  FaSearch } from 'react-icons/fa';
import { FaFingerprint, FaUserMinus, FaUserCheck } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";

import StatsCards from '../../components/StatsCards';
import SearchInput from '../../components/SearchInput';

const Attendance = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'present', 'absent'

    // Arabic month names
    const arabicMonths = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    // Format date to Arabic format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = arabicMonths[date.getMonth()];
        const year = date.getFullYear();
        return `${day}, ${month} ${year}`;
    };

    // Static attendance data
    const attendanceData = [
        { id: 1, day: 'الأحد', date: '2024-01-15', status: 'حاضر' },
        { id: 2, day: 'الاثنين', date: '2024-01-16', status: 'غائب' },
        { id: 3, day: 'الثلاثاء', date: '2024-01-17', status: 'حاضر' },
        { id: 4, day: 'الأربعاء', date: '2024-01-18', status: 'حاضر' },
        { id: 5, day: 'الخميس', date: '2024-01-19', status: 'غائب' },
        { id: 6, day: 'الجمعة', date: '2024-01-20', status: 'حاضر' },
        { id: 7, day: 'السبت', date: '2024-01-21', status: 'حاضر' }
    ];

    const filteredData = attendanceData.filter(record => {
        const matchesSearch = record.day.includes(searchTerm) || record.date.includes(searchTerm);
        const matchesFilter = filter === 'all' || 
            (filter === 'present' && record.status === 'حاضر') ||
            (filter === 'absent' && record.status === 'غائب');
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6 px-8">
            {/* Stats Cards */}
            <StatsCards
                title={'إحصائيات الحضور'}
                stats={[
                    {
                        label: 'إجمالي الأيام',
                        value: '7',
                        icon: FaFingerprint,
                        iconBg: 'bg-indigo-100',
                        iconColor: 'text-indigo-600'
                    },
                    {
                        label: 'أيام الحضور',
                        value: '5',
                        icon: FaUserCheck,
                        iconBg: 'bg-emerald-100',
                        iconColor: 'text-emerald-600'
                    },
                    {
                        label: 'أيام الغياب',
                        value: '2',
                        icon: FaUserMinus,
                        iconBg: 'bg-red-100',
                        iconColor: 'text-red-600'
                    }
                ]}
            />

            {/* Attendance Table Container */}
            <div className="bg-white rounded-t-xl  overflow-hidden">
                {/* Filter Header */}
                <div className="bg-blue-100 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-neutral-800">الفلترة</h3>
                        <CiFilter className="text-neutral-800 text-2xl" />
                    </div>
                    
                    <div className="flex items-center justify-start gap-4">
                        {/* Search Input */}
                        <SearchInput height='h-8' searchSize='4' placeholder='باستخدام الحالة أو التاريخ'/>

                        {/* Filter Buttons */}
                        <button
                            onClick={() => setFilter('present')}
                            className={`px-4 py-3 rounded-full transition-colors ${
                                filter === 'present' 
                                    ? 'bg-emerald-500 text-white' 
                                    : 'bg-neutral-50 text-neutral-400 hover:bg-neutral-100'
                            }`}
                        >
                            <FaUserCheck className="inline me-3" />
                            حاضر
                        </button>
                        
                        <button
                            onClick={() => setFilter('absent')}
                            className={`px-4 py-3 rounded-full transition-colors ${
                                filter === 'absent' 
                                    ? 'bg-red-400 text-white' 
                                    : 'bg-neutral-50 text-neutral-400 hover:bg-neutral-100'
                            }`}
                        >
                            <FaUserMinus className="inline me-3" />
                            غائب
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-neutral-100 text-2xl text-neutral-800 font-bold">
                                <th className="text-right p-4">اليوم</th>
                                <th className="text-right p-4">التاريخ</th>
                                <th className="text-right p-4">الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((record) => (
                                <tr key={record.id} className="border-b-2 border-neutral-100">
                                    <td className="p-4 text-2xl text-neutral-800">{record.day}</td>
                                    <td className="p-4 text-2xl font-bold text-neutral-800">{formatDate(record.date)}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            record.status === 'حاضر' 
                                                ? 'bg-emerald-100 text-emerald-600' 
                                                : 'bg-red-100 text-red-600'
                                        }`}>
                                            {record.status === 'حاضر' ? (
                                                <FaUserCheck className='inline me-3'/>
                                            ) : (
                                                <FaUserMinus className='inline me-3'/>
                                            )}
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance;