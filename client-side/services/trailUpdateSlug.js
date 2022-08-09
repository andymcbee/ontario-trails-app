import axios from "axios";

const trailUpdateSlug = async (trailId, slugString) => {
  console.log(trailId);
  console.log(slugString);
  try {
    const { data } = await axios.put(
      `http://localhost:1337/api/trails/${trailId}`,
      {
        data: {
          slug: slugString,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default trailUpdateSlug;
