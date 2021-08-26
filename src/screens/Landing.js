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
import logo from "../Assets/Images/logob.png";
import socialmediamarketing from "../Assets/Images/social-media-marketing.png";
import palak_video from "../Assets/video/palak.webm"
import pragya_video from "../Assets/video/pragya.MOV"
import { Link } from "react-router-dom";


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
      <div className="landing" style={{paddingTop: 60}} >
        {/* <div className="banner-home">
          {/* <div style={{ color: "#EEBC27", fontWeight: "bold" }}>
              <span style={{ fontSize: "3rem" }}>WANT BIG IMPACT?</span>
              <br></br>
              <span style={{ fontSize: "8rem" }}>THINK</span>
              <br></br>
              <span style={{ fontSize: "7rem" }}>BIG.</span>
            </div> */}
        {/* <span
            style={{
              width: "400px",
              height: "400px",
              padding: "50px",
              minWidth: "250px",
              position: "absolute",
              right: "50px",
              backgroundColor: "#040c23",
              borderRadius: "50%",
            }}
          >
            {" "}
            <img
              src={logo}
              style={{
                marginTop: "70px",
                width: "400px",
                height: "auto",
                minWidth: "250px",
              }}
            ></img>
          </span> */}{" "}
        
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
        {/* </div> */}
        <div style={{ margin: "10px", textAlign: "center" }}>
          {" "}
         
         
         
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "fantasy",
            }}
          >
            A broad Variety of Vocational Mentorships
          </h1>
          <h5>
            Choose from multiple online live mentorship with new additions added
            every month
          </h5>
        </div>
        <div className="card-course-container" style={{marginBlockEnd: 100}}>
          <Link to="/kunalMentorship"> <div className="card-course">
            <img
              src={marketing}
              style={{ maxWidth: "90%", maxHeight: "200px" }}
            />
            <h1>Sales&Marketing </h1>
            <li>Duration: 14 days</li>
            <li>Description</li>
            {/* <li>Price:₹4000/-</li> */}
            <li>By Kunal Khanna</li>
          </div></Link>
          <Link to="/webDevelopment"> <div className="card-course">
            <img src={coding} style={{ maxWidth: "90%", maxHeight: "200px" }} />
            <h1>Web Development </h1>
            <li>Duration: 30 days</li>
            <li>Description</li>
            {/* <li>Price:₹5000/-</li> */}
            <li>By Aakash Bhardwaj</li>
          </div></Link>
         
         
          <Link to="/SayashaMahajan"> <div className="card-course">
            <img
              src={socialmediamarketing}
              style={{ maxWidth: "90%", maxHeight: "200px" }}
            />
            <h1>Social Media And Business Development </h1>
            <li>Duration: 15 days</li>
            <li>Description</li>
            {/* <li>Price:₹3000/-</li> */}
            <li>By Sayasha Mahajan</li>
          </div></Link>
         <Link to="/PalakBakshi">
         <div className="card-course">
            <img src={beauty} style={{ maxWidth: "100%" }} />
            <h1>Beauty and Makeup </h1>
            <li>Duration: 30 days</li>
            <li>Description</li>
            {/* <li>Price:₹6000/-</li> */}
            <li>By Palak Bakshi </li>
          </div>
         </Link>
         
          <div className="card-course">
            <img
              src={finearts}
              style={{ maxWidth: "90%", maxHeight: "200px" }}
            />
            <h1>Fine Arts </h1>
            <li>Duration: 20 days</li>
            <li>Description</li>
            {/* <li>Price:₹3000/-</li> */}
            {/* <li>By XXXXX</li> */}
          </div>
       
          <div className="card-course">
            <img src={contentw} style={{ width: "100%", height: 200}} />
            <h1>Content Writing </h1>
            <li>Duration: 20 days</li>
            <li>Description</li>
            {/* <li>Price:₹4000/-</li> */}
            {/* <li>By XXXX</li> */}
          </div>
          
        </div><h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "fantasy",
              textAlign:'center',
              color:'red'
            }}
          >
            Our Top Mentors Live
          </h1>
        <div onContextMenu={(e)=>{e.preventDefault();}}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap:'wrap',
            backgroundColor:'#040C23',
            justifyContent:'center',


          }}
        >
          {/* <LazyLoad>
            <HomeScreen />
          
          </LazyLoad>
           */} 
         <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} 
         muted src="https://www.youtube.com/embed/cM_5GI1hyac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} muted 
         src="https://www.youtube.com/embed/ZlvuUJbfOrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
       <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} muted 
         src="https://www.youtube.com/embed/w0-WaSHzBKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
       <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} muted 
         src="https://www.youtube.com/embed/KJVast37qcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} muted 
         src="https://www.youtube.com/embed/KsEH3KUMQaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="350" height="190" 
         style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} muted 
         src="https://www.youtube.com/embed/o7skAG6QKmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
           {/* <LazyLoad>
           
         
           
           <video width="350" height="200" style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} 
          src={sky_video} 
          title="Aakash bhardwaj" 
        autoPlay
           loop
           muted
         allowfullscreen></video></LazyLoad>   */}
          <LazyLoad>  <video width="350" height="200" style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} 
          src={palak_video} 
          title="Palak bakshi" 
        autoPlay
           loop
           muted
         allowfullscreen></video></LazyLoad>  
           <LazyLoad> <video width="350" height="200" style={{margin:'10px',borderRadius:'10px',border:'1px solid white'}} 
          src={pragya_video} 
          title="Pragya" 
        autoPlay
           loop
           muted
         allowfullscreen></video></LazyLoad>  
        
        </div>
        <Aboutus />
      </div>
    </LazyLoad>
  );
}
