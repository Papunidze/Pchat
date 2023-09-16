const Search = () => {
  return (
    <div className="h-[42px] rounded-[22px]  relative w-full  overflow-hidden flex items-center">
      <input
        placeholder="Search"
        className="border-[1px] border-border-color  ms-1 me-1 px-[inherit] transition-border-color pl-[2.5rem] ease-in-out delay-75 duration-75 bg-[#fff] h-[42px] w-full leading-[42px] rounded-[22px] outline-none focus:border-[#3390ec] focus:border-2"
      />
      <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-border-color"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g className="search-path" fill="none" stroke="#848F91">
            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Search;
