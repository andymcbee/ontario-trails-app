import axios from "axios";

const findOneTrailBatchJsonToBeProcessed = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/Trails-jsons?filters[processingComplete][$eq]=false`
    );
    if (data.data.length > 0) {
      return {
        data: {
          singleJsonTrailData: data.data[0],
          error: false,
          message: "ok",
        },
      };
    } else {
      return {
        data: {
          singleJsonTrailData: null,
          error: true,
          message: "No pending JSON trail batches to process found.",
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findOneTrailBatchJsonToBeProcessed;
