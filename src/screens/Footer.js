import React from "react";
import instaicon from "../Assets/Images/instagram.svg";
export default function Footer() {
  return (
    // <div
    // //   style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    // >
   <footer>
          <div className="footer">
            <ul className="footer-ul">
              <h1>Disclaimer</h1>
              <p style={{ lineHeight: "25px", lineBreak: "auto" }}>
                Bractus offers you a beautiful and an organized platform of
                earning while learning through our e-trainings and
                Skill-training based program. We don't charge you any amount to
                be a part of our ecosystem, the amount you may pay for the
                mentors, guidance and the resourses you are getting from
                Bractus.
              </p>
            </ul>
            <ul className="footer-ul">
              <h1>Get In Touch</h1>
              <li>Email: bractusofficial@gmail.com</li>
              {/* <li style={{ lineHeight: "25px", lineBreak: "auto" }}>
                Founder: Kunal Khanna
              </li> */}
              <li>
                Founder's handle: <br></br>
                {/* <a href="https://www.instagram.com/aakash._.bhardwaj/">
                  <img src={instaicon} width="15px" alt="Aakash Bhardwaj"></img>{" "}
                  Aakash Bharadwaj
                </a>{" "}
                <br></br> */}
                <br></br>
                <a href="https://www.instagram.com/_kunal.khanna_/">
                  <img src={instaicon} width="15px" alt="Kunal Khanna"></img>{" "}
                  Kunal khanna
                </a>
                <br></br>
                <br></br>
                <a href="https://khannakunal32.github.io/my-personal-site/">
                  {/* <img src={instaicon} width="15px" alt="Kunal Khanna"></img>{" "} */}
                  Portfolio
                </a>
                <br></br>
                <br></br>
              </li>
            </ul>
            <ul className="footer-ul">
              <h1>Information</h1>
              <li>
                <a href="/FAQS">Terms & Conditions</a>
              </li>
              <li>
                <a href="/RefundPolicy">Refund Policy</a>
              </li>
              <li>
                <a href="/Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/blogs">Bractus Blogs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              2021 Bractus All Rights Reserved{" "}
            </h3>
          </div>
        </footer>
    // </div>
  );
}

