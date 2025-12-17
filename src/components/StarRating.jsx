import { FaStar } from 'react-icons/fa';

const StarRating = ({ filledStars = 5, totalStars = 5, size = 24 }) => {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: totalStars }, (_, index) => (
                <FaStar
                    key={index}
                    className={index < filledStars ? "text-amber-300" : "text-gray-300"}
                    size={size}
                />
            ))}
        </div>
    );
};

export default StarRating;