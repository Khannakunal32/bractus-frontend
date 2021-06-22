import React, { Component } from 'react'
import axios from 'axios'
import loginIMage from '../Assets/Images/login.png'
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'

class Blogs extends Component {
  state = {
   blogTitle:'',
   subTitle:'',
   post:'',
   category:'',
   textColor:'',
   bgColor:''

  }



  handleLogIn = () => {
    //user can be moved to dashboard if user is loggedIn
    // this.loaderActive()
    // const { setCurrentUser } = this.props
    // setCurrentUser(null, false)
    // localStorage.removeItem('token')
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
      .catch(function (error) {
        console.log(error)
        alert('Invalid User Password')
      })
  }

  handleSignUp = () => {
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
      SponsorId
    } = this.state
    if (confirmPassword !== password) {
      alert("Password Do not Match !")
    }else if(username && firstName&&lastName&&email&&confirmPassword&&password&&age&&State&&City&&Address&&Phone&&SponsorId ){
      axios .get(' https://testapis.megahoot.net/api/users/')
    .then((res)=>{
      res.data.data.forEach(element => {
        if(element.id==this.state.SponsorId){
          this.setState({isSponsorIdExist:true})
        }
        
      });


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
          SponsorId:SponsorId
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

      }else{alert('Invalid Sponsor ID')}
     
     })

    
    
     
    }
     else {
    alert('Please Fill all the Fields')
    }




  }


  render() {
    return (
      <div className="login-screen" >
        <div className="blog-container text-center" >
        <>
              <h1 style={{color:'rgb(46, 46, 46)',textAlign:'center',fontSize:'3rem'}}>Express Your thaughts</h1>
              <h1 style={{color:'rgb(85, 85, 85)',textAlign:'center',fontSize:'2rem',borderBottom:'1px solid grey',marginTop:'-2rem'}}>Bractus Blogging</h1>
           
            <span style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',textAlign:'center'}}>  <label>
                <h4>Title:</h4>

                <input
                  placeholder="TITLE"
                  type="text"
                  name="blogTitle"
                  value={this.state.blogTitle}
                  onChange={(e) => this.setState({ blogTitle: e.target.value.toUpperCase() })}
                />
              </label>
              <label>
                <h4>Sub Title:</h4>

                <input
                  placeholder="SUB-TITLE"
                  type="text"
                  name="subTitle"
                  value={this.state.subTitle}
                  onChange={(e) => this.setState({ subTitle: e.target.value.toUpperCase() })}
                />
              </label>
              <label>
         <h4>Category:</h4>
          <select value={this.state.category}    onChange={(e) => this.setState({ category: e.target.value })}>
            <option value="Education">Education</option>
            <option value="Fun">Fun</option>
            <option value="Travel">Travel </option>
            <option value="Music">Music </option>
            <option value="Lifestyle">Lifestyle  </option>
            <option value="Fitness">Fitness  </option>
            <option value="DIY">DIY  </option>
            <option value="Sports">Sports  </option>
            <option value="Bractus">Bractus </option>
            <option value="Others">Others </option>
          </select>
       
        
        </label>
        <label>
              
<h4>Text Color</h4>
              <input
                id="textColor"
                type="color"
               
                value={this.state.textColor}
                onChange={(e) => this.setState({ textColor: e.target.value })}
              />
            
            </label>

            <label>
              
              <h4>Background Color</h4>
                            <input
                              id="textColor"
                              type="color"
                             
                              value={this.state.bgColor}
                              onChange={(e) => this.setState({ bgColor: e.target.value })}
                            />
                         
                          </label>
                           </span>


            
              <label>
                <h4>Post:</h4>

                <textarea
                  placeholder="write yourblogs..."
                  style={{color:this.state.textColor,backgroundColor:this.state.bgColor}}
                  name="Blog"
                  value={this.state.post}
                  onChange={(e) => this.setState({ post: e.target.value })}
                />
              </label>
             
            
              <button className="primary-button" >Publish</button>
             
            
     
            </>
        </div>
      </div>
    )
  }
}
export default Blogs