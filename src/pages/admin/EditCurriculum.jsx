import { useState } from 'react';
import { FaPlus, FaRegFileAlt } from 'react-icons/fa';
import { PiCaretUpDown } from 'react-icons/pi';
import { IoBookOutline, IoCloseCircleOutline } from "react-icons/io5";
import { FaCloudArrowUp } from "react-icons/fa6";

const EditCurriculum = () => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const removeFile = () => {
        setUploadedFile(null);
    };

    return (
        <div className="min-h-screen bg-opacity-50 flex items-center justify-center lg:p-4">
            <div className="bg-white rounded-3xl p-6 shadow-lg max-w-xl w-full">
                <IoBookOutline className="text-2xl text-blue-600 mb-4" />
                <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>تعديل المنهج</h2>
                <p className="text-neutral-400 mb-6" style={{fontSize: '1.5rem'}}>تفاصيل المنهج</p>

                <div className="space-y-4">
                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            العنوان
                        </label>
                        <input
                            type="text"
                            placeholder="منهج اللغة الإنجليزية"
                            defaultValue="الكيمياء - الصف الأول ثانوي"
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            المادة
                        </label>
                        <div className="relative">
                            <select className="w-full text-neutral-600 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>الرياضيات</option>
                                <option selected>الكيمياء</option>
                                <option>العلوم</option>
                            </select>
                            <PiCaretUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            المستوى
                        </label>
                        <div className="relative">
                            <select className="w-full text-neutral-600 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option selected>الأول</option>
                                <option>الثاني</option>
                                <option>الثالث</option>
                                <option>الرابع</option>
                            </select>
                            <PiCaretUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                            الملف
                        </label>
                        {!uploadedFile ? (
                            <label className="w-full border-2 border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors flex flex-col items-center justify-center text-center">
                                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                                <FaCloudArrowUp className="text-3xl text-neutral-400 mb-2" />
                                <p className="text-neutral-400 text-base mb-1">قم بسحب وإسقاط الملف</p>
                                <p className="text-base text-neutral-400">
                                    يمكنك تحميل ملف واحد فقط يصل حجم الملف إلى 1 جيجابايت<br/>
                                    الامتدادات المقبولة DOCS, PDF
                                </p>
                            </label>
                        ) : (
                            <div className="w-full border-2 border-neutral-200 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                                        <FaRegFileAlt className="text-amber-600 text-sm" />
                                    </div>
                                    <span className="text-neutral-800 text-sm">{uploadedFile.name}</span>
                                </div>
                                <button onClick={removeFile} className="text-gray-400 hover:text-red-500 transition-colors">
                                        <IoCloseCircleOutline className='text-black text-2xl font-thin' />
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="text-sm w-auto bg-indigo-200 text-neutral-800 py-2 px-4 rounded-full hover:bg-indigo-300 transition-colors flex items-center justify-center gap-2 mt-6">
                        <FaPlus className="w-4 h-4" />
                        تعديل
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCurriculum;