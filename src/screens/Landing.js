import React, { useEffect, useState } from "react";

import LazyLoad from "react-lazyload";

import b0 from "../Assets/Images/black.jpg";
import b1 from "../Assets/Images/grey.jpg";
import bannerMain from "../Assets/Images/main.jpg";
import marketing from "../Assets/Images/marketing.jpg";
import finearts from "../Assets/Images/finearts.png";
import coding from "../Assets/Images/coding.jpg";
import beauty from "../Assets/Images/beauty.png";
import contentw from "../Assets/Images/contentw.png";
import Aboutus from "./aboutus";
import aboutus from "./aboutus";
import HomeScreen from "./HomeScreen";

// import { Carousel } from "react-responsive-carousel";

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
        <div style={{ color: "#EEBC27", fontWeight: "bold" }}>
              <span style={{ fontSize: "3rem" }}>WANT BIG IMPACT?</span>
              <br></br>
              <span style={{ fontSize: "5rem" }}>THINK</span>
              <br></br>
              <span style={{ fontSize: "7rem" }}>BIG.</span>
            </div>
          {/* <img src={bannerMain} style={{width:'50%'}}></img> */}
          {/* {showVideo ? (
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
          )} */}

          {/* <a style={{ outline: "none", border: "none" }}>
            <button
            className="learn-more-btn"
              onClick={() => {
                setShowVideo(!showVideo);
              }}
            >
              Learn More
            </button>
          </a> */}
        </div>
        <div style={{margin:'10px',textAlign:'center'}}>   <h1 style={{fontSize:'3rem',fontWeight:'bold',fontFamily:"fantasy"}}>A broad Variety of Vocational Mentorships</h1>
        <h5>Choose from multiple online live mentorship with new additions added every month</h5></div>
     
        <div className="card-course-container">
          <div className="card-course">
            <img src={marketing} style={{ maxWidth: "90%",maxHeight:'200px' }} />
            <h1>Sales&Marketing </h1>
            <li>Course Duration: 14 days</li>
            <li>Course Description</li>
            <li>Price:₹5000/-</li>
            <li>By Kunal Khanna</li>
          </div>
          <div className="card-course">
            <img src={coding}style={{ maxWidth: "90%",maxHeight:'200px' }} />
            <h1>Web Development </h1>
            <li>Course Duration: 30 days</li>
            <li>Course Description</li>
            <li>Price:₹6000/-</li>
            <li>By Aakash Bhardwaj</li>
          </div>
          <div className="card-course">
            <img src={finearts} style={{maxWidth: "90%",maxHeight:'200px' }} />
            <h1>Fine Arts </h1>
            <li>Course Duration: XX days</li>
            <li>Course Description</li>
            <li>Price:₹XXXX/-</li>
            <li>By XXXXX</li>
          </div>
          <div className="card-course">
            <img src={beauty} style={{ maxWidth: "100%" }} />
            <h1>Beauty and Makeup </h1>
            <li>Course Duration: XX days</li>
            <li>Course Description</li>
            <li>Price:₹XXXX/-</li>
            <li>By XXXX</li>
          </div>
          <div className="card-course">
            <img src={contentw} style={{ maxWidth: "100%" }} />
            <h1>Content Writing </h1>
            <li>Course Duration: XX days</li>
            <li>Course Description</li>
            <li>Price:₹XXXX/-</li>
            <li>By XXXX</li>
          </div>
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
