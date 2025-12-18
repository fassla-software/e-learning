import { FaRegCircleCheck } from "react-icons/fa6";

const ExamQuestion = ({ questionNumber, questionData, onQuestionChange, examType }) => {
    const handleQuestionTitleChange = (e) => {
        onQuestionChange(questionNumber - 1, {
            ...questionData,
            title: e.target.value
        });
    };

    const handleAnswerChange = (answerIndex, value) => {
        const newAnswers = [...questionData.answers];
        newAnswers[answerIndex] = value;
        onQuestionChange(questionNumber - 1, {
            ...questionData,
            answers: newAnswers
        });
    };

    const handleCorrectAnswerChange = (answerIndex) => {
        onQuestionChange(questionNumber - 1, {
            ...questionData,
            correctAnswer: answerIndex
        });
    };

    const answerPlaceholders = ['الإجابة الأولى', 'الإجابة الثانية', 'الإجابة الثالثة', 'الإجابة الرابعة'];

    return (
        <div className="space-y-4 p-4 border border-neutral-200 rounded-lg">
            <h3 className="font-bold text-neutral-800" style={{ fontSize: '16px' }}>
                سؤال {questionNumber}
            </h3>
            
            <div>
                <input
                    type="text"
                    value={questionData.title}
                    onChange={handleQuestionTitleChange}
                    placeholder="اكتب السؤال هنا"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {examType === 'multiple-choice' && (
                <div>
                    <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                        الإجابات
                    </label>
                    <div className="space-y-2">
                        {answerPlaceholders.map((placeholder, index) => (
                            <div key={index} className="flex items-center gap-3 px-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <input
                                    type="text"
                                    value={questionData.answers[index] || ''}
                                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    placeholder={placeholder}
                                    className="flex-1 px-3 py-2 focus:outline-none"
                                />
                                <label className={`flex items-center gap-2 cursor-pointer px-2 py-2 rounded-2xl ${
                                    questionData.correctAnswer === index 
                                        ? 'bg-emerald-100' 
                                        : 'bg-neutral-100'
                                }`}>
                                    <input
                                        type="radio"
                                        name={`correct-answer-${questionNumber}`}
                                        checked={questionData.correctAnswer === index}
                                        onChange={() => handleCorrectAnswerChange(index)}
                                        className="sr-only"
                                    />
                                    <div className="flex items-center">
                                        {questionData.correctAnswer === index ? (
                                            <FaRegCircleCheck className="text-lime-600 text-lg" />
                                        ) : (
                                            <div className="w-4 h-4 border-1 border-neutral-600 rounded-full"></div>
                                        )}
                                    </div>
                                    <span className={`text-xs font-bold ${
                                        questionData.correctAnswer === index 
                                            ? 'text-emerald-600' 
                                            : 'text-neutral-600'
                                    }`}>الإجابة الصحيحة</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamQuestion;