import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaExternalLinkAlt, FaTimes, FaFilePdf } from 'react-icons/fa';
import { PiCaretUpDown } from 'react-icons/pi';
import { IoBookOutline } from "react-icons/io5";
import { FaCloudArrowUp, FaBook } from "react-icons/fa6";
import { PiTextAa } from "react-icons/pi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { PiPencilSimpleLight } from "react-icons/pi";
import { PiListNumbersDuotone } from "react-icons/pi";
import { PiCheckFat } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import SearchInput from '../../components/SearchInput';
const Card = ({ children, className }) => (
    <div className={className}>{children}</div>
);


const Curricula = () => {
    const navigate = useNavigate();
    const [uploadedFile, setUploadedFile] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [curriculumToDelete, setCurriculumToDelete] = useState(null);
    const [curricula] = useState([
        {
            id: 1,
            name: 'الكيمياء - الصف الأول ثانوي',
            subject: 'الكيمياء العضوية',
            المستوى: 'الأول ثانوي',
        },
        {
            id: 2,
            name: 'الكيمياء - الصف الأول ثانوي',
            subject: 'الكيمياء العضوية',
            المستوى: 'الأول ثانوي',
        },
        {
            id: 3,
            name: 'الكيمياء - الصف الأول ثانوي',
            subject: 'الكيمياء العضوية',
            المستوى: 'الأول ثانوي',
        }
    ]);

    const handleDelete = (curriculum) => {
        setCurriculumToDelete(curriculum);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        // Add your delete logic here
        console.log('Deleting:', curriculumToDelete);
        setShowDeleteModal(false);
        setCurriculumToDelete(null);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setCurriculumToDelete(null);
    };

    return (
        <div className="relative min-h-screen">
            <SearchInput placeholder='باستخدام العنوان أو اسم المادة أو المستوى' />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <IoBookOutline className="text-2xl text-blue-600 mb-4" />
                        <h2 className="font-bold mb-2 text-neutral-800" style={{ fontSize: '2rem' }}>إضافة منهج جديد</h2>
                        <p className="text-neutral-400 mb-6" style={{ fontSize: '1.5rem' }}>تفاصيل هنا....</p>

                        <div className="space-y-4">
                            <div>
                                <label className="block font-bold text-neutral-800 mb-2" style={{ fontSize: '14px' }}>
                                    العنوان
                                </label>
                                <input
                                    type="text"
                                    placeholder="منهج اللغة الإنجليزية"
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
                                        <option>الأول</option>
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
                                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setUploadedFile(e.target.files[0])} />
                                        <FaCloudArrowUp className="text-3xl text-neutral-400 mb-2" />
                                        <p className="text-neutral-400 text-base mb-1">قم بسحب وإسقاط الملف</p>
                                        <p className="text-base text-neutral-400">
                                            يمكنك تحميل ملف واحد فقط يصل حجم الملف إلى 1 جيجابايت<br />
                                            الامتدادات المقبولة DOCS, PDF
                                        </p>
                                    </label>
                                ) : (
                                    <div className="w-full border-2 border-neutral-200 rounded-lg p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <FaFilePdf className="text-blue-600 text-sm" />
                                            </div>
                                            <span className="text-neutral-800 text-sm">{uploadedFile.name}</span>
                                        </div>
                                        <button onClick={() => setUploadedFile(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                                            <FaTimes />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button className="text-sm w-auto bg-indigo-200 text-neutral-800 py-2 px-4 rounded-full hover:bg-indigo-300 transition-colors flex items-center justify-center gap-2 mt-6">
                                <FaPlus className="w-4 h-4" />
                                إضافة
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {curricula.map((curriculum) => (
                            <Card key={curriculum.id} className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <PiTextAa className="text-2xl text-indigo-600" />
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleDelete(curriculum)}
                                            className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                                        >
                                            <RiDeleteBack2Line className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={() => navigate(`/admin/curricula/edit/${curriculum.id}`)}
                                            className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                                        >
                                            <PiPencilSimpleLight className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                            <FaExternalLinkAlt className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold text-neutral-800 mb-2">{curriculum.name}</h4>

                                <div className="my-6 flex items-center gap-4">
                                    <FaBook />
                                    <div>
                                        <p className="text-base font-bold text-neutral-800">{curriculum.subject}</p>
                                        <p className="text-xs text-neutral-600">المادة</p>
                                    </div>
                                </div>

                                <div className="my-6 flex items-center gap-4">
                                    <PiListNumbersDuotone className='text-2xl' />
                                    <div>
                                        <p className="text-base font-bold text-neutral-800">{curriculum.المستوى}</p>
                                        <p className="text-xs text-neutral-600">المستوى</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={cancelDelete}>
                    <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 text-start" onClick={(e) => e.stopPropagation()}>
                        <RiDeleteBack2Line className="text-4xl text-indigo-600 mb-4" />
                        <h3 className="font-bold text-neutral-800 mb-2" style={{fontSize:'2rem'}}>حذف المنهج</h3>
                        <p className="text-neutral-600 text-xl mb-6">هل أنت متأكد من حذف المنهج؟</p>
                        <div className="flex gap-3 justify-start">
                            <button
                                onClick={confirmDelete}
                                className="flex justify-between gap-2 items-center text-sm text-neutral-800 px-4 py-2 bg-emerald-100 rounded-2xl hover:bg-emerald-200 transition-colors"
                            >
                                <PiCheckFat/>
                                نعم
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="flex justify-between gap-2 items-center text-sm text-neutral-800 px-4 py-2 bg-neutral-100 rounded-2xl hover:bg-neutral-200 transition-colors"
                            >
                                <IoMdClose/>
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Curricula;