import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter,
} from "react-router-dom";
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
import KunalKhanna from "./screens/KunalKhanna";
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
import Header from "./Header";

function App(props) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);

    // if (searchValue.toUpperCase() == "KUNA") {
    //   window.location.href = "/kunalMentorship";
    // } else if (searchValue.toUpperCase() == "AAKAS") {
    //   window.location.href = "/webDevelopment";
    // } else
    if (searchValue.toUpperCase() == "WEB") {
      window.location.href = "/webDevelopment";
      // } else if (searchValue.toUpperCase() == "SAYASH") {
      window.location.href = "/SayashaMahajan";
    }
  };
  // location.pathname !== '/KunalKhanna' && <Footer />;
  // let location = useLocation();

  return (
    <BrowserRouter>
      {/* {
      props.location.pathname!=='/login' ? <header/>:null
     } */}
      <div className="grid-container">
        <Header></Header>

        <main>
          <switch>
            {/* <Route path="/KunalKhanna" component={KunalKhanna} exact></Route> */}
            <Route
              path="/KunalKhanna"
              component={() => {
                window.location.href =
                  // "https://khannakunal32.github.io/my-personal-site/";
                  "https://myportfolio-66ca9.web.app/";
                return null;
              }}
            />
            <Route
              path="/Olorio"
              component={() => {
                window.location.href =
                  // "https://khannakunal32.github.io/my-personal-site/";
                  "https://www.olorio.in/";
                return null;
              }}
            />
            <Route
              path="/ChhaviArora"
              component={() => {
                window.location.href =
                  "https://play.google.com/store/apps/details?id=com.project.ocrtextscanner";
                return null;
              }}
            />
            <Route
              path="/graphPathVisualizer"
              component={() => {
                window.location.href =
                  " https://graphpathvisualizer.web.app";
                return null;
              }}
            />

            <Route path="/product/:id" component={productScreen}></Route>
            <Route path="/Packages" component={HomeScreen} exact></Route>
            <Route path="/" component={Landing} exact></Route>
            <Route path="/Credit" component={credit} exact></Route>
            <Route path="/kunalMentorship" component={kunalMentorship}></Route>
            <Route path="/SayashaMahajan" component={SayashaMahajan}></Route>

            <Route path="/webDevelopment" component={AakashBhardwaj}></Route>
            <Route path="/PalakBakshi" component={PalakBakshi}></Route>

            <Route
              path="/Admin485vb98563vb359bv69485658b598cjhfsdfj"
              component={Admin}
            ></Route>

            <Route
              path="/submitBankDetails"
              component={submitBankDetails}
            ></Route>
            <Route path="/Downline" component={downline}></Route>
            <Route path="/leaderBoard" component={leaderBoard}></Route>
            {localStorage.getItem("isLoggedIn") == "true" ? (
              <Route path="/signin" component={Dashboard} exact></Route>
            ) : (
              <Route path="/signin" component={Signin} exact></Route>
            )}

            {localStorage.getItem("isLoggedIn") == "true" ? (
              <Route path="/publishBlog" component={Blogs}></Route>
            ) : null}
            <Route path="/Payment" component={Payment} exact></Route>
            <Route path="/FAQS" component={FAQS} exact></Route>

            <Route path="/comingsoon" component={comingsoon} exact></Route>
            <Route path="/aboutus" component={Aboutus} exact></Route>
            {/* <Route path="/KunalKhanna" component={KunalKhanna} exact></Route> */}

            <Route path="/Disclaimer" component={Disclaimer} exact></Route>
            <Route path="/RefundPolicy" component={RefundPolicy} exact></Route>
            <Route
              path="/updateProfile"
              component={updateProfile}
              exact
            ></Route>
            {/* <Route path="/Signin" component={Signin} exact></Route> */}
            <Route path="/Dashboard" component={Dashboard} exact></Route>
            {/* <Route path="/blogs" component={posts}></Route> */}
            {/* <Route path="/CreateCourse" component={createCourse}></Route> */}
            <Route
              path="/availableCourses"
              component={AvailableCourses}
            ></Route>
            <Route path="/CreateCourse" component={createCourse}></Route>
            <Route
              path="/RenewSubscription"
              component={RenewSubscription}
            ></Route>
          </switch>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
