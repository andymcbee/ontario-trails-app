import React, { useState } from "react";
import RatingChip from "./RatingChip";

function CardTrailOverview({ data, chipColor }) {
  const { name, slug } = data.attributes;
  console.log(name);

  console.log(data);

  const cityData = {
    name: data.attributes.city.data.attributes.name,
    id: data.attributes.city.data.id,
  };

  const countryData = {
    name: data.attributes.country.data.attributes.name,
    id: data.attributes.country.data.id,
  };

  const stateData = {
    name: data.attributes.state.data.attributes.name,
    id: data.attributes.state.data.id,
  };

  const trailLink = "/";

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <RatingChip
            ratingCount={data.attributes.googleReviewCount}
            ratingAvg={data.attributes.googleReviewAvg}
            chipColor="green"
          />
        </div>

        <p className="mb-2 min-h-[50px] font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </p>

        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <a href={data.attributes.googleMapsLink}>Get Directions</a>
        </p>
      </div>
    </div>
  );
}

export default CardTrailOverview;

//{`/${stateData.name.toLowerCase()}/${slug.toLowerCase()}`}
