import React from "react";
import video from "../assets/Video.MOV";
import "../components/Home.css";

function Home() {
  return (
    <>
    
    <div className="home-container">
      <video
        className="video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={video}
      >
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
}

export default Home;