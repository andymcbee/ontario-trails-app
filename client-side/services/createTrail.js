import axios from "axios";

const createTrail = async (trailData) => {
  console.log("IN CREATE TRAIL FUNC:::::");
  console.log(trailData);

  try {
    await axios.post("http://localhost:1337/api/trails", {
      data: {
        name: "test1",
        country: 1,
        state: 1,
        city: 1,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default createTrail;
