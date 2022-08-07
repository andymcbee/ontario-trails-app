import axios from "axios";

const findCityByName = async (cityNameString) => {
  //Missing functionality: We need to filter by Country Id to decrease amount of duplicate hits.
  // Do after we build into many states and this issues occurs often.
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/cities?filters[name][$contains]=${cityNameString}`
    );

    if (data.data.length === 1) {
      //    console.log(`COUNT IS ONE FOR CITY:${cityNameString}`);

      return { data: { city: data.data[0], confidentMatch: true } };
    } else {
      return {
        data: {
          cityId: `No confident match found ${cityNameString}`,
          confidentMatch: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findCityByName;
