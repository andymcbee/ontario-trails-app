import axios from "axios";

const trails = () => {
  //http://localhost:1337/api/trails?pagination[page]=1&pagination[pageSize]=1000

  const fetchTrailsAndDelete = async (currentPage) => {
    const { data } = await axios.get(
      `http://localhost:1337/api/trails?pagination[page]=${currentPage}&pagination[pageSize]=100`
    );

    return {
      data: {
        trailsArray: data.data,
        pagination: data.meta.pagination,
      },
    };
  };

  const handleClick = async (page) => {
    console.log("Click");
    const fullArray = [];

    const newArray = await fetchTrailsAndDelete(page);
    console.log(newArray.data.trailsArray);
    newArray.data.trailsArray.forEach((element) => {
      console.log(element);
      console.log("TEST");
      axios.delete(`http://localhost:1337/api/trails/${element.id}`);
    });

    console.log(newArray);

    console.log(fullArray);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>DELETE ALL TRAILS</button>
    </div>
  );
};

export default trails;
