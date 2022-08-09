import axios from "axios";
import findOneTrailBatchJsonToBeProcessed from "../utilities/findOneTrailBatchJsonToBeProcessed";
import validateTrailSubmission from "../services/validateTrailSubmission";
import createTrail from "../services/createTrail";
import urlifyString from "../utilities/urlifyString";
import findTrailBySlug from "../utilities/findTrailBySlug";
import findOneCityBatchJsonToBeProcessed from "../utilities/findOneCityBatchJsonToBeProcessed";
import createCity from "../services/createCity";
import findCityByName from "../utilities/findCityByName";

const trails = () => {
  const handleCreateCities = async () => {
    console.log("Click");

    //fetch cities JSON to process
    const data = await findOneCityBatchJsonToBeProcessed();
    const trailsToProcess = data?.data.singleJsonCityData.attributes.json;

    console.log(trailsToProcess);

    trailsToProcess.map(async (city) => {
      const response = await findCityByName(city.name);
      console.log(response);

      console.log(response.data.confidentMatch);

      if (!response.data.confidentMatch) {
        console.log("No match... allow creation of trail");
        createCity(city.name, city.state, city.country);
      } else {
        console.log(
          `MATCH FOUND for ${city.name}... don't allow creation of new city...`
        );
      }
    });
  };

  const handleGetSlugClick = async () => {
    //add this logic to create trail AFTER actual creation
    //urlify Name
    //append -(ID) onto end
    //check and see if it exists (search trail by slug)
    //If not, update the created trail.

    const trailId = 5;

    //urlify the trail name
    const urlifiedName = urlifyString(
      "A.Y. Jackson-Lookout South/West at Fisherman's Villege (East Location)"
    );

    console.log("URLIFIED NAME SLUG WITHOUT ID:::::::::::::::");
    console.log(urlifiedName);

    //append urlified name + - + trail id

    const finalSlug = urlifiedName + "-" + trailId;

    console.log("URLIFIED NAME WITH SLUG:::::::::::");
    console.log(finalSlug);

    //trigger find trail by slug w/ the slug
    const result = await findTrailBySlug(finalSlug);
    console.log("IS THE SLUG UNIQUE::::::::");

    console.log(result);

    //if it's unique, update the trail slug
  };

  const handleClickProcessData = async () => {
    const trailsToProcess = await findOneTrailBatchJsonToBeProcessed();
    console.log(trailsToProcess);
    const trailsToProcessArray =
      trailsToProcess?.data.singleJsonTrailData?.attributes.trailsdata;
    console.log(trailsToProcessArray);
    // console.log("ARRAY OF TRAILS TO PROCESS");
    // console.log(trailsToProcessArray);

    const unresolved = trailsToProcessArray.map(async (trail) => {
      const validatedTrail = await validateTrailSubmission(trail);
      // console.log("AFTER VALIDATION");
      //   console.log(validatedTrail);
      //  console.log("VALIDATED TRAIL:::: with status:::");
      //  console.log(validatedTrail);

      validatedTrail.data.valid
        ? createTrail(validatedTrail.data.validatedTrailData)
        : console.log("this trail was not valid. Create an error log.");
    });

    ///////////////////////

    /*     const validTrailsOnly = arrayofTrailsWithValidStatus.filter(function (
      item
    ) {
      console.log(item.data.valid);
      return item.data.valid;
    });

    console.log(validTrailsOnly); */

    //final step: trigger "create" step for each item in this array.
  };

  return (
    <div>
      {/*    <button onClick={handleCreateCities}>Create New Cities</button> */}

      {/*  <button onClick={handleGetSlugClick}>Click</button>*/}
      <button onClick={handleClickProcessData}> Create new trails</button>

      {/*  <button onClick={triggerUrlify}>Click TO TEST SLUGIFY</button>*/}
    </div>
  );
};

export default trails;
