import React from "react";

export default function leaderBoard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="price">Offers of the day!!</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            maxWidth: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            justifyContent: "center",
            border: "1px solid grey",
            padding: "10px",
          }}
        >
          <h3 >Give Away!!!</h3>
          <div className="price">Rs. 2800</div>
          <h2>Requirements:</h2>
          <li>2 degree package and above</li>
          <li>Active in groups (must reply in groups actively)</li>
          <li>Watched the mentorships parts 1 and 2</li>
          <li>Actively working in Bractus</li>
          <p style={{ textAlign: "left" }}>
            {" "}
            Two Prospects are availaible with billing done and their mentors are not yet paid
            they need a new mentor . Their mentor will be chosen as above and are needed to guide
            them about marketing. Mentor will be provided with 1400 each to teach them and train them
            in their team.
          </p>
          <p style={{ textAlign: "left" }}>
            {" "}
            Mentor need to train them for atleast 1 week properly and if the prospects are comfortable and 
            satisfied with you . You will recieve your bonus. 500 will be given in advance. Else you need to 
            refund the whole mentorship price given to you. DM on group i want the offer to avail this.
          </p>
          <h1>Note:Terms and Conditions applied.</h1>
        </div>

        <div
          style={{
            maxWidth: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            justifyContent: "center",
            border: "1px solid grey",
            padding: "10px",
          }}
        >
          <h3>OFFER 2</h3>
          <div className="price">Soon will be available</div>
          <h2>Descriptions/Requirements:</h2>
          <li>Requirements 1</li>
          <li>Requirements 2 </li>
          <li>Requirements 3</li>
          <li>Requirements 4</li>
          <li>Requirements 5</li>
          <p style={{ textAlign: "left" }}>
            {" "}
            Bractus offers you a beautiful and an organized platform of earning
            while learning through our e-trainings and Skill-training based
            program. We don't charge you any amount to be a part of our
            ecosystem, the amount you may pay for the mentors, guidance and the
            resourses you are getting from Bractus.
          </p>
          <h1>Note:All terms and conditions applied</h1>
        </div>
      </div>
    </div>
  );
}
