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
import Dashboard from './Dashboard';
import Creditn from './creditn';
class Admin extends Component {

 state={
   showProfile:false,
   admin:false,
   allusers:[],
   returnValue:'',
   username: '',
   firstName: '',
   payname:null,
   showcredit:'',
   lastName: '',
   email: '',
   password: '',
   AadharCard:'',
   panCard:'',
   State:'',
   City:'',
   Address:'',
   age:'',
   Phone:'',
   SponsorId:'',
   id:'',
   Degreepackage:'',
   modal:false,
   limit:0,
   showLimit:false
 }


openModal=(id,firstName,lastName,Phone,Degreepackage,email,SponsorId,AadharCard,panCard)=>{
  this.setState({modal:true})
   this.setState({id:id,firstName:firstName,lastName:lastName,Phone:Phone,Degreepackage:Degreepackage,email:email,SponsorId:SponsorId,AadharCard:AadharCard,panCard:panCard})

}

 updateUser = (id) => {
    
  const {
    username,
    firstName,
    lastName,
    Phone,
   AadharCard,
   panCard,
   SponsorId,
   Degreepackage
  
  } = this.state
 if(firstName&&lastName&&Phone){
  axios
  .post(` https://testapi.amaprods.com/api/users/updateUserbyhost`, {
    firstName: firstName,
    lastName: lastName,
    AadharCard:AadharCard,
    panCard:panCard,
    Phone:Phone,
   id:id,
   SponsorId:SponsorId,
   package:Degreepackage
  })
  .then((res) => {
    const data = res.data
    if (!data.success) {
      alert(`${data.message}`)
      this.setState({ userExist: true })
    } else {
   
      this.setState({ userExist: true });

      axios
      .post(` https://testapi.amaprods.com/api/users/updateuserinpaytable`, {
       id:id,
       SponsorId:SponsorId,
       package:Degreepackage
      }).then(()=>{
        alert(`${data.message}`)

      })
      .catch((err)=>{alert(err)})
     
     
    }
  })
  .catch(function (error) {
    console.log(error)
    alert(error)
  })

  
   
   
  }
   else {
  alert('Please Fill all the Fields')
  }




}

approveOrderProduct=(value)=>{
  console.log(value,"sky")
  axios
  .post(` https://testapi.amaprods.com/api/users/updatePackage`, {
  package:value.package,  
  status: "Paid",
  courseId:value.courseId,
    id:value.id ,
  })
  .then((res) => {
    const data = res.data
    // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
    if (data.success) {

     axios
     .post(` https://testapi.amaprods.com/api/users/downlineData`, {
      id:value.id,
      SponsorId:value.SponsorId,
      package:value.package,
      Paid:true
     }).then(()=>{
       alert(`${data.message}`)

     })
     .catch((err)=>{alert("Already Approved or"+" "+ err)})
    
    
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

 getUsers=()=>{
   
axios
.get(`https://testapi.amaprods.com/api/users`, {
})
.then((res) => {
  const data = res.data
  // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
  if (data.success) {
  this.setState({
    allusers:data.data
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
 getPoints=(degree,isPaid,hisPackage)=>{
  if(isPaid=="Paid"){
    if(hisPackage=='DEGREE 1' || hisPackage=='ONE°'){
      if(degree=='DEGREE 1' || degree=='ONE°'){
        return 2000;
        
      
        }else if(degree =='DEGREE 2' || degree=='TWO°'){
          return 2000;
        
      
        }else if(degree=='DEGREE 3' || degree=="THREE°"){
          return 3000;
      
        }
    }else if(hisPackage=='DEGREE 2' || hisPackage=='TWO°'){
      if(degree=='DEGREE 1' || degree=='ONE°'){
        return 2000;
        
      
        }else if(degree =='DEGREE 2' || degree=='TWO°'){
          return 4000;
        
      
        }else if(degree=='DEGREE 3' || degree=="THREE°"){
          return 4000;
      
        }
    }else if(hisPackage=='DEGREE 3' || hisPackage=='THREE°' ){
      if(degree=='DEGREE 1' || degree=='ONE°'){
        return 2000;
        
      
        }else if(degree =='DEGREE 2' || degree=='TWO°'){
          return 4000;
        
      
        }else if(degree=='DEGREE 3' || degree=="THREE°"){
          return 7000;
      
        }

    }

    
  }
 
};
 findUserPayment=(id,isPaid,hisPackage,callback)=>{

  axios 
  .post(' https://testapi.amaprods.com/api/users/payableweekuser',{
    id:id,
  })
  .then((res)=>{
    console.log(res.data.message)
    let hisTotalEarningThisWeek=0
    res.data.message.forEach(e => {
if(e.package){

  hisTotalEarningThisWeek= hisTotalEarningThisWeek+this.getPoints(e.package,isPaid,hisPackage)
 
}
      
    });
    
  axios
  .post(` https://testapi.amaprods.com/api/users/storeMyPay/`, {
    id:id,
    moneyToBePaid:hisTotalEarningThisWeek
  }).then(()=>{
   console.log('Successfully claimed for money')

  })
    callback(hisTotalEarningThisWeek)
  })

// axios 
// .post(' https://testapi.amaprods.com/api/users/showAllPays',{
//   id:id,
// })
// .then((res)=>{
//   console.log(res.data.message[0])
// callback(res.data.message[0].myPayWeek)


// })

 }
 
 approveRenew=(user)=>{
 
   let limit = user.renew
  
   axios .post(`https://testapi.amaprods.com/api/users/allowRenew`,{
     id:user.id,
    //  limit:limit,
     package:limit
   })
   .then(()=>{
     alert('successFully Renewal set')
   })
 }

 paidStyle={
    backgroundColor:'white'
}

unPaidStyle={
    backgroundColor:'red'
}



 componentDidMount=()=>{
     this.getUsers()

     
 }

 paidLastWeek=(id)=>{
  axios 
  .post(' https://testapi.amaprods.com/api/users/paidLastWeek',{
    id:id,
  }).then(()=>{
   alert('Updated SuccessFully')
  }).catch(err=>{alert(err)})
 }
 deleteUser=(id,name)=>{
  axios 
  .delete(' https://testapi.amaprods.com/api/users/',{
    id:id,
  }).then(()=>{
   alert(`${name} deleted Successfully from database`)
  }).catch(err=>{alert(err)})
 }



  render() {
  
    if(localStorage.getItem('isLoggedIn')){
      var decoded = jwt_decode(localStorage.getItem('token'));
    
      return (
        
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {this.state.modal==true?<div>

            <div className="login-screen" style={{width:'100vw'}}>
        <div className="login-form text-center">
        <>
              <h1 style={{color:'#0e71eb'}}>UPDATE PROFILE</h1>
              <label>
                <h4>Id:</h4>

                <input
                  placeholder="Id"
                  type="text"
                  name="name"
                  value={this.state.id}
                  disabled
                  onChange={(e) => this.setState({ id: e.target.value })}
                />
              </label>
              <label>
                <h4>SponsorId:</h4>

                <input
                  placeholder="SponsorId"
                 
                  name="SponsorId"
                  value={this.state.SponsorId}
                
                  onChange={(e) => this.setState({ SponsorId: e.target.value })}
                />
              </label>
              <label>
                <h4>First Name:</h4>

                <input
                  placeholder="Jhon"
                  type="text"
                  name="name"
                  value={this.state.firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                />
              </label>
              <label>
                <h4>Last Name:</h4>

                <input
                  placeholder="Doe"
                  type="text"
                  name="name"
                  value={this.state.lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                />
              </label>
              <label>
                <h4>Phone:</h4>

                <input
                  placeholder="Phone"
                  name="Phone"
                  value={this.state.Phone}
                  onChange={(e) => this.setState({ Phone: e.target.value })}
                />
              </label>
              <label>
                <h4>Email:</h4>

                <input

                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </label>
              <label>
                <h4>Aadhar:</h4>

                <input

                  placeholder="Aadhar"
                  name="AadharCard"
                  value={this.state.AadharCard}
                  onChange={(e) => this.setState({ AadharCard: e.target.value })}
                />
              </label>
              <label>
                <h4>panCard:</h4>

                <input

                  placeholder="panCard"
                  name="panCard"
                  value={this.state.panCard}
                  onChange={(e) => this.setState({ panCard: e.target.value })}
                />
              </label>
          
              <label>
                <h4>Package:</h4>

                <select

                  placeholder="Package"
                  name="package"
                  value={this.state.Degreepackage}
                  onChange={(e) => this.setState({ Degreepackage: e.target.value })}
                >
                  <option style={{backgroundColor:'green',color:'whitesmoke'}}>{this.state.Degreepackage}</option>
                  <option>ONE°</option>
                  <option>TWO°</option>
                  <option>THREE°</option>
                  </select>

              </label>
            
            


              <button className="primary-button" 
               onClick={()=>{this.updateUser(this.state.id)}}
              >
                Update
              </button>
             
            </>
        
        
        </div>
     
      </div>
          </div>:null}
          {this.state.showcredit?<div><h1>pament details of {this.state.payname.firstName}
          <Creditn id={this.state.payname.id} package={this.state.payname.package}   />
          </h1></div>:null}
       
       {decoded.result.email==("maxakash1999@gmail.com") ||('khannakunal32@gmail.com')?
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
      <th>Payment Status</th>
      <th>SponsorId</th>
      <th>Amount To be Paid</th>
      <th>Approve Package</th>
      <th>Paid For Last Week</th>
      <th>update</th>
      <th>Renew</th>
    
    </tr>
    
    
  </thead>

 
  {this.state.allusers && this.state.allusers.length > 0
            ? this.state.allusers.map((value, index) => {
              return (
                <tbody className="userColumn-table"  style={value.status=="Paid"?this.paidStyle:this.unPaidStyle}>
                <tr>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
              
                  <td>{value.id}</td>
            <td>{value.email}</td>
           
            <td>{value.Phone}</td>
            <td>{value.package}</td>
            <td>{value.status}</td>
            <td>{value.SponsorId}</td>
            {/* <td id={value.id}>{this.findUserPayment(value.id,value.status,value.package,(result)=>{document.getElementById(value.id).innerHTML=result})}</td>
             */}
            <button onClick={()=>{this.setState({showcredit:!this.state.showcredit,payname:value})}}>Check Pay</button>
            
            <td><button onClick={()=>this.approveOrderProduct(value)}>Approve Payment</button></td>
              <td>{value.paidLastWeek!=="true"?<button id={value.id+'btn'} onClick={()=>{this.paidLastWeek(value.id)}}>We Paid </button>:<button id={value.id+'btn'} onClick={()=>{this.paidLastWeek(value.id)}}>We Paid </button>}</td>
             <td><button onClick={()=>{this.openModal(value.id,value.firstName,value.lastName,value.Phone,value.package,value.email,value.SponsorId)}}>Update</button></td>
           
     
             <td>{value.renew!=='' && value.renew!=='RENEWED' ?<div><button onClick={()=>{this.setState({showLimit:true});this.approveRenew(value)} }>Approve Renewal</button> 
             </div> :null}</td>
            
              {/* <td><button onClick={()=>{
this.deleteUser(value.id,value.firstName)
              }}>Delete</button></td> */}
                </tr>


               
              </tbody>
                    )
            })
            : null}
       </Table>
      :null}
      
       </div>
        )
    }else{
      return null
    }
    
    

  
  }
}
export default Admin