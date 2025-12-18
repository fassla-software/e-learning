const StudentCard = ({ icon, title, studentName }) => {
    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-base text-neutral-600">{title}</h3>
                {icon}
            </div>
            <p className="text-neutral-800 text-2xl font-bold">{studentName}</p>
        </div>
    );
};

export default StudentCard;