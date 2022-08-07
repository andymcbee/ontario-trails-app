import axios from "axios";
import findOneTrailBatchJsonToBeProcessed from "../utilities/findOneTrailBatchJsonToBeProcessed";
import validateTrailSubmission from "../services/validateTrailSubmission";
import createTrail from "../services/createTrail";

const trails = () => {
  const handleClickProcessData = async () => {
    const trailsToProcess = await findOneTrailBatchJsonToBeProcessed();
    const trailsToProcessArray =
      trailsToProcess?.data.singleJsonTrailData?.attributes.trailsdata;
    console.log("ARRAY OF TRAILS TO PROCESS");
    console.log(trailsToProcessArray);

    const unresolved = trailsToProcessArray.map(async (trail) => {
      const validatedTrail = await validateTrailSubmission(trail.trailData);
      // console.log("AFTER VALIDATION");
      //   console.log(validatedTrail);
      console.log("VALIDATED TRAIL:::: with status:::");
      console.log(validatedTrail);

      validatedTrail.data.valid
        ? createTrail(validatedTrail.data.trailData)
        : console.log("this trail was not valid. Create an error log.");
    });

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
      <button onClick={handleClickProcessData}>Click</button>
    </div>
  );
};

export default trails;
