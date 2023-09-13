const Search = () => {
  return (
    <div className="w-full overflow-hidden flex items-center relative">
      <input
        className="custom-input focus:ring-0 hover:ring-0 relative block p-4 pl-10 text-sm text-gray-900 bg-red-50 border border-red-300 focus:ring-red-500 focus:border-red-600 transition  ease-in-out duration-300 rounded-[22px]"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 transition-colors duration-300 ease-in-out"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
