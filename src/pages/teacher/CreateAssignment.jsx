import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPlus } from 'react-icons/fi';

const CreateAssignment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: '',
        dueDateTime: '',
        grade: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Assignment created:', formData);
        navigate('/teacher/assignments');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const typeOptions = [
        { value: 'multiple-choice', label: 'اختيار من متعدد' },
        { value: 'file-image', label: 'صورة/ملف' },
        { value: 'writing', label: 'كتابة' }
    ];

    return (
        <div className="min-h-screen bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 shadow-lg max-w-xl w-full">
                <RiFilePaper2Line className="text-2xl text-indigo-600 mb-4" />
                <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>إضافة واجب جديد</h2>
                <p className="text-neutral-400 mb-6 text-2xl">تفاصيل هنا....</p>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm block font-bold text-neutral-800 mb-2">
                            العنوان
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="عنوان الواجب"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            النوع
                        </label>
                        <div className="flex items-center justify-start gap-4">
                            {typeOptions.map((option) => (
                                <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="type"
                                        value={option.value}
                                        checked={formData.type === option.value}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <div className="flex items-center">
                                        {formData.type === option.value ? (
                                            <FaRegCircleCheck className="text-lime-600 text-lg" />
                                        ) : (
                                            <div className="w-4 h-4 border-1 border-neutral-600 rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="text-neutral-600 text-sm font-bold">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            تفاصيل الواجب
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="وصف الواجب"
                            rows="1"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            مدة الواجب / تاريخ التسليم
                        </label>
                        <input
                            type="datetime-local"
                            name="dueDateTime"
                            value={formData.dueDateTime}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            درجة الواجب من
                        </label>
                        <input
                            type="number"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            placeholder="100"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button 
                        onClick={handleSubmit}
                        className="w-auto text-sm bg-indigo-200 text-neutral-800 py-2 px-4 rounded-full hover:bg-indigo-300 transition-colors flex items-center justify-center gap-2 mt-6"
                    >
                        <FiPlus className="w-4 h-4" />
                        إضافة واجب
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;