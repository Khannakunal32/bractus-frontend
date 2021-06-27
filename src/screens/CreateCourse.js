import React, { Component } from 'react'
import axios from 'axios'
import profile from '../Assets/Images/profile.png'
import presentation from '../Assets/Images/presentation.png'
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'
import jwt_decode from "jwt-decode";

class createCourse extends Component {
  state = {
   title:'',
   description:'',
   price:'',
   teaserLink:'',
   coverImage:'',
   id:'',
    loading: false,
    userExist: true,
    Degreepackage:'',
    Duration:""
   
  }



  createCourse = () => {


    const {
      title,
      description,
      price,
      teaserLink,
     coverImage,
     id,
     Degreepackage,
     Duration
    } = this.state
    if(title&&description&&price&&teaserLink&&Duration){
      let priceNum= parseInt(price,10);
         axios .post(`https://testapis.megahoot.net/api/users/mycoursedetails`,{
           id:id
         })
         .then((res)=>{
// console.log(res.data.message.length,"dsfgdhg")
   let mycourseNum=res.data.message.length
   if((Degreepackage=='FOUR°' || Degreepackage=="DEGREE 4") && mycourseNum<4 ){
    if((Degreepackage=='ONE°' || Degreepackage=="DEGREE 1") && (priceNum<=3000) ){
          
      axios
      .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
        title: title,
        description: description,
        price:price,
        teaserLink:teaserLink,
        coverImage:coverImage,
        mentorId:id
      })
      .then((res) => {
        const data = res.data
        if (!data.success) {
          alert(`${data.message}`)
          this.setState({ userExist: true })
        } else {
       
          this.setState({ userExist: true })
          alert('Mentorship Listed Successfully')
          window.location.href="/Dashboard"
        }
      })
      .catch(function (error) {
        console.log(error)
        alert(error)
      })
  
      
       
       
      
       
  }else if((Degreepackage=='TWO°' || Degreepackage=="DEGREE 2") && (priceNum<=5000) ){
    axios
    .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
      title: title,
      description: description,
      price:price,
      teaserLink:teaserLink,
      coverImage:coverImage,
      mentorId:id
    })
    .then((res) => {
      const data = res.data
      if (!data.success) {
        alert(`${data.message}`)
        this.setState({ userExist: true })
      } else {
     
        this.setState({ userExist: true })
        alert('Course Created Successfully')
        window.location.href="/Dashboard"
      }
    })
    .catch(function (error) {
      console.log(error)
      alert(error)
    })
  }
  else  if((Degreepackage=='THREE°' || Degreepackage=="DEGREE 3") && priceNum<=7000 ){
    axios
    .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
      title: title,
      description: description,
      price:price,
      teaserLink:teaserLink,
      coverImage:coverImage,
      mentorId:id
    })
    .then((res) => {
      const data = res.data
      if (!data.success) {
        alert(`${data.message}`)
        this.setState({ userExist: true })
      } else {
     
        this.setState({ userExist: true })
        alert('Course Created Successfully')
        window.location.href="/Dashboard"
      }
    })
    .catch(function (error) {
      console.log(error)
      alert(error)
    })
  }
  else  if((Degreepackage=='FOUR°' || Degreepackage=="DEGREE 4") && priceNum<=30000){
    axios
    .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
      title: title,
      description: description,
      price:price,
      teaserLink:teaserLink,
      coverImage:coverImage,
      mentorId:id,
      Duration:Duration
    })
    .then((res) => {
      const data = res.data
      if (!data.success) {
        alert(`${data.message}`)
        this.setState({ userExist: true })
      } else {
     
        this.setState({ userExist: true })
        alert('Course Created Successfully')
        window.location.href="/Dashboard"
      }
    })
    .catch(function (error) {
      console.log(error)
      alert(error)
    })
  }
  else {
    alert("You Exceeds your max price limit")
    console.log(priceNum,typeof(priceNum),typeof(price),Degreepackage)
  }
     }
     else if((Degreepackage=='THREE°' || Degreepackage=="DEGREE 3") && mycourseNum<3 ){
      if((Degreepackage=='ONE°' || Degreepackage=="DEGREE 1") && (priceNum<=3000) ){
          
        axios
        .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
          title: title,
          description: description,
          price:price,
          teaserLink:teaserLink,
          coverImage:coverImage,
          mentorId:id
        })
        .then((res) => {
          const data = res.data
          if (!data.success) {
            alert(`${data.message}`)
            this.setState({ userExist: true })
          } else {
         
            this.setState({ userExist: true })
            alert('Mentorship Listed Successfully')
            window.location.href="/Dashboard"
          }   
        })
        .catch(function (error) {
          console.log(error)
          alert(error)
        })
    
        
         
         
        
         
    }else if((Degreepackage=='TWO°' || Degreepackage=="DEGREE 2") && (priceNum<=5000) ){
      axios
      .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
        title: title,
        description: description,
        price:price,
        teaserLink:teaserLink,
        coverImage:coverImage,
        mentorId:id
      })
      .then((res) => {
        const data = res.data
        if (!data.success) {
          alert(`${data.message}`)
          this.setState({ userExist: true })
        } else {
       
          this.setState({ userExist: true })
          alert('Course Created Successfully')
          window.location.href="/Dashboard"
        }
      })
      .catch(function (error) {
        console.log(error)
        alert(error)
      })
    }
    else  if((Degreepackage=='THREE°' || Degreepackage=="DEGREE 3") && priceNum<=7000 ){
      axios
      .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
        title: title,
        description: description,
        price:price,
        teaserLink:teaserLink,
        coverImage:coverImage,
        mentorId:id
      })
      .then((res) => {
        const data = res.data
        if (!data.success) {
          alert(`${data.message}`)
          this.setState({ userExist: true })
        } else {
       
          this.setState({ userExist: true })
          alert('Course Created Successfully')
          window.location.href="/Dashboard"
        }
      })
      .catch(function (error) {
        console.log(error)
        alert(error)
      })
    }
    else  if((Degreepackage=='FOUR°' || Degreepackage=="DEGREE 4") && priceNum<=30000){
      axios
      .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
        title: title,
        description: description,
        price:price,
        teaserLink:teaserLink,
        coverImage:coverImage,
        mentorId:id,
        Duration:Duration
      })
      .then((res) => {
        const data = res.data
        if (!data.success) {
          alert(`${data.message}`)
          this.setState({ userExist: true })
        } else {
       
          this.setState({ userExist: true })
          alert('Course Created Successfully')
          window.location.href="/Dashboard"
        }
      })
      .catch(function (error) {
        console.log(error)
        alert(error)
      })
    }
    else {
      alert("You Exceeds your max price limit")
      console.log(priceNum,typeof(priceNum),typeof(price),Degreepackage)
    }
            }
            else if((Degreepackage=='TWO°' || Degreepackage=="DEGREE 2") && mycourseNum<2 ){
              if((Degreepackage=='ONE°' || Degreepackage=="DEGREE 1") && (priceNum<=3000) ){
          
                axios
                .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
                  title: title,
                  description: description,
                  price:price,
                  teaserLink:teaserLink,
                  coverImage:coverImage,
                  mentorId:id
                })
                .then((res) => {
                  const data = res.data
                  if (!data.success) {
                    alert(`${data.message}`)
                    this.setState({ userExist: true })
                  } else {
                 
                    this.setState({ userExist: true })
                    alert('Mentorship Listed Successfully')
                    window.location.href="/Dashboard"
                  }
                })
                .catch(function (error) {
                  console.log(error)
                  alert(error)
                })
            
                
                 
                 
                
                 
            }else if((Degreepackage=='TWO°' || Degreepackage=="DEGREE 2") && (priceNum<=5000) ){
              axios
              .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
                title: title,
                description: description,
                price:price,
                teaserLink:teaserLink,
                coverImage:coverImage,
                mentorId:id
              })
              .then((res) => {
                const data = res.data
                if (!data.success) {
                  alert(`${data.message}`)
                  this.setState({ userExist: true })
                } else {
               
                  this.setState({ userExist: true })
                  alert('Course Created Successfully')
                  window.location.href="/Dashboard"
                }
              })
              .catch(function (error) {
                console.log(error)
                alert(error)
              })
            }
            else  if((Degreepackage=='THREE°' || Degreepackage=="DEGREE 3") && priceNum<=7000 ){
              axios
              .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
                title: title,
                description: description,
                price:price,
                teaserLink:teaserLink,
                coverImage:coverImage,
                mentorId:id
              })
              .then((res) => {
                const data = res.data
                if (!data.success) {
                  alert(`${data.message}`)
                  this.setState({ userExist: true })
                } else {
               
                  this.setState({ userExist: true })
                  alert('Course Created Successfully')
                  window.location.href="/Dashboard"
                }
              })
              .catch(function (error) {
                console.log(error)
                alert(error)
              })
            }
            else  if((Degreepackage=='FOUR°' || Degreepackage=="DEGREE 4") && priceNum<=30000){
              axios
              .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
                title: title,
                description: description,
                price:price,
                teaserLink:teaserLink,
                coverImage:coverImage,
                mentorId:id,
                Duration:Duration
              })
              .then((res) => {
                const data = res.data
                if (!data.success) {
                  alert(`${data.message}`)
                  this.setState({ userExist: true })
                } else {
               
                  this.setState({ userExist: true })
                  alert('Course Created Successfully')
                  window.location.href="/Dashboard"
                }
              })
              .catch(function (error) {
                console.log(error)
                alert(error)
              })
            }
            else {
              alert("You Exceeds your max price limit")
              console.log(priceNum,typeof(priceNum),typeof(price),Degreepackage)
            }
           }
           else if((Degreepackage=='ONE°' || Degreepackage=="DEGREE 1") && mycourseNum<1 ){
            if((Degreepackage=='ONE°' || Degreepackage=="DEGREE 1") && (priceNum<=3000) ){
          
              axios
              .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
                title: title,
                description: description,
                price:price,
                teaserLink:teaserLink,
                coverImage:coverImage,
                mentorId:id
              })
              .then((res) => {
                const data = res.data
                if (!data.success) {
                  alert(`${data.message}`)
                  this.setState({ userExist: true })
                } else {
               
                  this.setState({ userExist: true })
                  alert('Mentorship Listed Successfully')
                  window.location.href="/Dashboard"
                }
              })
              .catch(function (error) {
                console.log(error)
                alert(error)
              })
          
              
               
               
              
               
          }else if((Degreepackage=='TWO°' || Degreepackage=="DEGREE 2") && (priceNum<=5000) ){
            axios
            .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
              title: title,
              description: description,
              price:price,
              teaserLink:teaserLink,
              coverImage:coverImage,
              mentorId:id
            })
            .then((res) => {
              const data = res.data
              if (!data.success) {
                alert(`${data.message}`)
                this.setState({ userExist: true })
              } else {
             
                this.setState({ userExist: true })
                alert('Course Created Successfully')
                window.location.href="/Dashboard"
              }
            })
            .catch(function (error) {
              console.log(error)
              alert(error)
            })
          }
          else  if((Degreepackage=='THREE°' || Degreepackage=="DEGREE 3") && priceNum<=7000 ){
            axios
            .post(` https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
              title: title,
              description: description,
              price:price,
              teaserLink:teaserLink,
              coverImage:coverImage,
              mentorId:id
            })
            .then((res) => {
              const data = res.data
              if (!data.success) {
                alert(`${data.message}`)
                this.setState({ userExist: true })
              } else {
             
                this.setState({ userExist: true })
                alert('Course Created Successfully')
                window.location.href="/Dashboard"
              }
            })
            .catch(function (error) {
              console.log(error)
              alert(error)
            })
          }
          else  if((Degreepackage=='FOUR°' || Degreepackage=="DEGREE 4") && priceNum<=30000){
            axios
            .post(`https://testapis.megahoot.net/api/users/MentorCourseDetail`, {
              title: title,
              description: description,
              price:price,
              teaserLink:teaserLink,
              coverImage:coverImage,
              mentorId:id,
              Duration:Duration
            })
            .then((res) => {
              const data = res.data
              if (!data.success) {
                alert(`${data.message}`)
                this.setState({ userExist: true })
              } else {
             
                this.setState({ userExist: true })
                alert('Course Created Successfully')
                window.location.href="/Dashboard"
              }
            })
            .catch(function (error) {
              console.log(error)
              alert(error)
            })
          }
          else {
            alert("You Exceeds your max price limit")
            console.log(priceNum,typeof(priceNum),typeof(price),Degreepackage)
          }
         }else{
           alert('You Exceeds the maximum Mentorship Limit')
         }

         })
         .catch((error)=>{

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
        Degreepackage:decoded.result.package
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
      <div className="login-screen" style={{ backgroundImage: `url(${presentation})`,backgroundSize: "cover",}}>
        <div className="login-form text-center" style={{backgroundColor:'#0e72eb31'}}  >
        <>
              <h1 style={{color:'black',fontSize:'2.5rem',fontWeight:'bold'}}>Create Your Own Mentorship</h1>
              {/* <img src={presentation} style={{width:'150px',backgroundColor:'#040c23',borderRadius:'50%'}}  alt="Signup"/>
              */}
              <label>
                <h4>Mentorship Title:</h4>

                <input
                  placeholder="Course Title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </label>
              <label>
                <h4>Description:</h4>

                <textarea style={{width:'100%',height:'100px'}}
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </label>
              <label>
                <h4>Price:</h4>

                <input
                  placeholder="Price"
                  name="price"
                  value={this.state.price}
                  onChange={(e) =>
                    this.setState({ price: e.target.value })}
                />
              </label>
             
              <label>
                <h4>Duration:</h4>

                <input
                  placeholder="Duration"
                  name="Duration"
                  value={this.state.Duration}
                  onChange={(e) => this.setState({ Duration: e.target.value })}
                />
              </label>
              <label>
                <h4>Teaser video Link:</h4>

                <input
                  placeholder="Teaser Link"
                  name="teaserLink"
                  value={this.state.teaserLink}
                  onChange={(e) => this.setState({ teaserLink: e.target.value })}
                />
              </label> <label>
                <h4>Cover Image:</h4>

                <input
                disabled={this.state.disabledInputpan}
                  placeholder="Cover Image"
                  name="coverImage"
                  type="file"
                  value={this.state.coverImage}
                  onChange={(e) => this.setState({ coverImage: e.target.value })}
                />
              </label>
             
            
            


              <button className="primary-button" 
               onClick={this.createCourse}
              >
                Create Membership
              </button>
             
            </>
        
        
        </div>
     
      </div>
   
   
   )
  }
}
export default createCourse