import React from "react";
import banner1 from "../Assets/Images/main.jpg";
import user from "../Assets/Images/user.png";
import beauty from "../Assets/Images/beauty.png";
import Iframe from "react-iframe";
export default function PalakBakshi() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#FCD7D1",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "#040C23",
          minHeight: "100vh",
          color: "white",
          border: "5px solid grey",
          backgroundImage: `url(${beauty})`,
        }}
      >
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

                color: "white",
                borderRadius: 10,
                padding: 4,
                fontWeight: "bold",
                fontSize: "20px",
                backgroundColor: "#040c23",
                opacity: "70%",
              }}
            >
              <li>
                <img
                  src={user}
                  style={{ width: "100px", height: "100px" }}
                ></img>
              </li>
              <li>Palak Bakshi</li>
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
                borderRadius: 10,
                backgroundColor: "#040c23",
                opacity: "70%",
              }}
            >
              {" "}
              <li>Makeup Course (Basic)</li>
              <li>Hair Stylish</li>
              {/* <li>Sales</li>
              <li>Digital Marketing</li> */}
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "35vh",
              backgroundImage: `url(${beauty})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 350px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: "50vh" }}
              src="https://www.youtube.com/embed/rBYgQ7asOvs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            
          </div>
          <div
            style={{
              flex: 3,
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              minHeight: "65vh",
              maxWidth: "60%",
              justifyContent: "space-evenly",
              fontWeight: "bold",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <h1>Makeup Course (Basic)</h1>

            <li> Course Duration: 15 days</li>
            <li> Course Description: Makeup Looks to be covered:</li>
            <li> Corporate look (nude eyes)</li>
            <li> Day party look (matte eyes)</li>
            <li> Night party look (glittery eyes)</li>
            <li> Glam look (soft eyes) </li>

            <h2>THEORY: </h2>
            <li> Skin prep</li>
            <li> Good products at cheap price</li>
            <li> Product knowledge</li>
            <li> Eyebrow grooming</li>

            <h2>Breakout of classes:</h2>
            <li>Day 1 to Day 5: Theory</li>
            <li>
              Day 6 to Day 13: Mentioned makeup looks to be covered practically
            </li>
            <li>Day 14 & Day 15: Final examination</li>
            <li> Price: Rs 3000/-</li>
          </div>
        </div>
      </div>
    </div>
  );
}
