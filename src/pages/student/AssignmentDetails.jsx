import { useParams } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { PiHandTap } from "react-icons/pi";
import { useState } from 'react';
import AssignmentSubmissionModal from '../../components/student/AssignmentSubmissionModal';

export default function AssignmentDetails() {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleSubmitAssignment = (file) => {
        console.log('Submitting assignment:', file);
        // Here you would typically upload the file to your backend
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
                        
            {/* Modal */}
            <div className="bg-white rounded-2xl w-full max-w-2xl p-8 z-20 relative">
                {/* Header with date and ID */}
                <div className="flex justify-between items-center mb-6 text-neutral-800 text-base">
                    <span className="">الثلاثاء، 28، أكتوبر 2025</span>
                    <span className="">{id}</span>
                </div>
                
                {/* Subject and question */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-neutral-800 mb-2">اللغة العربية</h2>
                    <p className="text-base text-neutral-600">السؤال الأول من صفحة 27</p>
                </div>
                
                {/* Assignment image */}
                <div className="mb-8 rounded-xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                        alt="Assignment" 
                        className="w-full h-64 object-cover"
                    />
                </div>
                
                {/* Due date and progress */}
                <div className="bg-neutral-100 rounded-xl p-6 space-y-4">
                    <SlCalender className="w-4 h-4 text-neutral-400" />
                    
                    <p className="text-base text-neutral-800">
                        الاثنين 17، نوفمبر 2025. 7:00 مساءً <span className="text-emerald-600">(متاحة)</span>
                    </p>
                    
                    {/* Progress bar */}
                    <div className="pt-2">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div 
                                className="bg-emerald-600 h-4 rounded-full flex items-center justify-center" 
                                style={{ width: '92%' }}
                            >
                                <span className="text-xs font-medium text-blue-100 mr-1">92%</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {/* Submit button */}
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-indigo-200 hover:bg-indigo-300 text-sm text-neutral-800 p-2 rounded-full transition-colors flex items-center justify-center gap-2 mt-4"
                >
                    <PiHandTap className="w-4 h-4" />
                    حل الواجب
                </button>
                
                {/* Assignment Submission Modal */}
                <AssignmentSubmissionModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmitAssignment}
                />
            </div>
        </div>
    );
}
