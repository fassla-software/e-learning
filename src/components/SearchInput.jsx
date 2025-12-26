import { FiSearch } from 'react-icons/fi';

const SearchInput = ({ placeholder = "بحث..." , height='h-20', searchSize='8'}) => {
    return (
        <div className="relative text-sm sm:text-xl text-neutral-400">
            <FiSearch className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-${searchSize} h-${searchSize}`} />
            <input
                type="text"
                placeholder={placeholder}
                className={`w-full ${height} bg-white rounded-full py-6 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent placeholder:text-sm sm:placeholder:text-xl`}
            />
        </div>
    );
};

export default SearchInput;