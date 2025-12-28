const StatsCards = ({ title, titleIcon: TitleIcon, stats, gridCols = "md:grid-cols-3" }) => {
    return (
        <div>
            {title && (
                <div className="flex justify-between mb-6 px-2">
                    <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
                    {TitleIcon && <TitleIcon />}
                </div>
            )}
            <div className={`grid grid-cols-1 ${gridCols} gap-6 mb-8`}>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white rounded-3xl p-4 shadow-sm flex items-center gap-4">
                            <div className={`w-10 h-10 ${stat.iconBg} rounded-full flex items-center justify-center`}>
                                <Icon className={`${stat.iconColor} text-2xl`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-neutral-800 text-base block">{stat.label}</span>
                                <div className="text-2xl font-bold text-neutral-800">{stat.value}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StatsCards;