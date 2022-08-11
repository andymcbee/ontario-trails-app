import axios from "axios";
import findCountryByName from "../utilities/findCountryByName";
import findStateByName from "../utilities/findStateByName";
import findCityByName from "../utilities/findCityByName";
import findTrailByName from "../utilities/findTrailByName";

const validateTrailSubmission = async (trailData) => {
  console.log("IN VALIDATE FUNC:::");
  console.log(trailData);
  /* console.log("VALIDATE TRIGGERED:::::::::");
  console.log(trailData); */

  const {
    city,
    state,
    country,
    name,
    website,
    category,
    address,
    zip,
    googleReviewAvg,
    googleReviewCount,
    googleMapsLink,
  } = trailData;

  // console.log(city);

  const countryData = await findCountryByName(country);
  //console.log("AFTER COUNTRY");
  /*   console.log("Country data");
  console.log(countryData.data.confidentMatch); */

  const stateData = await findStateByName(state);
  //console.log("AFTER STATE");

  /*   console.log("State data");
  console.log(stateData); */
  const cityData = await findCityByName(city);
  //console.log(cityData);
  // console.log("AFTER CITY");

  /*   console.log("City data");
  console.log(cityData); */

  //I need to clean this up. The naming convention from the first approach didn't
  //carry over well. change it to come from the perspective of
  //searching for a unique name
  //Also - need to add a CITY filter. Right now it checks global name match.
  const trailCheckData = await findTrailByName(name);
  console.log("CHECKING THE TRAIL :::::::::::::::::@@@@@@@@@@@");
  console.log(trailCheckData);

  if (
    countryData.data.confidentMatch &&
    stateData.data.confidentMatch &&
    cityData.data.confidentMatch &&
    trailCheckData.data.unique
  ) {
    const validatedTrailData = {
      name,
      cityId: cityData.data.city.id,
      stateId: stateData.data.state.id,
      countryId: countryData.data.country.id,
      website,
      category,
      address,
      zip,
      googleReviewAvg,
      googleReviewCount,
      googleMapsLink,
    };
    /*     console.log("VALID TRAIL DATA... WITH TRAIL NAME AND ALL LOC IDS");
    console.log(validatedTrailData); */

    return { data: { validatedTrailData, valid: true } };
  } else {
    return { data: { validatedTrailData: null, valid: false, trailData } };
  }

  //validate country
  //validate state
  //validate city
  //validate trail (I need to implement this. I think
  //just search all trails in the city - then see if the trail name matches any existing in the returned array)

  //if all are valid, return the DB spellings of everything.
};

export default validateTrailSubmission;
