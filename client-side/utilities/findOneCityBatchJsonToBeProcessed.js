import axios from "axios";

const findOneCityBatchJsonToBeProcessed = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/Cities-jsons?filters[processingComplete][$eq]=false`
    );
    if (data.data.length > 0) {
      return {
        data: {
          singleJsonCityData: data.data[0],
          error: false,
          message: "ok",
        },
      };
    } else {
      return {
        data: {
          singleJsonCityData: null,
          error: true,
          message: "No pending JSON city batches to process found.",
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findOneCityBatchJsonToBeProcessed;
