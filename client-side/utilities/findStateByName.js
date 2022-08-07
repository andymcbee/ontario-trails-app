import axios from "axios";

const findStateByName = async (stateNameString) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/states?filters[name][$contains]=${stateNameString}`
    );

    if (data.data.length === 1) {
      //  console.log(`COUNT IS ONE FOR STATE:${stateNameString}`);

      return { data: { state: data.data[0], confidentMatch: true } };
    } else {
      return {
        data: {
          stateId: `No confident match found for ${stateNameString}`,
          confidentMatch: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findStateByName;
