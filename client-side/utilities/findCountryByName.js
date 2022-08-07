import axios from "axios";

const findCountryByName = async (countryNameString) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/countries?filters[name][$eq]=${countryNameString}`
    );
    if (data.data.length === 1) {
      // console.log(`COUNT IS ONE FOR COUNTRY:${countryNameString}`);
      return { data: { country: data.data[0], confidentMatch: true } };
    } else {
      return {
        data: {
          countryId: `No confident match found for ${countryNameString}`,
          confidentMatch: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findCountryByName;
