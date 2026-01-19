import { useNavigate } from 'react-router-dom';
import { PiVideoLight, PiNotebook, PiTranslate, PiMathOperations, PiFlask, PiYoutubeLogo } from "react-icons/pi";
import { FiExternalLink } from 'react-icons/fi';
import { CgSandClock } from "react-icons/cg";
import { GoNote } from "react-icons/go";
import { IoIosGitBranch } from "react-icons/io";

import Card from "../../components/Card";

const MyCourses = () => {
    const navigate = useNavigate();

    const tracks = [
        {
            id: 1,
            title: "مسار اللغة الإنجليزية",
            description: "في هذا المسار ستتعرف على كل ما يخص اللغة الإنجليزية، من: القواعد، كيفية تكوين جملة مفيدة، ظروف الزمان وكيفية استخدامها، والكثير من الدروس التي بإنتظارك.",
            price: "1,550 ر.س",
            icon: PiTranslate,
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
            buttonBg: "bg-neutral-800"
        },
        {
            id: 2,
            title: "مسار الرياضيات",
            description: "اكتشف عالم الأرقام والمعادلات في هذا المسار الشامل الذي يغطي الجبر، الهندسة، وحل المشكلات بطرق مبتكرة وسهلة الفهم.",
            price: "1,200 ر.س",
            icon: PiMathOperations,
            bgColor: "bg-emerald-50",
            iconColor: "text-emerald-600",
            buttonBg: "bg-neutral-800"
        },
        {
            id: 3,
            title: "مسار العلوم",
            description: "انطلق في رحلة استكشافية للكون من حولنا، من أصغر الذرات إلى أكبر المجرات، مع تجارب عملية وشروحات مبسطة.",
            price: "1,350 ر.س",
            icon: PiFlask,
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600",
            buttonBg: "bg-neutral-800"
        }
    ];

    // Mock data for enrolled courses
    const myCourses = [
        {
            id: "2510281001",
            title: "الذكاء الاصطناعي في الألعاب",
            duration: "7 ساعات",
            videos: "12 فيديو",
            level: "مبتدئ",
            price: "1,550 ر.س"
        },
        {
            id: "2510281002",
            title: "تصميم واجهات المستخدم",
            duration: "10 ساعات",
            videos: "15 فيديو",
            level: "متوسط",
            price: "1,800 ر.س"
        }
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar - Tracks */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-neutral-800">المسارات</h2>
                        <IoIosGitBranch className="text-2xl" />
                    </div>

                    <div className="space-y-6">
                        {tracks.map((track) => {
                            const Icon = track.icon;
                            return (
                                <Card key={track.id} className={`${track.bgColor} border-none rounded-3xl p-6 shadow-sm`}>
                                    <div className="mb-4">
                                        <Icon className={`${track.iconColor} h-8 w-8 text-2xl mb-3`} />
                                        <h3 className="text-xl font-bold text-neutral-800 mb-3">{track.title}</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                                            {track.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-neutral-800 text-white rounded-full px-4 py-2 flex items-center gap-2">
                                            <span className="text-base font-bold">تفاصيل المسار</span>
                                            <FiExternalLink className="w-4 h-4" />
                                        </button>
                                        <span className="text-base text-neutral-800 font-bold">{track.price}</span>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-neutral-800">دوراتي</h2>
                        <PiNotebook className="text-2xl text-neutral-600" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {myCourses.map((course, index) => (
                            <Card key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-neutral-600 text-base px-3 py-1.5">
                                        {course.id}
                                    </span>
                                    <span className="text-sm text-neutral-800 px-3 py-1.5 flex items-center gap-1">
                                        <CgSandClock className="text-sm" />
                                        {course.duration}
                                    </span>
                                    <span className="text-neutral-800 text-xs px-3 py-1.5 flex items-center gap-1">
                                        <PiVideoLight className="text-sm" />
                                        {course.videos}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-800 mb-6 leading-tight">
                                    {course.title}
                                </h3>

                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-neutral-400 mb-2">
                                        <GoNote className="text-lg" />
                                        <span className="text-sm">مستوى المادة</span>
                                    </div>
                                    <div className="text-neutral-800 font-bold text-lg">
                                        {course.level}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-neutral-50">
                                    <button
                                        onClick={() => navigate(`/student/my-courses/${course.id}`)}
                                        className="bg-indigo-600 text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-neutral-700 transition-colors w-full justify-center"
                                    >
                                        <span className="text-base font-bold">متابعة الدورة</span>
                                        <FiExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourses;
