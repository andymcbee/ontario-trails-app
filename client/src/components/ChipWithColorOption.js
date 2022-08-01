import React from "react";

export const ChipWithColorOption = ({ chipText, chipColor }) => {
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
          {chipText}
        </div>
      </div>
    </div>
  );
};
