import { BrowserRouter, Switch, Route, Link, useLocation, withRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Disclaimer from "./screens/Disclaimer";
import FAQS from "./screens/FAQS";
import HomeScreen from "./screens/HomeScreen";
import Landing from "./screens/Landing";
import productScreen from "./screens/productScreen";
import RefundPolicy from "./screens/RefundPolicy";
import Signin from "./screens/Signin";
import logo from "./Assets/Images/logo.png";
import cup from "./Assets/Images/cup.png";
import Admin from "./screens/admin";
import downline from "./screens/downline";
import homeicon from "./Assets/Images/home.png";
import profileIcon from "./Assets/Images/profile.png";
import cart from "./Assets/Images/cart.png";
import credit from "./screens/credit";
import comingsoon from "./screens/comingsoon";
import updateProfile from "./screens/updateProfile";
import submitBankDetails from "./screens/submitBankDetails";
import Payment from "./screens/payment";
import LazyLoad from "react-lazyload";
import instaicon from "./Assets/Images/instagram.svg";
import Aboutus from "./screens/aboutus";
// import KunalKhanna from "./screens/KunalKhanna/KunalKhanna";
import Blogs from "./screens/Blogs";
import posts from "./screens/posts";
import createCourse from "./screens/CreateCourse";
import AvailableCourses from "./screens/availableCourse";
import kunalMentorship from "./screens/kunalMentorship";
import leaderBoard from "./screens/leaderBoard";
import RenewSubscription from "./screens/RenewSubscription";
import AakashBhardwaj from "./screens/AakashBhardwaj";
import { useState } from "react";
import SayashaMahajan from "./screens/SayashaMahajan";
import PalakBakshi from "./screens/PalakBakshi";
import Footer from "./screens/Footer";

export default function Header() {
    return (
        <div className="grid-container">
    
        {/* <Header></Header> */}

        <header style={{ position: "fixed", width: "100%", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {" "}
            <a className="mob-header-item" href="/signin">
              <img
                src={profileIcon}
                alt="BRACTUS"
                width="19px"
                style={{ marginTop: "10px", borderRadius: "20px" }}
              />
            </a>
            <a className="mob-header-item" href="/">
              <img
                src={logo}
                alt="BRACTUS"
                width="60px"
                style={{ marginLeft: "17px" }}
              />
            </a>
            <div
              className="hambergerIcon"
              id="hambergerIconId"
              onClick={() => {
                if (document.getElementById("mobile").style.top == "-110vh") {
                  document.getElementById("hambergerIconId").style.margin =
                    "23px";
                  document.getElementById("mobile").style.top = "0px";
                  document.getElementById("mobile").style.transition = "0.5s";
                  document.getElementById("hamb1").style.transform =
                    "rotate(-50deg)";
                  document.getElementById("hamb2").style.transform =
                    "rotate(50deg)";
                  document.getElementById("hamb2").style.transition = "1s";
                  document.getElementById("hamb1").style.transition = "1s";
                  document.getElementById("hamb1").style.margin = 0;
                  document.getElementById("hamb2").style.margin = 0;
                } else {
                  document.getElementById("hambergerIconId").style.margin =
                    "10px";
                  document.getElementById("mobile").style.top = "-110vh";
                  document.getElementById("mobile").style.transition = "1s";
                  document.getElementById("hamb1").style.transform =
                    "rotate(0deg)";
                  document.getElementById("hamb2").style.transform =
                    "rotate(0deg)";
                  document.getElementById("hamb2").style.transition = "1s";
                  document.getElementById("hamb1").style.transition = "1s";
                  document.getElementById("hamb1").style.margin = "10px";
                  document.getElementById("hamb2").style.margin = "10px";
                }
              }}
            >
              <div
                id="hamb1"
                className="hamb"
                style={{
                  minWidth: "15px",
                  minHeight: "0.01rem",
                  backgroundColor: "grey",
                  margin: "10px",
                }}
              ></div>
              <div
                id="hamb2"
                className="hamb"
                style={{
                  minWidth: "15px",
                  minHeight: "0.01rem",
                  backgroundColor: "grey",
                  margin: "10px",
                }}
              ></div>
            </div>
            <div className="nav-for-mobile" id="mobile">
              {/* <div className="mobile-nav-header">
            <a className="mob-header-item" href="/Packages">
                <img src={cart} alt="BRACTUS" width="30px" />
              </a>
              <a className="mob-header-item"  href="/">
                <img src={logo} alt="BRACTUS" width="70px" />
              </a>
            </div> */}

              <a href="/aboutus">Know Us</a>
              <a href="/KunalKhanna">Kunal's Portfolio</a>
              <a href="/Olorio">Olorio</a>
              <a href="/comingsoon">Events</a>
              <a href="/Packages">Services</a>
              <a href="/leaderBoard">Bulletin-offers</a>
              <a href="/signin">My Account</a>
              {/* <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a> */}
            </div>
          </div>

          <div className="nav-for-desktop">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  href="/"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img width="100px" src={logo}></img>
                  {/* <h1 >BRACTUS</h1> */}
                </a>
                <div className="input-box-search-nav">
                  <img src="https://img.icons8.com/material-outlined/20/000000/search--v2.png" />
                  <input
                    type="search"
                    className="input-box-search-nav"
                    placeholder="Search"
                    // value={searchValue}
                    // onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div>
            {/* <a href="/KunalKhanna">Kunal Khanna</a> */}
              <a href="/aboutus">Know Us</a>
            <a href="/KunalKhanna">Kunal Khanna</a>
              <a href="/Olorio">Olorio</a>
              {/* <a href="/comingsoon">Events</a> */}

              {/* <a href="/leaderBoard">Bulletin-offers</a> */}
              <a href="/signin">
                {/* <img
                style={{ padding: 0, margin: 0 }}
                width="18px"
                src={profileIcon}
              ></img> */}
                Login
              </a>
              {/* <a href="/Packages">
             
              Packages
            </a> */}
              <a href="/signin">
                {/* <img
                style={{ padding: 0, margin: 0 }}
                width="18px"
                src={profileIcon}
              ></img> */}
                SignUp
              </a>
            </div>

            {/* <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a> */}
          </div>
        </header>
        </div>
      
    );
  }
  
