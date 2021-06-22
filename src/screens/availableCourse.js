import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import loginIMage from "../Assets/Images/login.png";
// import './style/HomePage.css'
// import { setCurrentUser } from '../redux/user/user.actions'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import '../App.css'

class AvailableCourses extends Component {
  state = {
    courses: [],
    id: "",
    mentorId: "",
  };

  getAllCourses = () => {
    axios
      .get(`https://testapis.megahoot.net/api/users/showCourse`)
      .then((res) => {
        const data = res.data;
        const SponsorId = this.state.mentorId;

        // Cookies.set('user', user.payload, { expires: 7 }, { path: '/*' });
        if (data.success) {
          data.data.forEach((item) => {
            // console.log(item,SponsorId)
            if (item.mentorId == SponsorId) {
              this.setState({
                courses: [...this.state.courses, item],
              });

             
            }
          });
        } else {
          alert("Invalid request");

          // this.loaderDeactive()
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("connection problem in api");
      });
  };

  getuserbyid = (id) => {
    // console.log(id);
    axios
      .post(` https://testapis.megahoot.net/api/users/byid`, {
        id: id,
      })
      .then((res) => {
        // console.log(res.data.message.SponsorId);
        // callback(res.data.message.firstName+ " " + res.data.message.lastName)
        this.setState({
          mentorId: res.data.message.SponsorId,
        });
        this.getAllCourses();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  AddToCart = (course, courseId) => {
    localStorage.removeItem("course");
    localStorage.setItem("course", course);
    localStorage.removeItem("courseId");
    localStorage.setItem("courseId", courseId);
    alert("Added To Cart Successfully");
    window.location.reload();
  };

  componentDidMount = () => {
    this.setState({
      id: jwt_decode(localStorage.getItem("token")).result.id,
    });
    this.getuserbyid(jwt_decode(localStorage.getItem("token")).result.id);
  };

  render() {
    var data = this.state.courses;

    return (
      <div>
         {this.state.courses.length == 4 ? (
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[0].title}</h1>

                  <h1>Description:{this.state.courses[0].description}</h1>
                  <h1>Duration:{this.state.courses[0].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[0].teaserLink}</h1>
                  <h1>Price:{this.state.courses[0].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[0].price,
                        this.state.courses[0].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[1].title}</h1>

                  <h1>Description:{this.state.courses[1].description}</h1>
                  <h1>Duration:{this.state.courses[1].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[1].teaserLink}</h1>
                  <h1>Price:{this.state.courses[1].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[1].price,
                        this.state.courses[1].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[2].title}</h1>

                  <h1>Description:{this.state.courses[2].description}</h1>
                  <h1>Duration:{this.state.courses[2].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[2].teaserLink}</h1>
                  <h1>Price:{this.state.courses[2].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[2].price,
                        this.state.courses[2].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[3].title}</h1>

                  <h1>Description:{this.state.courses[3].description}</h1>
                  <h1>Duration:{this.state.courses[3].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[3].teaserLink}</h1>
                  <h1>Price:{this.state.courses[3].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[3].price,
                        this.state.courses[3].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
         
         
          </div>
      
      
      
      ) : null}
        {this.state.courses.length == 3 ? (
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[0].title}</h1>

                  <h1>Description:{this.state.courses[0].description}</h1>
                  <h1>Duration:{this.state.courses[0].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[0].teaserLink}</h1>
                  <h1>Price:{this.state.courses[0].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[0].price,
                        this.state.courses[0].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[1].title}</h1>

                  <h1>Description:{this.state.courses[1].description}</h1>
                  <h1>Duration:{this.state.courses[1].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[1].teaserLink}</h1>
                  <h1>Price:{this.state.courses[1].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[1].price,
                        this.state.courses[1].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[2].title}</h1>

                  <h1>Description:{this.state.courses[2].description}</h1>
                  <h1>Duration:{this.state.courses[2].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[2].teaserLink}</h1>
                  <h1>Price:{this.state.courses[2].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[2].price,
                        this.state.courses[2].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
         
         
          </div>
      
      
      
      ) : null}
       {this.state.courses.length == 2 ? (
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[0].title}</h1>

                  <h1>Description:{this.state.courses[0].description}</h1>
                  <h1>Duration:{this.state.courses[0].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[0].teaserLink}</h1>
                  <h1>Price:{this.state.courses[0].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[0].price,
                        this.state.courses[0].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[1].title}</h1>

                  <h1>Description:{this.state.courses[1].description}</h1>
                  <h1>Duration:{this.state.courses[1].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[1].teaserLink}</h1>
                  <h1>Price:{this.state.courses[1].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[1].price,
                        this.state.courses[1].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          
         
          </div>
      
      
      
      ) : null}
        {this.state.courses.length == 1 ? (
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
            <div
              style={{
               flex:1
              }}
            >
              <div className="card" style={{ padding: "10px" }}>
                {" "}
                <div>
                  <h1>Mentor Id:{this.state.mentorId}</h1>
                  <h1>Mentorship Title:{this.state.courses[0].title}</h1>

                  <h1>Description:{this.state.courses[0].description}</h1>
                  <h1>Duration:{this.state.courses[0].Duration}</h1>
                  <h1>Teaser Link:{this.state.courses[0].teaserLink}</h1>
                  <h1>Price:{this.state.courses[0].price}</h1>
                  <button
                    className="primary block"
                    id="orderBtn"
                    onClick={() =>
                      this.AddToCart(
                        this.state.courses[0].price,
                        this.state.coursesp[0].courseId
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
         
          </div>
      
      
      
      ) : null}
      </div>
    );
  }
}
export default AvailableCourses;
