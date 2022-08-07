import axios from "axios";
import findCountryByName from "../utilities/findCountryByName";
import findStateByName from "../utilities/findStateByName";
import findCityByName from "../utilities/findCityByName";

const trails = () => {
  const handleClick = async () => {
    console.log("CLICKED");
    console.log("test");

    // find all countries filtered by name, return the id.

    /*     const fetchCountryId = async (countryNameInput) => {
      try {
        const { data } = await axios.get(
          `http://localhost:1337/api/countries?filters[name][$contains]=${countryNameInput}`
        );
        if (data.data.length === 1) {
          console.log(
            `COUNT IS ONE FOR COUNTRY:${data.data[0].attributes.name}`
          );
          return data.data[0].id;
        } else {
          console.log(
            "MORE THAN ONE OR MISSING COUNTRY PRESENT. FIGURE THIS LOGIC OUT LATER. ZERO ISNT GOOD, MORE THAN 1 ISNT GOOD."
          );
        }
      } catch (error) {
        console.log(error);
      }
    }; */

    /*   const countryId = await fetchCountryId("Canada");
    console.log(countryId); */

    /*  const fetchStateId = async (stateNameInput, countryId) => {
      try {
        const { data } = await axios.get(
          `http://localhost:1337/api/states?filters[name][$contains]=${stateNameInput}`
        ); */
    /*  console.log("CHECK IF RAN");
        console.log("State obj:::");
        console.log(data);
        const stateId = data.data[0].id;
        console.log(`state id: ${stateId}`);
        const stateName = data.data[0].attributes.name;
        console.log(`state name: ${stateName}`);
        console.log(data.data.length); */
    /*         if (data.data.length === 1) {
          console.log(`COUNT IS ONE FOR STATE:${data.data[0].attributes.name}`);
          return data.data[0].id;
        } else {
          console.log(
            "MORE THAN ONE OR MISSING STATE PRESENT. FIGURE THIS LOGIC OUT LATER. ZERO ISNT GOOD, MORE THAN 1 ISNT GOOD."
          );
        }

        return data;
      } catch (error) {
        console.log(error);
      }
    }; */

    /*    const stateId = await fetchStateId("Ontario", 1);
    console.log(stateId); */

    /* const cityId = await fetchCityId("Cobourg", 1);
    console.log(cityId); */

    //trigger the flow to check
    //pass in OBJ containing all provided data to start
    //then trigger each func above, passing in the respective item.
    //be sure to only trigger next one if it = 1 result... or maybe return an obj of data + "good?" status
    //if everything passes, then trigger the create one...

    const userInputTrail = {
      city: "Cobourg",
      state: "Ontario",
      country: "Canada",
      trailName: "Lakeridge View Trail",
    };

    const attemptCreateNewTrail = async (inputTrailData) => {
      const { city, state, country, trailName } = inputTrailData;
      console.log(inputTrailData);
      const countryData = await findCountryByName(country);
      console.log(countryData);
      //RETURN SOME SORT OF STATUS... AND IF COUNT IS ZERO OR MORE THAN ONE, DO NOT CONTINUE
      const stateData = await findStateByName(
        state,
        countryData.data.country.id
      );
      console.log(stateData);
      //RETURN SOME SORT OF STATUS... AND IF COUNT IS ZERO OR MORE THAN ONE, DO NOT CONTINUE

      const cityData = await findCityByName(city, stateData.data.state.id);
      console.log(cityData);
      //RETURN SOME SORT OF STATUS... AND IF COUNT IS ZERO OR MORE THAN ONE, DO NOT CONTINUE

      // if all above pass, then do a createTrail call (the ACTUAL call) and create the DB item with
      //dat relevant data.
    };

    const finalResult = attemptCreateNewTrail(userInputTrail);

    //http://localhost:1337/api/trails

    const config = {
      //  headers: { Authorization: `Bearer ${jwtToken}` },
    };

    const createTrail = async (trail) => {
      console.log(trail);
      console.log(trail.Trailname);
      const { trailName, City, FIELD4 } = trail;

      //Look up ID for each city, state and country
      //If none exists, create it but also flag it for review.

      //manage the slug
      //create the slug... then pass it in the body as slug:

      const body = {
        data: {
          name: trailName,
        },
      };

      try {
        const { data } = await axios.post(
          "http://localhost:1337/api/trails",
          body
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    };

    //Fetch JSON data from Strapi and return array of trails.
    //Provide the JSON ID here into the func - it does NOT return
    //all jsons.
    /*  const myData = await createTrail();
    console.log(myData); */

    const fetchJson = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:1337/api/trails-jsons/1"
        );

        return data.data.attributes.trailsdata;
      } catch (error) {
        console.log(error);
      }
    };

    //****UNCOMMENT THIS OUT  const arrayOfTrailsData = await fetchJson();
    // console.log(arrayOfTrailsData);

    // create new trails in DB
    //pass in an array of objects that contain all trail data

    //pass in an array of trails
    //map through the array and for each item create a trail

    const createNewTrails = (arrayOfTrailsData) => {
      const createNewTrail = arrayOfTrailsData.map(async (trail) => {
        const myData = await createTrail(trail);
      });
    };

    //****UNCOMMENT THIS OUT  const createTrailsRes = await createNewTrails(arrayOfTrailsData);
  };

  /*     try {
      const response = await axios
        .post("http://localhost:1337/api/trails", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
      console.warn(response.data);
    } catch (error) {
      console.warn(error);
    } */

  /* 








    try {
      const res = await axios.post(
        "http://localhost:1337/api/trails",
        body: JSON.stringify(body),
        null
      );

      const test = await myData.json();

      console.log(test);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default trails;

/* //get data
const res = await fetch(`http://localhost:1337/api/trails`);

const article = await res.json();

console.log(article); */
