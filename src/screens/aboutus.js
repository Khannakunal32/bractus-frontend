import React from "react";
import instaicon from '../Assets/Images/instagram.svg'
export default function Aboutus() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <div style={{ padding: "20px", fontSize: "1.7rem" }}>
        {/* <h1
          style={{
            width: "100%",
            backgroundColor: "#000000a8",
            color: "whitesmoke",
            textAlign: "center",
          }}
        >
          HOW AND WHY WE?
        </h1> */}
  <h1 style={{fontSize:'3rem',fontWeight:'bold',fontFamily:"fantasy",textAlign:'center'}}>WANT BIG IMPACT? THINK BIG.</h1>
    
     
        <p style={{ lineHeight: "30px" }}>
          Bractus- " ALL FOR ONE AND ONE FOR ALL"The way bractus practices is
          one of its kind.Solely a platform for sprouting minds, shaping and
          channelising their abilities to earn. New setting for innovation,
          where you, your skills, your tried-and-true workflows.
        </p>
        <p style={{ lineHeight: "30px" }}>
          WHY BRACTUS? Bractus provides competent successors to former ones,
          establishing doom of ideation and space to monetize your interests.
          You comprehend with  some of our most proficient and able mentors in
          field of your curiosities. So when we commenced BRACTUS several of you
          may have admired , "how we pull this off?"
        </p>
        <h5 style={{ textAlign: "center" }}>
          FOR AN INSIGHT DIVE RIGHT INTO THE VISION LENS OF BRACTUS WITH US.
        </h5>

        <h1
          style={{
            width: "100%",
            backgroundColor: "#000000a8",
            color: "whitesmoke",
            textAlign: "center",
          }}
        >
          OUR VISION
        </h1>
        <h5 style={{ textAlign: "center" }}>
          WHY TO WASTE YOUR SKILLS, WHEN THEY CAN LEND YOU FUTURE.
        </h5>
        <hr></hr>
        <p style={{ lineHeight: "30px" }}>
          our budding organisation is simply an epitome of hard work, melded
          with aspiration and perseverance. Its optimistic approach helps many
          acquire their career expectations by brushing their strengths.
          Organisation empowers you with mentors that affiliate your
          inquisitiveness into mind-set, pertaining your skills into precise
          tract and renovating your Idea into ambition. For this bractus
          delivers you extravagant setting, finest tools and top- notch
          resources. Not merely enriching talents, bractus bestows you scope to
          discover, mould your intellect to a perspective and then reap to your
          capabilities. With us lunge into incredible experience of earning with
          your skills, and under adept guidance of some enormous individualities
          ushering you to the corridor of perfect future .
          <h1
           
            className="promoters"
          >
            {/* <span> 
             <a  href="https://www.instagram.com/vanshita._.tuli/"> 
             <img src={instaicon} width="15px" alt="Vanshita Tuli" />
            Vanshita Tuli
            </a></span> */}
           
          </h1>
        
        </p>
      </div>
    </div>
  );
}
