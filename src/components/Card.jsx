const Card = ({ children, className = "", ...props }) => {
    return (
        <div 
            className={` shadow-md border border-gray-200 px-4 py-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;