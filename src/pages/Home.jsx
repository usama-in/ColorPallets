import React from "react";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate()
  const handleClick=()=>{
    navigate('/album')
  }
  return (
    <div className={classes.container}>
      <div className={classes.text}></div>
      Welcome to <span className={classes.ani}></span>
      <section>
        <button onClick={handleClick}>Get Albums from Api</button>
      </section>
    </div>
  );
};

export default Home;
