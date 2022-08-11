import "../styles/globals.css";
import Header1 from "../components/Header1";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header1 />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
