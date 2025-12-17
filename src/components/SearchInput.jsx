import { FiSearch } from 'react-icons/fi';

const SearchInput = ({ placeholder = "بحث..." }) => {
    return (
        <div className="relative text-sm sm:text-xl text-neutral-400">
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-8 h-8" />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full h-20 bg-white rounded-full py-6 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent placeholder:text-sm sm:placeholder:text-xl"
            />
        </div>
    );
};

export default SearchInput;