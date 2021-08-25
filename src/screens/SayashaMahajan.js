import React from "react";
import banner1 from "../Assets/Images/main.jpg";
import user from "../Assets/Images/user.png";
export default function SayashaMahajan() {
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
              <li>Sayasha Mahajan</li>
             
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
           
           
            
              <li>Marketing</li>
              <li>Lead Generation</li>
              <li>Sales</li>
              <li>Digital Marketing</li>
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
          <div style={{ flex: 3,marginLeft:'100px',display:'flex',flexDirection:'column',minHeight: "65vh",maxWidth:'60%' ,justifyContent:"space-evenly",fontWeight:'bold',alignItems:'left',textAlign:'left'}}>
          <h1>15  Social Media And Business Development</h1>
          <li><iframe width="80%" src="https://www.youtube.com/embed/KJVast37qcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
         <li>This is a course by Sayasha Mahajan which would make you understand,
              implement and use social media in a productive way to generate and
               target potential customers for your business. This would help you to </li>
<li>Achieve branding and marketing goals</li>
<li>Building conversions, </li>
<li>Raising brand awareness and positive brand association</li>
<li>Improving communication and interaction with key audiences</li>
<li>Go step by step through the course along with strategic implementation side by side to yield better results.</li>
          </div>
        </div>
      </div>
    </div>
  );
}
