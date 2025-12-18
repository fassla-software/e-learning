import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiExam } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPlus } from 'react-icons/fi';
import ExamQuestion from '../../components/teacher/ExamQuestion';

const CreateExam = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        startDateTime: '',
        endDateTime: '',
        grade: ''
    });
    
    const [questions, setQuestions] = useState([
        {
            title: '',
            answers: ['', '', '', ''],
            correctAnswer: null
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Exam created:', { ...formData, questions });
        navigate('/teacher/exams');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleQuestionChange = (questionIndex, questionData) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex] = questionData;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, {
            title: '',
            answers: ['', '', '', ''],
            correctAnswer: null
        }]);
    };

    const typeOptions = [
        { value: 'multiple-choice', label: 'اختيار من متعدد' },
        { value: 'essay', label: 'مقالي' }
    ];

    return (
        <div className="min-h-screen bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-3xl w-full">
                <PiExam className="text-2xl text-indigo-600 mb-4" />
                <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>إنشاء اختبار جديد</h2>
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
                            placeholder="اختبار رياضيات - الفصل الأول"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            نوع الاختبار
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

                    {/* Questions Section */}
                    {formData.type && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-neutral-800" style={{ fontSize: '16px' }}>
                                أسئلة الاختبار
                            </h3>

                            {questions.map((question, index) => (
                                <ExamQuestion
                                    key={index}
                                    questionNumber={index + 1}
                                    questionData={question}
                                    onQuestionChange={handleQuestionChange}
                                    examType={formData.type}
                                />
                            ))}

                            <button
                                type="button"
                                onClick={addQuestion}
                                className="w-auto text-sm bg-neutral-100 text-neutral-800 py-2 px-4 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <FiPlus className="w-4 h-4" />
                                إضافة سؤال جديد
                            </button>
                        </div>
                    )}
                    

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            تاريخ ووقت بداية الاختبار
                        </label>
                        <input
                            type="datetime-local"
                            name="startDateTime"
                            value={formData.startDateTime}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            تاريخ ووقت نهاية الاختبار
                        </label>
                        <input
                            type="datetime-local"
                            name="endDateTime"
                            value={formData.endDateTime}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            مدة الاختبار (بالدقائق)
                        </label>
                        <input
                            type="number"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="60"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> */}

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            درجة الاختبار من
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
                        إضافة
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateExam;