import axios from "axios";

const fetchAllTrails = async () => {
  //Missing functionality: We need to filter by Country Id to decrease amount of duplicate hits.
  // Do after we build into many states and this issues occurs often.
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/trails?pagination[page]=1&pagination[pageSize]=5&populate=%2A`
    );
    if (data.data.length > 0) {
      //    console.log(`COUNT IS ONE FOR CITY:${cityNameString}`);

      return { data: { trails: data.data, error: false } };
    } else {
      return {
        data: {
          message: `No trails found!`,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllTrails;
