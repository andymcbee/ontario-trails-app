import React, { useState } from "react";
import image from "../assets/pexels-photo-142497.jpeg";
import { ChipWithColorOption } from "./ChipWithColorOption";
export const CardWithButtonAndImage = ({ data, chipColor }) => {
  const { Name, Description, Difficulty } = data.attributes;
  console.log("chip color:::::");
  console.log(chipColor);

  chipColor ? console.log("first") : console.log("Second");

  // pass chip color into compone t- determine it in the map function.
  //then just put the Chip component + the color into the body
  //Handle the logic to determine the color within the Chip component. It's not a required field
  // if it's empty, default it to gray.

  console.log(data);

  console.log(Name);
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/test/">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {chipColor ? (
            <ChipWithColorOption chipText={Difficulty} chipColor={chipColor} />
          ) : (
            <ChipWithColorOption chipText={Difficulty} />
          )}
        </p>

        <p className="mb-2 min-h-[50px] font-bold tracking-tight text-gray-900 dark:text-white">
          {Name}
        </p>

        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          Length: 4.5km
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Port Hope, Ontario, Canada
        </p>
        <a
          href="/"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              //  fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              //  clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
