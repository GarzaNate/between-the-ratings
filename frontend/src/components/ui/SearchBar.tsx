
const SearchBar = () => {
    return (
        <div className="flex items-center justify-center">
            <input
                type="text"
                placeholder="Search for a book..."
                className="w-full max-w-lg rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <button className="ml-2 rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark transition-colors">
                Search
            </button>
        </div>
    )
}

export default SearchBar;
