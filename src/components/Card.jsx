const Card = ({ children, className = "",  ...props }) => {
    return (
        <div 
            className={` px-4 py-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;