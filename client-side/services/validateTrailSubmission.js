import axios from "axios";
import findCountryByName from "../utilities/findCountryByName";
import findStateByName from "../utilities/findStateByName";
import findCityByName from "../utilities/findCityByName";

const validateTrailSubmission = async (trailData) => {
  console.log("IN VALIDATE FUNC:::");
  console.log(trailData);
  /* console.log("VALIDATE TRIGGERED:::::::::");
  console.log(trailData); */

  const { city, state, country, name } = trailData;

  console.log(city);

  const countryData = await findCountryByName(country);
  console.log("AFTER COUNTRY");
  /*   console.log("Country data");
  console.log(countryData.data.confidentMatch); */

  const stateData = await findStateByName(state);
  console.log("AFTER STATE");

  /*   console.log("State data");
  console.log(stateData); */
  const cityData = await findCityByName(city);
  console.log(cityData);
  console.log("AFTER CITY");

  /*   console.log("City data");
  console.log(cityData); */

  //check to see that the trail name is unique in the city. Break this into a direct SQL
  //query later. Strapi doesn't allow deep nesting with multiple fields.

  //fetch all trails where city = city(from DB spelling)
  //then filter that array for all items that have the same name
  //then check to see if the length of the array is zero.

  const fetchTrailsFromCity = async () => {};

  if (
    countryData.data.confidentMatch &&
    stateData.data.confidentMatch &&
    cityData.data.confidentMatch
  ) {
    const validatedTrailData = {
      name,
      cityId: cityData.data.city.id,
      stateId: stateData.data.state.id,
      countryId: countryData.data.country.id,
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
