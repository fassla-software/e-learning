const ProgressBar = ({
    percentage,
    color = 'bg-green-500',
    width = 'w-16',
    height = 'h-2',
    showPercentage = true,
    bgColor = 'bg-slate-200',
    textInside = null,
    className = ""
}) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {showPercentage && !textInside && <span>{percentage}%</span>}
            <div className={`${width} ${bgColor} rounded-full ${height} relative overflow-hidden`}>
                <div
                    className={`${color} ${height} rounded-full flex items-center justify-center transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                >
                    {textInside && <span className="text-white text-xs font-bold">{textInside}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;