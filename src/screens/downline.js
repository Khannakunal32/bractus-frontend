import React, { Component } from 'react'
import jwt_decode from "jwt-decode";
import userImage from '../Assets/Images/user.png'
import team from '../Assets/Images/team.png'
import admin from '../Assets/Images/admin.png'
import order from '../Assets/Images/order.png'
import cashback from '../Assets/Images/cashback.png'
import logOut from '../Assets/Images/logOut.png'
import axios from 'axios';
import { Table} from 'react-bootstrap';
class downline extends Component {

 state={
   showProfile:false,
   admin:false,
   mydownline:[],
   nestedDownline:[],
   randomColor:''
 }


 getUsers=()=>{
   
axios
.get(` https://testapis.megahoot.net/api/users/`, {
})
.then((res) => {
  const data = res.data
  // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
  if (data.success) {
    if(jwt_decode(localStorage.getItem('token')).result.status=="Paid"){
      data.data.forEach(item=>{
   
    if(item.SponsorId==jwt_decode(localStorage.getItem('token')).result.id){
      this.setState({
          mydownline:[...this.state.mydownline,item]
      })
    }
})
    }
  

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


 shownNesteddownline=(id)=>{
   
  axios
  .get(` https://testapis.megahoot.net/api/users/`, {
  })
  .then((res) => {
    const data = res.data
    // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
    if (data.success) {
    data.data.forEach(item=>{
    
      if(item.SponsorId==id){
        console.log(item)
        this.setState({
            nestedDownline:[...this.state.nestedDownline,item]
        })
      }
  })
  
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
  

   createRandomColor=()=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
   this.setState({randomColor:'#'+randomColor})


   }

paidStyle={
    backgroundColor:'white'
}

unPaidStyle={
    backgroundColor:'red'
}

paidStyleNested={
 
 

}

unPaidStyleNested={
  backgroundColor:'green'
}
nestedDownlineStyle={
  backgroundColor:'green'
}


componentDidMount=()=>{
    this.getUsers();
  
}




  render() {
  
    if(localStorage.getItem('isLoggedIn')){
      var decoded = jwt_decode(localStorage.getItem('token'));
    
      return (
        <div style={{width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
      
       <Table  striped bordered hover id="userTable"
       
       >
        

  <thead>

 
    <tr>
   
      <th>First Name</th>
      <th>Last Name</th>
      <th>Id</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Package</th>
      <th>Payment</th>
      <th>SponsorId</th>
      
    </tr>
    
    
  </thead>
 
  {this.state.mydownline && this.state.mydownline.length > 0
            ? this.state.mydownline.map((value, index) => {
              return (
               
                <tbody key={index} className="userColumn-table"  style={value.status=="Paid"?this.paidStyle:this.unPaidStyle}>
                <tr>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
              
                  <td>{value.id}</td>
            <td>{value.email}</td>
           
            <td>{value.Phone}</td>
            <td>{value.package}</td>

            
            <td>{value.status}</td>
           
            <td>{value.SponsorId}</td>
            <td><button onClick={()=>{this.shownNesteddownline(value.id);this.createRandomColor()}}>{value.firstName} downline</button></td>
         
                </tr>
               
              </tbody>
                    )
            })
            : null}

{this.state.nestedDownline && this.state.nestedDownline.length > 0
            ? this.state.nestedDownline.map((value, index) => {
              return (
               <tbody key={index}  className="userColumn-table" style={{backgroundColor:this.state.randomColor}}>
                <tr>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
              
                  <td>{value.id}</td>
            <td>{value.email}</td>
           
            <td>{value.Phone}</td>
            <td>{value.package}</td>

            
            <td>{value.status}</td>
           
            <td>{value.SponsorId}</td>
            <td><button onClick={()=>{this.shownNesteddownline(value.id);this.createRandomColor()}}>{value.firstName} downline</button></td>
         
                </tr>
               
              </tbody>
                
               
                  )
            })
            : null}

       </Table>
   
      
      

       </div>
        )
    }else{
      return null
    }
    
    

  
  }
}
export default downline