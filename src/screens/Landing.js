import React, { useEffect, useState } from "react";

import LazyLoad from "react-lazyload";

import b0 from "../Assets/Images/black.jpg";
import b1 from "../Assets/Images/grey.jpg";
import Aboutus from "./aboutus";
import aboutus from "./aboutus";
import HomeScreen from "./HomeScreen";

export default function Landing() {
  const [showVideo, setShowVideo] = useState(false);

  const style = {
    banner: {
      width: "100%",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
      backgroundImage: `url(${b0})`,
      backgroundSize: "cover",
    },
    button: {
      backgroundColor: "#0e71eb",
      minHeight: "30%",
      color: "#fef0c1",
      width: "150px",
      borderRadius: 15,
      outline: "none",
      margin: 10,
      border: "none",
    },
    banner3: {
      width: "100%",
      zIndex: 1001,
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
      backgroundImage: `url(${b1})`,
      backgroundSize: "cover",
      color: "white",
    },
  };
  return (
    <LazyLoad>
      {" "}
      <div className="landing">
        <div className="banner-home">
          {showVideo ? (
            <iframe
              src="https://www.youtube.com/embed/cM_5GI1hyac"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <div style={{ color: "whitesmoke", fontWeight: "bold" }}>
              <span style={{ fontSize: "3rem" }}>WANT BIG IMPACT?</span>
              <br></br>
              <span style={{ fontSize: "8rem" }}>THINK</span>
              <br></br>
              <span style={{ fontSize: "7rem" }}>BIG.</span>
            </div>
          )}

          <a style={{ outline: "none", border: "none" }}>
            <button
            className="learn-more-btn"
              onClick={() => {
                setShowVideo(!showVideo);
              }}
            >
              Learn More
            </button>
          </a>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        
    
          {/* <LazyLoad>
            <HomeScreen />
          
          </LazyLoad>
           */}
          <Aboutus />
        </div>
      </div>
    </LazyLoad>
  );
}
