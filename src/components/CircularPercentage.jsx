import React from 'react';

const CircularPercentage = ({
    percentage = 0,
    w = 100,
    h = 100,
    strokeWidth = 8,
    strokeClass = "stroke-blue-500",
    trackClass = "stroke-gray-200",
    fontSize = "1.25rem",
    fontWeight = "bold"
}) => {
    const radius = (Math.min(w, h) - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ width: w, height: h }} className="relative flex items-center justify-center">
            <svg width={w} height={h} className="transform -rotate-90">
                {/* Track */}
                <circle
                    cx={w / 2}
                    cy={h / 2}
                    r={radius}
                    className={trackClass}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Progress */}
                <circle
                    cx={w / 2}
                    cy={h / 2}
                    r={radius}
                    className={`${strokeClass} transition-all duration-500 ease-out`}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-neutral-800 ${fontSize} ${fontWeight}`}>
                    {percentage}%
                </span>
            </div>
        </div>
    );
};

export default CircularPercentage;
