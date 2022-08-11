import React from "react";

function RatingChip({ ratingAvg, ratingCount, chipColor }) {
  //if chipColor string text !== a supported color (below) chip will be the below default color.
  let defaultColorForChip = "gray";

  //Current supported colors:
  //red:              "text-red-700 bg-red-100 border border-red-300";

  //green:            "text-green-700 bg-green-100 border border-green-300"

  //yellow:           "text-yellow-700 bg-yellow-100 border border-yellow-300"

  let colorForChip =
    chipColor === "red" || chipColor === "yellow" || chipColor === "green"
      ? `text-${chipColor}-700 bg-${chipColor}-100 border border-${chipColor}-300`
      : `text-${defaultColorForChip}-700 bg-${defaultColorForChip}-100 border border-${defaultColorForChip}-300`;
  return (
    <div className="flex">
      <div
        className={`flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full ${colorForChip}`}
      >
        <div className="text-xs font-normal leading-none flex-initial">
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {ratingAvg}
            </p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {ratingCount} Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingChip;
