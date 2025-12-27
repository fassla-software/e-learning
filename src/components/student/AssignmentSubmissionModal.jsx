import { useState } from 'react';
import { PiHandTap, PiX } from 'react-icons/pi';
import {  FaRegFileAlt } from 'react-icons/fa';
import { FaCloudArrowUp } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";

const AssignmentSubmissionModal = ({ isOpen, onClose, onSubmit }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (uploadedFile) {
            onSubmit(uploadedFile);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl w-full max-w-md p-6 relative"
                onClick={e => e.stopPropagation()}
            >
                
                <div className="flex flex-col items-start gap-4 mb-6">
                    <PiHandTap className="w-6 h-6 text-indigo-600" />
                    <div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-2">حل الواجب</h3>
                        <p className="text-neutral-600 text-sm">
                            يمكنك حل الواجب عن طريق إرفاق ملف أو صورة للحل
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        {!uploadedFile ? (
                            <label className="w-full border-1 border-neutral-200 rounded-xl p-6 cursor-pointer hover:border-indigo-300 transition-colors flex flex-col items-center justify-center text-center">
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
                                    onChange={handleFileUpload} 
                                />
                                <FaCloudArrowUp className="text-2xl text-neutral-400 mb-2" />
                                <p className="text-neutral-600 text-sm mb-1">قم بسحب وإسقاط الملف</p>
                                <p className="text-xs text-neutral-400">
                                    يمكنك تحميل ملف واحد فقط يصل حجم الملف إلى 5 ميجابايت
                                    <br />
                                    الامتدادات المقبولة: PDF, DOCS, JPG, PNG
                                </p>
                            </label>
                        ) : (
                            <div className="w-full border-2 border-neutral-200 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <FaRegFileAlt className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-800">{uploadedFile.name}</p>
                                        <p className="text-xs text-neutral-500">
                                            {(uploadedFile.size / 1024).toFixed(1)} KB
                                        </p>
                                    </div>
                                </div>
                                <button 
                                    type="button"
                                    onClick={removeFile}
                                    className="text-neutral-400 hover:text-red-500 transition-colors"
                                >
                                    <PiX className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!uploadedFile}
                        className={`text-sm p-3 text-neural-800 flex items-center justify-between rounded-full ${
                            uploadedFile 
                                ? 'bg-indigo-200 hover:bg-indigo-300' 
                                : 'bg-indigo-100 cursor-not-allowed'
                        } transition-colors`}
                    >
                        <BsSend className="w-4 h-4 ml-2" />
                        إرسال الحل
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AssignmentSubmissionModal;
