import '../styles/global.css';
import {useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
      router.events.on("routeChangeStart", (url) => {
         console.log("Route is changing");
         setLoading(true)
      });
      router.events.on("routeChangeComplete", (url) => {
         console.log("Route is changed");
         setLoading(false)
      });
  }, []);

  return (
    <>
    {loading && <Loader />}
    <Component {...pageProps} />;
    </>
  );
}
