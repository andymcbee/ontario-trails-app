import axios from "axios";

const findStateByName = async (stateNameString) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/states?filters[name][$contains]=${stateNameString}`
    );

    if (data.data.length === 1) {
      console.log(`COUNT IS ONE FOR STATE:${data.data[0].attributes.name}`);

      return { data: { state: data.data[0], confidentMatch: true } };
    } else {
      console.log(
        "MORE THAN ONE OR MISSING STATE PRESENT. FIGURE THIS LOGIC OUT LATER. ZERO ISNT GOOD, MORE THAN 1 ISNT GOOD."
      );
      return {
        data: { stateId: "No confident match found.", confidentMatch: false },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findStateByName;
