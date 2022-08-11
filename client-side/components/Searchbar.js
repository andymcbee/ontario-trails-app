import React, { useState } from "react";

function Searchbar({ handleSearchSubmit }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    // <form onSubmit={() => handleClick("test")}>
    <div className="">
      <div className="relative flex items-center gap-4">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="search"
          id="default-search"
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search trail name or city"
          required
        />
        <button
          onClick={() => handleSearchSubmit(searchInput)}
          className="h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
    //   </form>
  );
}

export default Searchbar;
