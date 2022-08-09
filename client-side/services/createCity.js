import axios from "axios";
import urlifyString from "../utilities/urlifyString";
import trailUpdateSlug from "./trailUpdateSlug";

const createCity = async (cityName, stateId, countryId) => {
  try {
    const { data } = await axios.post("http://localhost:1337/api/cities", {
      data: {
        name: cityName,
        country: countryId,
        state: stateId,
      },
    });
    console.log("AFTER THE AXIOS POST::::::::");
    console.log("NEW CITY:::::");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default createCity;
