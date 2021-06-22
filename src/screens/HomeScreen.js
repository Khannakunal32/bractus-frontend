import React, { useEffect } from "react";
import Product from "../components/Product";
import data from "../data";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import AvailableCourses from "./availableCourse";
import jwt_decode from "jwt-decode";
import axios from "axios";
export default function HomeScreen() {
  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, error,} = productList;
  const products = data.products;
  // if (!products) {
  //   return <div>Product Not Found</div>;
  // }
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, []);
  const orderProduct = () => {
    var decoded = jwt_decode(localStorage.getItem("token"));
let cd=localStorage.getItem("course")
let pd =localStorage.getItem("Degree")
    if (decoded.result.status == "Paid" ) {
      alert("Already purchased an order ");
    }else if(cd==null){
      alert("Plase select the Mentorship");
    }else if(pd==null){
      alert("Plase select the degree");
    }
    else {
    
      let productName = localStorage.getItem("DegreeName");
      let courseId = localStorage.getItem("courseId");
      let myid = decoded.result.id;
      console.log(courseId, "courseId");
      axios
        .post(` https://testapis.megahoot.net/api/users/updatePackage`, {
          package: productName,
          courseId: courseId,
          status: "unpaid",
          id: myid,
        })
        .then((res) => {
          const data = res.data;
          // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
          if (data.success) {
            alert("successfully placed order");
          } else {
            alert("Invalid request");

            // this.loaderDeactive()
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("connection problem in api");
        });
    }
  };
  return (
    // <div>
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (

    //   )}
    // </div>
    <div style={{ backgroundImage: "radial-gradient(white,#040c23c2)" }}>
      <div>
        {/* <h1
            style={{
            
              width: "100%",
              backgroundColor: "#000000a8",
              color: "whitesmoke",
              textAlign: "center",
            }}
          >
            OUR SERVICES
          </h1> */}

        <AvailableCourses />
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div
          className="card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {" "}
          <h2>Mentorship:{localStorage.getItem("course")} </h2>
          <h2>
            Degree{localStorage.getItem("DegreeName")}:
            {localStorage.getItem("Degree")}{" "}
          </h2>
          <h1>
            {" "}
            Total:
            {parseInt(localStorage.getItem("course"), 10) +
              parseInt(localStorage.getItem("Degree"), 10)}
          </h1>
          <button
            className="primary block"
            id="orderBtn"
            onClick={() => {
              orderProduct();
            }}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}
