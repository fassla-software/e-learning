import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChevronLeftIcon from '../../assets/chevron-left-pdf.svg?react';
import LogoIcon from '../../assets/logo-pdf.svg?react';
import FitWidthIcon from '../../assets/pdf-fit-width.svg?react';
import PrintIcon from '../../assets/pdf-print.svg?react';
import DownloadIcon from '../../assets/pdf-download.svg?react';
import ZoomOutIcon from '../../assets/pdf-zoom-out.svg?react';
import ZoomInIcon from '../../assets/pdf-zoom-in.svg?react';
import WarningIcon from '../../assets/pdf-warning.svg?react';
import SidebarIcon from '../../assets/pdf-sidebar-icon.svg?react';

const CurriculumViewer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [zoom, setZoom] = useState(100);

    // Mock data - in real app, fetch based on id
    const curriculum = {
        id: id,
        name: 'منهج-اللغة-الإنجليزية-المستوى-الأول.pdf',
        currentPage: 1,
        totalPages: 148
    };

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 10, 200));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 10, 50));
    };

    const handleDownload = () => {
        console.log('Download PDF');
    };

    const handlePrint = () => {
        console.log('Print PDF');
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] p-6">
            {/* Back Button */}
            <button
                onClick={() => navigate('/student/curricula')}
                className="flex items-center gap-[10px] px-4 py-2 rounded-[100px] bg-white hover:bg-gray-50 transition-colors mb-6"
            >
                <ChevronLeftIcon className="w-[9px] h-[17px]" style={{ color: '#000000' }} />
                <span className="text-base font-normal text-black">العودة</span>
            </button>

            {/* Main Container */}
            <div className="flex gap-4">
                {/* Left Section - Viewer */}
                <div className="flex-1">
                    {/* Header Bar */}
                    <div className="bg-white rounded-tl-[24px] rounded-bl-[24px] p-6 mb-4">
                        <div className="flex items-start justify-between mb-4">
                            {/* Toolbar */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handlePrint}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                                    title="طباعة"
                                >
                                    <FitWidthIcon className="w-5 h-4" style={{ color: '#525252' }} />
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                                    title="طباعة"
                                >
                                    <PrintIcon className="w-[21px] h-[18px]" style={{ color: '#525252' }} />
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                                    title="تحميل"
                                >
                                    <DownloadIcon className="w-[23px] h-4" style={{ color: '#525252' }} />
                                </button>

                                {/* Zoom Controls */}
                                <div className="flex items-center gap-4 mr-4">
                                    <button
                                        onClick={handleZoomOut}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                                        title="تصغير"
                                    >
                                        <ZoomOutIcon className="w-5 h-5" style={{ color: '#525252' }} />
                                    </button>
                                    <span className="text-base font-bold text-[#262626] min-w-[45px] text-center">
                                        {zoom}%
                                    </span>
                                    <button
                                        onClick={handleZoomIn}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                                        title="تكبير"
                                    >
                                        <ZoomInIcon className="w-5 h-5" style={{ color: '#525252' }} />
                                    </button>
                                </div>
                            </div>

                            {/* Title and Page Info */}
                            <div className="text-right">
                                <h1 className="text-xl font-bold text-[#262626] mb-1">
                                    {curriculum.name}
                                </h1>
                                <p className="text-sm font-normal text-[#525252]">
                                    الصفحة {curriculum.currentPage} من {curriculum.totalPages}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PDF Viewer Area */}
                    <div className="bg-[#fef3c6] rounded-[24px] h-[449px] flex flex-col items-center justify-center relative">
                        <WarningIcon className="w-[42px] h-[38px] mb-6" style={{ color: '#e17100' }} />
                        <p className="text-[80px] font-bold text-[#e17100] leading-tight text-center">
                            هنا راح تظهر صفحات الملف
                        </p>
                    </div>
                </div>

                {/* Right Section - Sidebar */}
                <div className="w-[250px]">


                    <div className="bg-white rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] p-6">
                        {/* Sidebar Icon */}
                        <div className="flex justify-end mb-4">
                            <SidebarIcon className="w-5 h-4" style={{ color: '#525252' }} />
                        </div>

                        {/* Page Thumbnails */}
                        <div className="flex flex-col gap-4">
                            {/* Page 1 - Active */}
                            <div className="bg-[#bedbff] rounded-[16px] p-2 cursor-pointer">
                                <img
                                    src="/pdf-page-placeholder.png"
                                    alt="صفحة 1"
                                    className="w-full h-[199px] object-cover rounded-[8px] mb-2"
                                />
                                <p className="text-sm font-bold text-[#262626] text-center">1</p>
                            </div>

                            {/* Page 2 */}
                            <div className="bg-white rounded-[16px] p-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                <img
                                    src="/pdf-page-placeholder.png"
                                    alt="صفحة 2"
                                    className="w-full h-[199px] object-cover rounded-[8px] mb-2"
                                />
                                <p className="text-sm font-bold text-[#262626] text-center">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumViewer;