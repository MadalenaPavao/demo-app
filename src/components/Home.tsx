import React, { FC , useEffect} from "react";

const Home: FC = () => {

  useEffect(() => {
    console.log("Hello world")
  
  }, [])
  
  return <h1>Hello world</h1>;
};

export default Home;
