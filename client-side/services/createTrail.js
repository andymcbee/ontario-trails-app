import axios from "axios";
import urlifyString from "../utilities/urlifyString";
import trailUpdateSlug from "./trailUpdateSlug";

const createTrail = async (trailData) => {
  console.log("TRAIL DATA:::::::::::");
  console.log(trailData);
  /*   console.log(trailData);
  console.log(trailData.name);

  const urlifiedName = urlifyString(trailData.name);
  console.log(slugWithoutUid);



    console.log("URLIFIED NAME SLUG WITHOUT ID:::::::::::::::");
    console.log(urlifiedName);

    //append urlified name + - + trail id

    const finalSlug = urlifiedName + "-" + trailId;

    console.log("URLIFIED NAME WITH SLUG:::::::::::");
    console.log(finalSlug);

    //trigger find trail by slug w/ the slug
    const result = await findTrailBySlug(finalSlug);
    console.log("IS THE SLUG UNIQUE::::::::");

    console.log(result);

    //if it's unique, update the trail slug */

  try {
    const { data } = await axios.post("http://localhost:1337/api/trails", {
      data: {
        name: trailData.name,
        country: trailData.countryId,
        state: trailData.stateId,
        city: trailData.cityId,
        website: trailData.website,
        category: trailData.category,
        address: trailData.address,
        zip: trailData.zip,
        googleReviewAvg: trailData.googleReviewAvg,
        googleReviewCount: trailData.googleReviewCount,
        googleMapsLink: trailData.googleMapsLink,
      },
    });
    console.log("AFTER THE AXIOS POST::::::::");
    console.log("NEW TRAIL:::");
    console.log(data);

    console.log(`A trail by the name of ${trailData.name} has been created!`);

    //urlify trail name

    const urlifiedName = urlifyString(data.data.attributes.name);
    console.log("URLIFIED NAME without ID:::::::");
    console.log(urlifiedName);

    //append urlified name + - + trail id

    const finalSlug = urlifiedName + "-" + data.data.id;

    console.log("URLIFIED NAME WITH SLUG:::::::::::");
    console.log(finalSlug);

    //update slug

    const finalResult = await trailUpdateSlug(data.data.id, finalSlug);
  } catch (error) {
    console.log(error);
  }
};

export default createTrail;
