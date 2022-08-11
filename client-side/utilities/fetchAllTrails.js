import axios from "axios";

const fetchAllTrails = async () => {
  const triggerFetch = async (pageNum) => {
    //Missing functionality: We need to filter by Country Id to decrease amount of duplicate hits.
    // Do after we build into many states and this issues occurs often.
    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/trails?pagination[page]=${pageNum}&pagination[pageSize]=100&populate=%2A`
      );

      if (data.data.length > 0) {
        //    console.log(`COUNT IS ONE FOR CITY:${cityNameString}`);

        return { data: { trails: data.data, error: false } };
      } else {
        return {
          data: {
            message: `No trails found!`,
          },
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
  const data1 = await triggerFetch(1);
  //  console.log(data1.data.trails);
  const array1 = data1.data.trails;
  const data2 = await triggerFetch(2);
  //  console.log(data2);
  const array2 = data1.data.trails;
  const data3 = await triggerFetch(3);
  // console.log(data3);
  const array3 = data1.data.trails;

  const finalArray = array1.concat(array2, array3);
  console.log(finalArray);
  return { data: { trails: finalArray, error: false } };

  // return data1;
};

export default fetchAllTrails;
