const ProgressBar = ({ percentage, color = 'bg-green-500', width = 'w-16', height='h-2', showPercentage = true }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {showPercentage && <span>{percentage}%</span>}
            <div className={`${width} bg-slate-400 rounded-full ${height}`}>
                <div className={`${color} ${height} rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;