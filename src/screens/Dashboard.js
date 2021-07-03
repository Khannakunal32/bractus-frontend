import React, { Component } from 'react'
import jwt_decode from "jwt-decode";
import userImage from '../Assets/Images/user.png'
import blog from '../Assets/Images/blog.png'
import settingIcon from '../Assets/Images/gear.png'
import team from '../Assets/Images/team.png'
import admin from '../Assets/Images/admin.png'
import order from '../Assets/Images/order.png'
import cashback from '../Assets/Images/cashback.png'
import logOut from '../Assets/Images/logOut.png'
import presentation from '../Assets/Images/presentation.png'
import loginIMage from '../Assets/Images/login.png'
import mentorship from '../Assets/Images/mentorship.png'
import subscribe from '../Assets/Images/subscribe.png'

import axios from 'axios';
import { Table} from 'react-bootstrap';
class Dashboard extends Component {
   logoutFuncton = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.props.history.push('/')
   
  }
 state={
   showProfile:false,
   admin:false,
   allusers:[],
   package:'',
   paymentStatus:'',
   id:'',
   holder:'',
   bankAcc:'',
   ifsc:'',
   upi:'',
   bank:'',
   teamSize:0,
   allowedTeamSize:0
 }

approveOrderProduct=(id)=>{
  
  axios
  .post(` https://testapis.megahoot.net/api/users/updatePackage`, {
    package: "Paid",
    id:id ,
  })
  .then((res) => {
    const data = res.data
    // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
    if (data.success) {
    
     alert('successfully approved order')
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
.get(`https://testapis.megahoot.net/api/users/`, {
})
.then((res) => {
  const data = res.data
  // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
  if (data.success) {
 
  this.setState({
    allusers:data.data
  });


  data.data.forEach(item=>{
    if(item.id==jwt_decode(localStorage.getItem('token')).result.id){
      this.setState({
         package:item.package,
         paymentStatus:item.status,
         bankAcc:item.bankAcc,
         ifsc:item.ifsc,
         upi:item.upi,
         holder:item.holder,
         bank:item.bank
      })
      // if(this.state.package=='ONE°' || this.state.package=="DEGREE 1"){
      //   this.setState({
      //     allowedTeamSize:5
      //   })
      // }else  if(this.state.package=='TWO°' || this.state.package=="DEGREE 2"){
      //   this.setState({
      //     allowedTeamSize:8
      //   })
      // } else  if(this.state.package=='THREE°' || this.state.package=="DEGREE 3"){
      //   this.setState({
      //     allowedTeamSize:12
      //   })
      // }  else  if(this.state.package=='FOUR' || this.state.package=="DEGREE 4"){
      //   this.setState({
      //     allowedTeamSize:30
      //   })
      // }
    }
 
     
    
})
// data.data.forEach(item=>{
//   if(item.SponsorId==this.state.id){
// this.setState({
//   teamSize:this.state.teamSize + 1
// })
// }
// })

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

 calculateTeamSize=(id,Dpackage)=>{
  axios .post(' https://testapis.megahoot.net/api/users/getDownlineData',{
    id:id
  })
  .then((res)=>{
  // let sponsor_package=  res.data.package[0].package;

  let downline= res.data.data
  this.setState({
    teamSize:res.data.data.length
  })
  if((Dpackage=="ONE°" || Dpackage=="DEGREE 1") &&(downline.length<5) ){

    this.setState({allowedTeamSize:5})
  }else  if((Dpackage=="TWO°" || Dpackage=="DEGREE 2") &&(downline.length<8)){

    this.setState({allowedTeamSize:8})
  }
  else  if((Dpackage=="THREE°" || Dpackage=="DEGREE 3") &&(downline.length<12)){

    this.setState({allowedTeamSize:12})
  }else  if((Dpackage=="FOUR°" || Dpackage=="DEGREE 4") &&(downline.length<15)){

    this.setState({allowedTeamSize:15})
  }

  
   
  })
 }

 componentDidMount=()=>{
   this.getUsers()

  
   if(jwt_decode(localStorage.getItem('token')).result.status=="Paid"){
     this.setState({
       id:jwt_decode(localStorage.getItem('token')).result.id
     })
   }
   this.calculateTeamSize(jwt_decode(localStorage.getItem('token')).result.id,jwt_decode(localStorage.getItem('token')).result.package)
 }

  render() {
  
    if(localStorage.getItem('isLoggedIn')){
      var decoded = jwt_decode(localStorage.getItem('token'));
    
      return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {this.state.showProfile==true?<div className="profile-dispay">
           <p style={{fontSize:'2rem',fontWeight:'bold'}}>Your Profile</p> 
          <h1>Welcome {decoded.result.firstName} {decoded.result.lastName}</h1> 
          <h1>Email: {decoded.result.email}</h1> 
          <h1>Phone: {decoded.result.Phone}</h1> 
          <h1>SponsorId: {decoded.result.SponsorId}</h1> 
          <h1>Your Id: {this.state.id}</h1> 
          <h1>PanCard: {decoded.result.panCard}</h1> 
          <h1>AadharCard: {decoded.result.AadharCard}</h1> 
          <h1>Package: {this.state.package}</h1> 
          <h1>Payment Status: {this.state.paymentStatus}</h1> 
          <h1>Bank: {this.state.bank}</h1> 
          <h1>Bank Account: {this.state.bankAcc}</h1> 
          <h1>IFSC: {this.state.ifsc}</h1>
          <h1>UPI: {this.state.upi}</h1> 
          <h1>Bank Account Holder: {this.state.holder}</h1>  
          <h1>Team Size: {this.state.teamSize}/{this.state.allowedTeamSize}</h1>  
           <button  onClick={()=>{this.setState({showProfile:false})}}>Close</button>
         </div>:<div> <span style={{display:'flex',flexDirection:'column',textAlign:'center'}}><img src={userImage} onClick={()=>{this.setState({showProfile:true})}} className="profile-page-btn"></img>Profile</span></div>
       }
       {decoded.result.email==("maxakash1999@gmail.com")
       ?
       <a href="/Admin485vb98563vb359bv69485658b598cjhfsdfj">  <span style={{display:'flex',flexDirection:'column',textAlign:'center'}}> <img src={admin} className="profile-page-btn" ></img>Admin</span></a>
       :null
       }
      {decoded.result.email==('khannakunal32@gmail.com') 
       ?
       <a href="/Admin485vb98563vb359bv69485658b598cjhfsdfj">  <span style={{display:'flex',flexDirection:'column',textAlign:'center'}}> <img src={admin} className="profile-page-btn" ></img>Admin</span></a>
       :null
       }
   
      
       <span style={{display:'flex',flexDirection:'column',textAlign:'center'}}><img src={order} onClick={()=>{ this.props.history.push('/Packages')}} className="profile-page-btn"></img> Order/Buy</span>
       <a href="/Credit">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={cashback} className="profile-page-btn"></img>Credits</span></a>
      
      

       <a href="/Downline"><span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}>  <img src={team} className="profile-page-btn"></img>Downline</span></a>
       <a href="/publishBlog">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={blog} className="profile-page-btn"></img>Blogs</span></a>
       {localStorage.getItem('isLoggedIn')=='true'? <a href="/RenewSubscriptions">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={subscribe} className="profile-page-btn"></img>Renew Subscription</span></a>
     :null}   
      
       <a href="/CreateCourse">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={presentation} className="profile-page-btn"></img>Create Mentorship</span></a>
       <a href="/UpdateProfile">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={settingIcon} className="profile-page-btn"></img>Update Profile</span></a>
       <a href="/submitBankDetails">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={loginIMage} className="profile-page-btn"></img>Update Bank Details</span></a>
      
       {this.state.paymentStatus=="Paid"? <a href="/kunalMentorship">  <span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}> <img src ={mentorship} alt="Mentorship" className="profile-page-btn"></img>Kunal Khanna's</span></a>
      :null}
       
       {localStorage.getItem('isLoggedIn')=='true'?<span style={{display:'flex',flexDirection:'column',textAlign:'center',color:'black'}}><img src={logOut} id="logOutBtn" onClick={()=>{this.logoutFuncton()}}></img>LogOut</span>:null}   
      
       </div>
        )
    }else{
      return null
    }
    
    

  
  }
}
export default Dashboard