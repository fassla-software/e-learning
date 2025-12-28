import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import { IoBookOutline } from "react-icons/io5";
import { FaCloudArrowDown } from "react-icons/fa6";
import { PiTextAa } from "react-icons/pi";
import { PiListNumbersDuotone } from "react-icons/pi";

import SearchInput from '../../components/SearchInput';
import Card from '../../components/Card';

const Curricula = () => {
    const navigate = useNavigate();
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

    return (
        <div className="p-6">
            <SearchInput placeholder='باستخدام العنوان أو اسم المادة أو المستوى' />

            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curricula.map((curriculum) => (
                        <Card key={curriculum.id} className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex items-start justify-between mb-4">
                                <PiTextAa className="text-2xl text-indigo-600" />
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                                        <FaCloudArrowDown className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/student/curricula/view/${curriculum.id}`)}
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                                        title="عرض المنهج"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-neutral-800 mb-2">{curriculum.name}</h4>

                            <div className="my-6 flex items-center gap-4">
                                <FaBook className="text-neutral-400" />
                                <div>
                                    <p className="text-base font-bold text-neutral-800">{curriculum.subject}</p>
                                    <p className="text-xs text-neutral-600">المادة</p>
                                </div>
                            </div>

                            <div className="my-6 flex items-center gap-4">
                                <PiListNumbersDuotone className='text-2xl text-neutral-400' />
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
    );
};

export default Curricula;
