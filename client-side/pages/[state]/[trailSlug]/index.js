import Link from "next/link";
import fetchAllTrails from "../../../utilities/fetchAllTrails";
import axios from "axios";

const article = ({ trail }) => {
  console.log(trail);
  //console.log(article);
  return (
    <>
      <div>this is an article number {trail.id}</div>

      <div>{trail.id}</div>
      <Link href="/">Click to go home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await axios.get(
    `http://localhost:1337/api/trails?filters[slug][$eq]=${context.params.trailSlug}`
  );

  const trail = await data.data[0];

  return {
    props: {
      trail,
    },
  };
};
export const getStaticPaths = async () => {
  const allTrailsArray = await fetchAllTrails();
  // console.log(allTrailsArray.data.trails);

  //const ids = articles.map((article) => article.id);

  /*   const paths2 = allTrailsArray.data.trails.map((trail) => {
    console.log("TRIGGERED NEW PATHS2 MAP");
    console.log(trail.attributes.slug);
    console.log(trail.attributes.state.data.attributes.name);
  }); */

  const paths3 = allTrailsArray.data.trails.map((trail) => ({
    params: {
      state: trail.attributes.state.data.attributes.name
        .toLowerCase()
        .toString(),
      trailSlug: trail.attributes.slug.toLowerCase().toString(),
    },
  }));

  console.log(paths3);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // console.log(res);

  const articles = await res.json();
  // console.log(articles);

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: { state: id.toString(), trailSlug: id.toString() },
  }));

  //console.log(paths);
  return {
    paths: paths3,
    fallback: false,
  };
};

export default article;

//paths object needs to look like this:     paths: {params: {id: "1", id: "2"}}
