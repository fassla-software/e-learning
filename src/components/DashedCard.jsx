const DashedCard = ({ icon, text, onClick }) => {
    return (
        <div 
            className="card-dashed-container mt-4 cursor-pointer"
            onClick={onClick}
        >
            <svg className="card-dashed-border" width="100%" height="100%">
                <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    fill="none"
                    stroke="#A1A1A1"
                    strokeWidth="3"
                    strokeDasharray="15 10"
                    strokeLinecap="round"
                    rx="24"
                    ry="24"
                />
            </svg>
            <div className="card-dashed-content flex flex-col items-center justify-center gap-2 text-neutral-400"
                style={{ fontSize: '24px' }}
            >
                {icon}
                <p className="mt-2 text-center">{text}</p>
            </div>
        </div>
    );
};

export default DashedCard;