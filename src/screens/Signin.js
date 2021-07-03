import React, { Component } from 'react'
import axios from 'axios'
import loginIMage from '../Assets/Images/login.png'
import { Alert } from 'react-bootstrap'
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'

class Signin extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false,
    userExist: true,
    AadharCard:'',
    panCard:'',
    State:'',
    City:'',
    Address:'',
    age:'',
    Phone:'',
    SponsorId:'',
    isSponsorIdExist:'',
    marketerId:'',
    loading:false
  }



  handleLogIn = () => {
    //user can be moved to dashboard if user is loggedIn
    // this.loaderActive()
    // const { setCurrentUser } = this.props
    // setCurrentUser(null, false)
    // localStorage.removeItem('token')
    this.setState({loading:true})
    const { email, password } = this.state
    axios
      .post(` https://testapis.megahoot.net/api/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        const data = res.data
        // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
        if (data.success) {
          localStorage.removeItem('token');
          localStorage.removeItem('isLoggedIn');
          // setCurrentUser(data.token, isLoggedIn)
          localStorage.setItem('isLoggedIn','true')
          localStorage.setItem('token', JSON.stringify(data.token))
          // remove it while refactoring use asncy and await
          this.props.history.push('/dashboard')
          // if (this.props.currentUser) {
          //   setTimeout(() => {
          //     this.props.history.push('/dashboard')
          //   }, 3000)
          // }
        } else {
          alert('Invalid Username and Password')
          this.setState({
            email: '',
            password: '',
          })
          // this.loaderDeactive()
        }
      })
      .then(()=>{
        this.setState({loading:false})
      })
   
   
      .catch(function (error) {
        this.setState({loading:false})
        console.log(error)
        alert('Invalid User Password')
      })
  }

  handleSignUp = () => {
    this.setState({loading:true})
    const {
      username,
      firstName,
      lastName,
      email,
      confirmPassword,
      password,
      age,
      State,
      City,
      Address,
      Phone,
      SponsorId,
      marketerId
    } = this.state
    if (confirmPassword !== password) {
      alert("Password Do not Match !")
    }else if(username && firstName&&lastName&&email&&confirmPassword&&password&&age&&State&&City&&Address&&Phone&&SponsorId,marketerId ){
      
    //   axios .get(' https://testapis.megahoot.net/api/users/')
    // .then((res)=>{
    //   res.data.data.forEach(element => {
    //     if(element.id==this.state.SponsorId){

         
    //     }
        
    //   });


    //  })
    alert("Before SignUp,Please make sure to read our terms and conditions")
    axios .post(' https://testapis.megahoot.net/api/users/byid',{
      id:SponsorId
    })
    .then((res)=>{
let payData=res.data.message.status
if(payData=="Paid"){
  axios .post(' https://testapis.megahoot.net/api/users/subscriptionDetails',{
    SponsorId:SponsorId
  })
  .then((res)=>{
  let sponsor_package=  res.data.package[0].package;
  // console.log(sponsor_package[0].package,"sky")
  let downline= res.data.data
  if((sponsor_package=="ONE°" || sponsor_package=="DEGREE 1") &&(downline.length<5)){

    this.setState({isSponsorIdExist:true})
  }else  if((sponsor_package=="TWO°" || sponsor_package=="DEGREE 2") &&(downline.length<8)){

    this.setState({isSponsorIdExist:true})
  }
  else  if((sponsor_package=="THREE°" || sponsor_package=="DEGREE 3") &&(downline.length<12)){

    this.setState({isSponsorIdExist:true})
  }else  if((sponsor_package=="FOUR°" || sponsor_package=="DEGREE 4") &&(downline.length<30)){

    this.setState({isSponsorIdExist:true})
  }
   
  })
   .then(()=>{
    if(this.state.isSponsorIdExist){
      axios
      .post(` https://testapis.megahoot.net/api/users/`, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        age: age,
        termsandconditions: 1,
        password: password,
        State:State,
        City:City,
        Address:Address,
        Phone:Phone,
        SponsorId:SponsorId,
        marketerId:marketerId
        
      })
      .then((res) => {
        const data = res.data
        if (!data.success) {
          alert(`${data.message}`)
          this.setState({ userExist: true })
        } else {
          this.setState({ userExist: true })
        }
      })
      .catch(function (error) {
        console.log(error)
        alert('Invalid User Password')
      })

    }else{alert('Invalid Sponsor ID Or Sponsor ID Reached maximum limit')}
   
   })
}else{
 alert('Invalid SponsorId')
}
    })
    .then(()=>{
      this.setState({loading:false})
    })
    .catch((err)=>{
      this.setState({loading:false})
   
    })
 

    
    
     
    }
     else {
    alert('Please Fill all the Fields')
    }




  }


  render() {
    return (
      <div className="login-screen">
        <div className="login-form text-center">
          {this.state.userExist ? (
            <>
            <h1 style={{color:'#0e71eb'}}>SIGN IN NOW</h1>
            <img src={loginIMage} style={{width:'230px'}}  alt="Login"/>
              
              <label>
                <h4>Email:</h4>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="name"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </label>
              <label>
                <h4>Password:</h4>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="name"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </label>

              {this.state.loading ? (
                <div className="loader">
                  {/* <img src={require('./spinner/loader.gif')} alt="loader" /> */}
                </div>
              ) : (
                <button 
                onClick={this.handleLogIn}
                 >
                 
                  Login{' '}
                </button>
              )}
              <span>
                Don't have an account ?{' '}
                <a href="#"
                  onClick={() => this.setState({ userExist: false })}
                >
                  Signup
                </a>
              </span>
            </>
          ) : (
            <>
              <h1 style={{color:'#0e71eb'}}>SIGN UP NOW</h1>
              <img src={loginIMage} style={{width:'150px'}}  alt="Signup"/>
              <label>
                <h4>Username:</h4>

                <input
                  placeholder="jhonDoe"
                  type="text"
                  name="name"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
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
                  placeholder="jhonedoe@example.com"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </label>
              <label>
                <h4>Age:</h4>

                <input
                  placeholder="Age"
            
                  name="age"
                  value={this.state.age}
                  onChange={(e) => this.setState({ age: e.target.value })}
                />
              </label>
              <label>
                
                
                  <h4>SponsorId :</h4>
  
                  <input id="SponsorId"
                    placeholder="SponsorId"
                  
                    name="SponsorId"
                    value={this.state.SponsorId}
                    onChange={(e)=>this.setState({ SponsorId: e.target.value.trim().toUpperCase() })}
                  />
                </label>
                <label>
                
                
                <h4>marketerId :</h4>

                <input id="marketerId"
                  placeholder="marketerId"
                
                  name="marketerId"
                  value={this.state.marketerId}
                  onChange={(e)=>this.setState({ marketerId: e.target.value.trim().toUpperCase() })}
                />
              </label>
                
            
             
            
              <label>
                <h4>State:</h4>

                <input
                  placeholder="State"
               
                  name="State"
                  value={this.state.State}
                  onChange={(e) => this.setState({ State: e.target.value })}
                />
              </label>
              <label>
                <h4>City:</h4>

                <input
                  placeholder="City"
               
                  name="City"
                  value={this.state.City}
                  onChange={(e) => this.setState({ City: e.target.value })}
                />
              </label>
              <label>
                <h4>Address:</h4>

                <input
                  placeholder="Address"
               
                  name="Address"
                  value={this.state.Address}
                  onChange={(e) => this.setState({ Address: e.target.value })}
                />
              </label>
              <label>
                <h4>Password:</h4>
                <input
                  placeholder="Password"
                  type="password"
                  name="name"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value.trim()})}
                />
              </label>
              <label>
                <h4>Confirm Password:</h4>
                <input
                  placeholder="Password"
                  type="text"
                  name="name"
                  value={this.state.confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value.trim() })
                  }
                />
              </label>
{!this.state.loading? <button className="primary-button" 
               onClick={this.handleSignUp}
              >
                Register
              </button>:<div class="loader"></div>}
             
              <span>
                Already have an account ?{' '}
                <a href="#"
                  onClick={() =>
                    this.setState((prevState) => ({
                      userExist: !prevState.check,
                    }))
                  }
                >
                  Login
                </a>
              </span>
              <span style={{fontSize:'1.2rem',fontWeight:'bold',margin:'15px'}}>   By Signing Up to Bractus, I agree To all its
                <a href="Disclaimer" style={{margin:'10px'}}>
               Policies and  T&C
                </a>
              
              </span>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Signin