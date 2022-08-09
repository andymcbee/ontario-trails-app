import axios from "axios";

const findTrailByName = async (trailNameString) => {
  //Missing functionality: We need to filter by Country Id to decrease amount of duplicate hits.
  // Do after we build into many states and this issues occurs often.
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/trails?filters[name][$contains]=${trailNameString}`
    );

    console.log("TRAIL BY NAME DATA*********************************");
    console.log(data);

    if (data.data.length === 0) {
      console.log("COUNT === ZERO FIRED (((((((((((((((((((((((((((((((((((");
      return { data: { city: trailNameString, unique: true } };
    } else {
      return {
        data: {
          message: `No confident match found ${trailNameString} ... there seems to be another trail by this name`,
          unique: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findTrailByName;
