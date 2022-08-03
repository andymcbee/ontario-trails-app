import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  const router = useRouter();
  const { id, id2 } = router.query;
  return (
    <>
      <div>this is an article number {article.id}</div>

      <div>{article.title}</div>
      <Link href="/">Click to go home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default article;

//paths object needs to look like this:     paths: {params: {id: "1", id: "2"}}
