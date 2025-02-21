import React, { useEffect } from "react";
import Loader from "../components/loader";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";

function Home() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar />
          <HeroSection />
        </>
      )}
    </>
  );
}

export default Home;
