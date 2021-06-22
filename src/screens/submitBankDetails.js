import React, { Component } from 'react'
import axios from 'axios'
import profile from '../Assets/Images/profile.png'
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'
import jwt_decode from "jwt-decode";

class submitBankDetails extends Component {
  state = {
    name:'',
    IFSC:'',
    ACNUMBER:'',
    CONFIRMACNUMBER:'',
    UPI:'',
    ConfirmUPI:'',
    Bank:'',
    id:''
  }



  onSubmit = () => {
    const {
        name,
        IFSC,
        ACNUMBER,
        UPI,
        Bank,
        ConfirmUPI,
        CONFIRMACNUMBER,
        
    } = this.state

    const myid=jwt_decode(localStorage.getItem('token')).result.id ;
  
      if(name&&IFSC&&ACNUMBER&&UPI&&Bank&&ConfirmUPI&&CONFIRMACNUMBER){
        if(ACNUMBER!==CONFIRMACNUMBER){
          alert('Account Number Do not Match')
        }else if(UPI!==ConfirmUPI){
          alert('UPI Do not Match')
        }else {
          axios
          .post(` https://testapis.megahoot.net/api/users/updateBankDetails`, {
              name:name,
              IFSC:IFSC,
              ACNUMBER:ACNUMBER,
              UPI:UPI,
              Bank:Bank,
             id:myid
          })
          .then((res) => {
            const data = res.data
            if (!data.success) {
              alert(`${data.message}`)
             
            } else {
           
             
              alert('Details Updated Successfully')
              window.location.href="/Dashboard"
            }
          })
          .catch(function (error) {
            console.log(error)
            alert(error)
          })
      
        }
      
        
         
         
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
              <h1 style={{color:'#0e71eb'}}>UPDATE YOUR BANK DETAILS</h1>
        
              <label>
                <h4>Bank:</h4>

                <input
                  placeholder="XYZ Bank"
                  type="text"
                  name="Bank"
                  value={this.state.Bank}
                  onChange={(e) => this.setState({ Bank: e.target.value })}
                />
              </label>
              <label>
                <h4>Owner's Name:</h4>

                <input
                  placeholder="Jhon Doe"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </label>
              <label>
                <h4>Account Number:</h4>

                <input
                  placeholder="777777777"
                  type="password"
                  name="ACNUMBER"
                  value={this.state.ACNUMBER}
                  onChange={(e) => this.setState({ ACNUMBER: e.target.value })}
                />
              </label>
              <label>
                <h4>Confirm Account Number:</h4>

                <input
                  placeholder="7777777777"
                  name="CONFIRMACNUMBER"
                  value={this.state.CONFIRMACNUMBER}
                  onChange={(e) => this.setState({ CONFIRMACNUMBER: e.target.value })}
                />
              </label>
              <label>
                <h4>UPI ID:</h4>

                <input
                  placeholder="XYZ@7878787878"
                  type="password"
                  name="UPI"
                  value={this.state.UPI}
                  onChange={(e) => this.setState({ UPI: e.target.value })}
                />
              </label>
              <label>
                <h4>Confirm UPI ID:</h4>

                <input
                  placeholder="XYZ@7878787878"
                  name="ConfirmUPI"
                  value={this.state.ConfirmUPI}
                  onChange={(e) => this.setState({ ConfirmUPI: e.target.value })}
                />
              </label>
          
              <label>
                <h4>IFSC CODE:</h4>

                <input
                  placeholder="KKBKXYZ787"
                  name="IFSC"
                  value={this.state.IFSC}
                  onChange={(e) => this.setState({ IFSC: e.target.value })}
                />
              </label> 
             
            
            


              <button className="primary-button" 
               onClick={this.onSubmit}
              >
                Update
              </button>
             
            </>
        
        
        </div>
      </div>
   
   
   )
  }
}
export default submitBankDetails