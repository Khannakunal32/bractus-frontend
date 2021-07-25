import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
export default function RenewSubscription() {
  var decoded = jwt_decode(localStorage.getItem("token"));
  const [Id, setId] = useState(decoded.result.id);
  const [packageOrder, setpackageOrder] = useState(decoded.result.package);
  const [Dlimit, setLimit] = useState(0);

  const limitsetHandler=()=>{
    console.log(packageOrder,Dlimit)
    if (packageOrder =="ONE°" || packageOrder =="DEGREE 1") {
        setLimit(5)
        console.log(packageOrder,Dlimit)
      } else if (packageOrder =="TWO°" || packageOrder =="DEGREE 2") {
        setLimit(8)
        console.log(packageOrder,Dlimit)
      } else if (packageOrder =="THREE°" || packageOrder =="DEGREE 3") {
        setLimit(12)
        console.log(packageOrder,Dlimit)
      } else if (packageOrder =="FOUR°" || packageOrder =="DEGREE 4") {
        setLimit(30)
        console.log(packageOrder,Dlimit)
      }
  }
  const renewHandler = () => {
  
    let id = Id;
    let teamLimit=Dlimit
    axios
      .post(`https://testapi.amaprods.com/api/users/renewal`, {
        id: id,
        teamLimit: Dlimit,
      })
      .then(() => {
        alert("Applied for renewal successfully");
      })
      .catch((err) => {
        alert(err, "error");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
      }}
    >
      <div>
        <label>
          <h4>Package:</h4>

          <select
            placeholder="Package"
            name="package"
            value={packageOrder}
            onChange={(e) => {setpackageOrder(e.target.value);limitsetHandler()}}
          >
            <option style={{ backgroundColor: "green", color: "whitesmoke" }}>
              {packageOrder}
            </option>
            <option value="ONE°">ONE°</option>
            <option value="TWO°">TWO°</option>
            <option value="THREE°">THREE°</option>
            <option value="FOUR°">FOUR°</option>
          </select>
        </label>
      </div>
      <button
        onClick={() => {
         
       
          renewHandler();
        }}
      >
        Renew Subscription
      </button>
    </div>
  );
}
