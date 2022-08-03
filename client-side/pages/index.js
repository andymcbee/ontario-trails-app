import React, { useState, useEffect } from "react";
import SearchFilterInterface from "../features/SearchFilterInterface";
import CardWithButtonAndImage from "../components/CardWithButtonAndImage";
import axios from "axios";
import Pagination from "../components/Pagination";
import Head from "next/head";

function Home() {
  const [trailsApiData, setTrailsApiData] = useState([]);
  const [defaultPageNum, setDefaultPageNum] = useState(1);
  const [defaultPageSize, setDefaultPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  //call trails API w/ keyword

  const fetchTrailDataWithKeyword = async (keyword) => {
    console.log(keyword);
    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/trails?filters[name][$contains]=${keyword}&populate=%2A`
      );

      console.log("SEARCH DATA::::");
      console.log(data);
      setTrailsApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //call trails API w/ pagination
  const fetchTrailDataWithPagination = async (pageNum, pageSize) => {
    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/trails?pagination[page]=${pageNum}&pagination[pageSize]=${pageSize}&populate=%2A`
      );
      setTrailsApiData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrailDataWithPagination(defaultPageNum, defaultPageSize);
  }, []);

  const handleSearchQuery = (searchValue) => {
    fetchTrailDataWithKeyword(searchValue);
  };

  const handlePageNext = (currentPage) => {
    fetchTrailDataWithPagination(currentPage + 1, defaultPageSize);
    setCurrentPage(currentPage + 1);
  };

  const handlePageBack = (currentPage) => {
    fetchTrailDataWithPagination(currentPage - 1, defaultPageSize);
    setCurrentPage(currentPage - 1);
  };

  /* useEffect(() => {
    fetchTrailDataWithPagination(defaultPageNum, defaultPageSize);
  }, [defaultPageNum, defaultPageSize]);
 */
  const trailsToShow = trailsApiData.data?.map((trail) => {
    let chipColor;
    //determine chip color
    if (trail.attributes.Difficulty === "Easy") {
      chipColor = "green";
    }

    if (trail.attributes.Difficulty === "Medium") {
      chipColor = "yellow";
    }

    if (trail.attributes.Difficulty === "Hard") {
      chipColor = "red";
    }

    return (
      <div key={trail.id} className="flex justify-center">
        <CardWithButtonAndImage data={trail} chipColor={chipColor} />
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Title Tag</title>
        <meta name="keywords" content="web development programming" />
      </Head>
      <div className="flex justify-center w-full h-full">
        <div className="w-[95%] flex flex-col h-full">
          <div className="text-5xl p-5">Find a trail in Ontario</div>
          <div className="flex justify-center">
            <div className="flex justify-center w-full">
              <div className="bg-slate-100 my-10">
                <SearchFilterInterface handleSearchSubmit={handleSearchQuery} />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[1500px] grid items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {trailsToShow}
            </div>
          </div>
          <div className="p-5 flex justify-center">
            {trailsApiData.meta && (
              <Pagination
                handleClickNext={handlePageNext}
                handleClickBack={handlePageBack}
                paginationData={trailsApiData?.meta}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

/* export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:1337/api/trails?pagination[page]=1&pagination[pageSize]=5&populate=%2A"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}; */

/* const fetchTrailDataWithPagination = async (pageNum, pageSize) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/trails?pagination[page]=${pageNum}&pagination[pageSize]=${pageSize}&populate=%2A`
    );
    setTrailsApiData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}; */

/* 
export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:1337/api/trails?pagination[page]=5&pagination[pageSize]=5&populate=%2A"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}; */
