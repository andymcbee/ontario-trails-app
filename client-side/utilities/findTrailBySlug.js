import axios from "axios";

const findTrailBySlug = async (trailSlugString) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/trails?filters[slug][$eq]=${trailSlugString}`
    );

    if (data.data.length === 0) {
      console.log("SLUG IS UNIQUE");
      return {
        data: {
          slug: trailSlugString,
          unique: true,
        },
      };
    } else {
      return {
        data: {
          message: `${trailSlugString} exists. Cannot create.`,
          unique: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findTrailBySlug;
