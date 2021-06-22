import React from 'react'
import Rating from './Rating';
import p1 from '../Assets/Images/product.jpg'
import LazyLoad from 'react-lazyload';

export default function Product(props) {
 const AddToCart=(course,DegreeName)=>{
   localStorage.removeItem('Degree')
    localStorage.setItem("Degree",course)
    localStorage.removeItem('DegreeName')
    localStorage.setItem("DegreeName",DegreeName)
    alert('Added To Cart Successfully');
    window.location.reload()
   
  }

    const {product} = props;
    return (
      <LazyLoad>  <div>
             <div key={product._id} className="card">
              <a >
                <LazyLoad> <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                /></LazyLoad>
               
              </a>
              <div className="card-body">
                <a >
                  <h2>{product.name}</h2>
                  <div className="price">Rs. {product.price}</div>
                </a>
                <button  className="primary block" id="orderBtn" onClick={()=>{AddToCart(product.price,product.name)}} >Add To Cart</button>
             
               {/* <Rating rating={product.rating} numReviews={product.numReviews}  /> */}
                {/* <div className="price">Rs. {product.price}</div> */}
              
              </div>
            </div>
      
        </div>
  </LazyLoad>
        )
}
