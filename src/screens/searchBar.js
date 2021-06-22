import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data";

export default function searchBar(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      
      <input type="search" placeholder="search" ></input>
    </div>
  );
}
