import axios from "axios";

const findCountryByName = async (countryNameString) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/countries?filters[name][$eq]=${countryNameString}`
    );
    if (data.data.length === 1) {
      console.log(`COUNT IS ONE FOR COUNTRY:${data.data[0].attributes.name}`);
      return { data: { country: data.data[0], confidentMatch: true } };
    } else {
      console.log(
        "MORE THAN ONE OR MISSING COUNTRY PRESENT. FIGURE THIS LOGIC OUT LATER. ZERO ISNT GOOD, MORE THAN 1 ISNT GOOD."
      );
      return {
        data: { countryId: "No confident match found.", confidentMatch: false },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default findCountryByName;
