import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data";
import p1 from '../Assets/Images/p1.jpg'
import jwt_decode from "jwt-decode";
import axios from "axios";
export default function productScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  
  const orderProduct=()=>{

var decoded = jwt_decode(localStorage.getItem('token'));

if(decoded.result.status=="Paid"){
 alert('Already purchased an order ')

}else{

  axios
  .post(` https://testapis.megahoot.net/api/users/updatePackage`, {
    package: product.name,
    
    status:'unpaid',
    id:decoded.result.id 
  })
  .then((res) => {
    const data = res.data
    // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
    if (data.success) {
    
     alert('successfully placed order')
    } else {
      alert('Invalid request')
   
      // this.loaderDeactive()
    }
  })
  .catch(function (error) {
    console.log(error)
    alert('connection problem in api')
  })
}

  }

 
  return (
    <div style={{margin:'2rem'}}>
        <Link to="/">Back to Home</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                Rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price :Rs. {product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Rs. {product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                       <span className="danger"> Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                  <button  className="primary block" id="orderBtn" onClick={()=>{orderProduct()}}>Order Now</button>
                 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
