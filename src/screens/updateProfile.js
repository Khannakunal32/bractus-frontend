import React, { Component } from 'react'
import axios from 'axios'
import profile from '../Assets/Images/profile.png'
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'
import jwt_decode from "jwt-decode";

class updateProfile extends Component {
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
    id:'',
    disabledInputAad:false,
    disabledInputpan:false,
    loading:false
  }



  handleSignUp = () => {
    this.setState({loading:true})
    const {
      username,
      firstName,
      lastName,
      Phone,
     AadharCard,
     panCard,
     id
    } = this.state
   if(firstName&&lastName&&Phone){
    axios
    .post(` https://testapi.amaprods.com/api/users/updateUsers`, {
      firstName: firstName,
      lastName: lastName,
      AadharCard:AadharCard,
      panCard:panCard,
      Phone:Phone,
     id:id
    })
    .then((res) => {
      const data = res.data
      if (!data.success) {
        alert(`${data.message}`)
        this.setState({ userExist: true })
      } else {
     
        this.setState({ userExist: true })
        alert('Profile Updated Successfully')
        window.location.href="/Dashboard"
      }
    })
    .then(()=>{
      this.setState({loading:false})
    })
    .catch(function (error) {
      this.setState({loading:false})
      console.log(error)
      alert(error)
    })

    
     
     
    }
     else {
    alert('Please Fill all the Fields')
    }




  }
componentDidMount=()=>{
    var decoded = jwt_decode(localStorage.getItem('token'));
    this.setState({
        id:decoded.result.id,
        firstName:decoded.result.firstName,
        lastName:decoded.result.lastName,
        panCard:decoded.result.panCard,
        AadharCard:decoded.result.AadharCard,
        Phone:decoded.result.Phone
    })

    // if(decoded.result.AadharCard!=='' || decoded.result.AadharCard!==null || decoded.result.AadharCard!==undefined){
    //   this.setState({
    //     disabledInputAad:false
    //   })
    // };

    // if(decoded.result.panCard!=='' || decoded.result.panCard!==null || decoded.result.panCard!==undefined){
    //   this.setState({
    //     disabledInputAad:false
    //   })
    // }
   
}

  render() {
    return (
      <div className="login-screen">
        <div className="login-form text-center">
        <>
              <h1 style={{color:'#0e71eb'}}>UPDATE YOUR PROFILE</h1>
              <img src={profile} style={{width:'150px',backgroundColor:'#040c23',borderRadius:'50%'}}  alt="Signup"/>
             
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
                <h4>AadharCard:</h4>

                <input
                disabled={this.state.disabledInputAad}
                  placeholder="AadharCard"
                  name="AadharCard"
                  value={this.state.AadharCard}
                  onChange={(e) => this.setState({ AadharCard: e.target.value })}
                />
              </label> <label>
                <h4>PanCard:</h4>

                <input
                disabled={this.state.disabledInputpan}
                  placeholder="PanCard"
                  name="panCard"
                  value={this.state.panCard}
                  onChange={(e) => this.setState({ panCard: e.target.value })}
                />
              </label>
             
            
            
{!this.state.loading?  <button className="primary-button" 
               onClick={this.handleSignUp}
              >
                Update
              </button>:<div class="loader"></div>}

            
             
            </>
        
        
        </div>
     
      </div>
   
   
   )
  }
}
export default updateProfile