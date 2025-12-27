import React, { useState } from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { TfiStatsUp, TfiStatsDown } from "react-icons/tfi";
import { FiCalendar, FiStar } from "react-icons/fi";
import { PiCalculator, PiTextAUnderline, PiSticker, PiFlask, PiAtom, PiGlobeHemisphereWest, PiBooks, PiTranslate } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import SearchInput from '../../components/SearchInput';

const StudentAssignments = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [assignmentType, setAssignmentType] = useState('all');

    const subjects = [
        { name: 'الرياضيات', icon: PiCalculator, color: 'bg-blue-100', textColor: 'text-blue-600', },
        { name: 'اللغة العربية', icon: PiTextAUnderline, color: 'bg-emerald-100', textColor: 'text-emerald-600', },
        { name: 'الفيزياء', icon: PiAtom, color: 'bg-orange-100', textColor: 'text-orange-600', },
        { name: 'الكيمياء', icon: PiFlask, color: 'bg-purple-100', textColor: 'text-purple-600', },
        { name: 'الأحياء', icon: PiBooks, color: 'bg-rose-100', textColor: 'text-rose-600', },
        { name: 'اللغة الإنجليزية', icon: PiTranslate, iconName: 'PiTranslate', color: 'bg-sky-100', textColor: 'text-sky-600', },
        { name: 'التاريخ', icon: PiBooks, color: 'bg-amber-100', textColor: 'text-amber-600', },
        { name: 'الجغرافيا', icon: PiGlobeHemisphereWest, color: 'bg-teal-100', textColor: 'text-teal-600', }
    ];

    const assignmentTypes = [
        { id: 'near-end', label: 'ينتهي قريبًا', icon: FiCalendar },
        { id: 'attachment', label: 'إرفاق مرفق', icon: TfiStatsUp },
        { id: 'multiple-choice', label: 'اختيار من متعدد', icon: TfiStatsDown },
        { id: 'q-a', label: 'سؤال وجواب', icon: FiStar },
    ];

    const assignments = [
        {
            id: 1,
            subject: 'الرياضيات',
            title: 'السؤال الثالث والرابع في صفحة 126',
            type: 'إرفاق ملف',
            dueDate: 'الاثنين 17, نوفمبر 2025',
            remaining: 'متبقي 3 يوم'
        },
        {
            id: 2,
            subject: 'اللغة العربية',
            title: 'تحليل النص الأدبي في الصفحة 45',
            type: 'سؤال وجواب',
            dueDate: 'الثلاثاء 18, نوفمبر 2025',
            remaining: 'متبقي 4 يوم'
        },
        {
            id: 3,
            subject: 'الفيزياء',
            title: 'مسائل قوانين الحركة لنيوتن',
            type: 'إرفاق ملف',
            dueDate: 'الأربعاء 19, نوفمبر 2025',
            remaining: 'متبقي 5 يوم'
        },
        {
            id: 4,
            subject: 'الكيمياء',
            title: 'تجربة التفاعلات الكيميائية',
            type: 'اختيار من متعدد',
            dueDate: 'الخميس 20, نوفمبر 2025',
            remaining: 'متبقي 6 يوم'
        }
    ];

    const toggleSubject = (subjectName) => {
        if (selectedSubjects.includes(subjectName)) {
            setSelectedSubjects(selectedSubjects.filter(s => s !== subjectName));
        } else {
            setSelectedSubjects([...selectedSubjects, subjectName]);
        }
    };

    return (
        <div className="space-y-8 px-8 pb-12">
            {/* Search Section */}
            <div className="w-full">
                <SearchInput
                    placeholder="باستخدام عنوان الواجب أو التاريخ"
                    height="h-20"
                    searchSize="6"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-8">
                {/* Filter Sidebar */}
                <div className="col-span-4 space-y-6">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
                        {/* Header */}
                        <div className="flex flex-col items-start gap-4 mb-8">
                            <GiSettingsKnobs className="text-indigo-600 w-6 h-6 font-bold" />
                            <div>
                                <h3 className="font-bold text-neutral-800 mb-1" style={{ fontSize: '2rem' }}>تصفية الواجبات</h3>
                                <p className="text-neutral-400 text-2xl">يمكنك تحديد أكثر من خيار</p>
                            </div>
                        </div>

                        {/* Subject Filters */}
                        <div className="mb-10">
                            <div className="flex flex-wrap gap-3" dir="rtl">
                                {subjects.map((subject) => (
                                    <button
                                        key={subject.name}
                                        onClick={() => toggleSubject(subject.name)}
                                        className={`px-4 py-2 rounded-full border border-dashed transition-all text-sm ${selectedSubjects.includes(subject.name)
                                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                                            : 'border-neutral-400 text-neutral-400 hover:border-neutral-500'
                                            }`}
                                    >
                                        {subject.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Type Filters */}
                        <div className="space-y-4" dir="rtl">
                            {assignmentTypes.map((type) => {
                                const Icon = type.icon;
                                return (
                                    <label
                                        key={type.id}
                                        className="flex items-center justify-between group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-neutral-400" />
                                            <span className="text-neutral-400 text-sm">
                                                {type.label}
                                            </span>
                                        </div>
                                        <input
                                            type="radio"
                                            name="assignmentType"
                                            value={type.id}
                                            checked={assignmentType === type.id}
                                            onChange={() => setAssignmentType(type.id)}
                                            className="w-5 h-5 text-blue-600 border-neutral-300 focus:ring-blue-500"
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Assignments Grid */}
                <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-6">
                        {assignments.map((assignment) => {
                            const subjectData = subjects.find(s => s.name === assignment.subject) || subjects[0];
                            const SubjectIcon = subjectData.icon;
                            return (
                                <div key={assignment.id} className={`${subjectData.color} rounded-3xl p-8 flex flex-col gap-4`}>
                                    {/* Top: Subject Icon & Name */}
                                    <SubjectIcon className={`w-6 h-6 ${subjectData.textColor}`} />

                                    <span className={`text-2xl font-bold text-neutral-800`}>{assignment.subject}</span>

                                    {/* Title */}
                                    <h4 className="text-base text-neutral-600">{assignment.title}</h4>

                                    {/* Details Row */}
                                    <div className="flex items-start justify-between gap-1 pl-12" dir="rtl">
                                        {/* Assignment Type */}
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-neutral-600">
                                                <PiSticker className="w-5 h-5" />
                                                <span className="text-xs">نوع الواجب</span>
                                            </div>
                                            <span className="text-neutral-800 font-bold text-base">{assignment.type}</span>
                                        </div>

                                        {/* Due Date */}
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-neutral-600">
                                                <FiCalendar className="w-5 h-5" />
                                                <span className="text-xs">تاريخ التسليم إلى</span>
                                            </div>
                                            <span className="text-neutral-800 font-bold text-base">{assignment.dueDate}</span>
                                        </div>
                                    </div>

                                    {/* Bottom: Remaining & Link */}
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="bg-neutral-50 px-4 py-2 rounded-full text-neutral-800 text-xs">
                                            {assignment.remaining}
                                        </span>
                                        <Link 
                                            to={`/student/assignments/${assignment.id}`}
                                            className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAssignments;
