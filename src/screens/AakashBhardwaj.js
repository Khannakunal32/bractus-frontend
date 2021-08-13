import React from "react";
import banner1 from "../Assets/Images/webd.jpg";
import user from "../Assets/Images/user.png";
export default function AakashBhardwaj() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ flex: 1, backgroundColor: "#040C23", minHeight: "100vh",color:'white',  border: "5px solid grey", }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              flex: 1,
              minHeight: "35vh",
             
            
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
                border: "1px solid grey",
                color:'white',
                borderRadius:10,
                padding:4
              }}
            >
              <li>
                <img
                  src={user}
                  style={{ width: "100px", height: "100px" }}
                ></img>
              </li>
              <li>Aakash Bhardwaj</li>
              <li>Founder Bractus</li>
            </ul>
          </div>
          <div
            style={{
              flex: 3,
           
              minHeight: "65vh",
            }}
          >
            <ul
              style={{
                margin: 5,
                padding: 3,    
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius:10
              
              }}
            >
              {" "}
           
           
              <li>Head Instructor</li>
              <li>Technology & webDevelopment</li>
              <li>Mentored 2000+ students </li>
              <li>Contact:</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Mail:</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ flex: 3, minHeight: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              flex: 1,
            
              minHeight: "35vh",
              backgroundImage: `url(${banner1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 350px",
            }}
          ></div>
          <div style={{ flex: 3,display:'flex',flexDirection:'column',minHeight: "65vh" ,justifyContent:"space-evenly",fontWeight:'bold',alignItems:'center',textAlign:'center'}}>
          <h1>30 days Web development Plan</h1>
          <li>HTML & CSS (7 days)</li>
          <li>JAVASCRIPT (7 days)</li>
          <li>REACT.JS (7 days)</li>
          <li>NODE.JS (7 days)</li>
          <h2>Extra Bonus</h2>
          <li>APIS AND DATABASE</li>
          <li>LIVE PROJECTS </li>
          <li>FREELANCING TIPS AND ROADMAP</li>
          <li>WHAT TO AFTER THIS COURSE</li>
          <li>FURTHER TECHNOLOGY AND LEARNINGS</li>
          </div>
        </div>
      </div>
    </div>
  );
}
