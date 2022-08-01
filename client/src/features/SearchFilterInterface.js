import React, { useState } from "react";
import { Searchbar } from "../components/Searchbar";
import { Checkbox } from "../components/Checkbox";
import { Button1 } from "../components/Button1";

export const SearchFilterInterface = ({ handleSearchSubmit }) => {
  const [checkboxValueEasy, setCheckboxValueEasy] = useState(false);
  const [checkboxValueMedium, setCheckboxValueMedium] = useState(false);

  const [checkboxValueHard, setCheckboxValueHard] = useState(false);

  const handleCheckboxChangeEasy = (currentCheckboxValue) => {
    setCheckboxValueEasy(!currentCheckboxValue);
  };

  const handleCheckboxChangeMedium = (currentCheckboxValue) => {
    setCheckboxValueMedium(!currentCheckboxValue);
  };

  const handleCheckboxChangeHard = (currentCheckboxValue) => {
    setCheckboxValueHard(!currentCheckboxValue);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 m-5">
      <div className="h-full w-[400px]">
        <div className="mb-2 font-medium">Search</div>

        <Searchbar handleSearchSubmit={handleSearchSubmit} />
      </div>
      <div className="h-full">
        <div className="mb-2 font-medium">Filter by Difficulty</div>

        <div className="flex gap-4">
          <div>
            <Checkbox
              checkboxValue={checkboxValueEasy}
              id="Easy"
              handleCheckboxChange={handleCheckboxChangeEasy}
            />
          </div>
          <div>
            <Checkbox
              checkboxValue={checkboxValueMedium}
              id="Medium"
              handleCheckboxChange={handleCheckboxChangeMedium}
            />
          </div>
          <div>
            <Checkbox
              checkboxValue={checkboxValueHard}
              id="Hard"
              handleCheckboxChange={handleCheckboxChangeHard}
            />
          </div>
          <div>
            <Button1 buttonText="Filter" />
          </div>
        </div>
      </div>
    </div>
  );
};
