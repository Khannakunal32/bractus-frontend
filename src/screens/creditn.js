import { React, useState ,useEffect} from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { Table } from "react-bootstrap";
function Creditn(props) {
  var decoded = props.id;
  var mpackage = props.package

  const [sponsarid, setSponsorid] = useState(decoded);
  const [mentorid, setMentorid] = useState("");
  const [marketerid, setMarketerid] = useState("");
  const [usersdata, setUserData] = useState([]);
  const [coursedata, setCourseData] = useState([]);
  const [packagedetails, setPackageDetails] = useState([]);
  const [income, setTotalIncome] = useState([]);
  const [marketerIncome, setMarketerIncome] = useState([]);
  const [mentorIncome, setMentorIncome] = useState([]);
  const [royality, setRoyality] = useState(0)

  const calculateMentorIncome=()=>{
    var mentorPrice=0;
    axios .post('https://testapis.megahoot.net/api/users/calculateMyMentorIncome',{
      id:decoded})
    .then((res)=>{
  console.log(res,"ttr")
          res.data.data.forEach((course)=>{
    
    
    
            axios .post('https://testapis.megahoot.net/api/users/calculateMyMentorIncome2',{
      courseId:course.courseId
    })
    .then((res)=>{
     
      res.data.data.forEach((user)=>{
        if(user.status=="Paid"){
            let localMentorPrice= course.price *0.7    
        mentorPrice= mentorPrice+localMentorPrice
       setMentorIncome(mentorPrice)
        }
      
      })
     
  
  
      
    })
           
              
              }
            )
          })
    }
    
  
  
  const calculateMarketerIncome=()=>{
    var my_marketer_income = 0;
    axios .post('https://testapis.megahoot.net/api/users/calculateMyMarketerIncome',{
      id:decoded
    })
    .then((res)=>{
    
   
  res.data.data.forEach((user)=>{
    if(user.status=="Paid"){
      console.log(user.courseId)
  axios .post('https://testapis.megahoot.net/api/users/calculateMyMarketerIncome2',{
    courseId:user.courseId
  })
  .then((res)=>{
    console.log(res.data.data)
  res.data.data.forEach((user)=>{
    var localMentorPrice= user.price *(0.2)    
       my_marketer_income= my_marketer_income+localMentorPrice
      //  console.log(my_marketer_income,user.price)
     setMarketerIncome(my_marketer_income)
  })
  })
    }
  
  
  
  
  
  })
  
    })
  }
  
  const calculateRoyalityIncome=()=>{
    var royalityAmount=0;
    axios .post('https://testapis.megahoot.net/api/users/calculateRoyalityIncome',{
      id:decoded
    })
    .then((res)=>{
  res.data.data.forEach((user)=>{
    if(user.status=="Paid"){
       axios .post('https://testapis.megahoot.net/api/users/calculateRoyalityIncome',{
      id:user.id
    })
    .then((res)=>{
      res.data.data.forEach((student)=>{
        axios .post('https://testapis.megahoot.net/api/users/calculateRoyalityIncome2',{
          courseId:student.courseId
        })
        .then((res)=>{
          res.data.data.forEach((money)=>{
         
            var calc_payout=money.price *.1
            if (mpackage =='ONE°' || mpackage =='DEGREE 1' ){
                                 var calc_payout_cut = calc_payout * 0.5
                                    // calc_payout = calc_payout_cut
                                    // mentor_income.push(calc_payout)
                                  royalityAmount= royalityAmount+calc_payout_cut
                                  setRoyality(royalityAmount)
                              
                             }
                          else if(mpackage =='TWO°' || mpackage =='DEGREE 2'    ){
                                var calc_payout_cut = calc_payout * 0.667
                                  // calc_payout = calc_payout_cut
                                  // mentor_income.push(calc_payout) 
                                 
                                  royalityAmount= royalityAmount+calc_payout_cut
                                  setRoyality(royalityAmount)
                                 
                          }
                          else if(mpackage =='THREE°' || mpackage =='DEGREE 3'   ){
                                      
                                    var calc_payout_cut = calc_payout *0.837
                                      //console.log('payment',calc_payout_cut)
                                      // calc_payout = calc_payout_cut
                                    //  mentor_income.push(calc_payout)
                                   
                                //  mentor_income.push(calc_payout) 
                                royalityAmount= royalityAmount+calc_payout_cut
                                setRoyality(royalityAmount)
                              
                                
                                        //  console.log('Royalty income with 3', calc_payout )
                                }
                          else if(mpackage =='FOUR°' || mpackage =='DEGREE 4'   ){ 
                                  // mentor_income.push(calc_payout)
                               
                                  // mentor_income.push(calc_payout) 
                                  royalityAmount= royalityAmount +calc_payout
                                  setRoyality(royalityAmount)
                               
                                  }
            
                           
                        
  
          })
        })
      })
    })
    }
   
  })
    })
  }
  
  
  // const fetchusersdata = (cdata) => {
  //   axios({
  //     method: "post",
  //     url: " https://testapis.megahoot.net/api/users/userdata",
  //     data: {
  //       sponsarid: decoded,
  //       marketerid: decoded,
  //     },
  //   })
  //     .then((response) => {
  //       sendtocalcincome(response.data, cdata);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const fetchpackagedetails = (cdata) => {
  //   axios({
  //     method: "post",
  //     url: " https://testapis.megahoot.net/api/users/package_details",
  //     data: {
  //       sponsarid: decoded,
  //     },
  //   })
  //     .then((response) => setPackageDetails(response.data))
  //     .then(() => {
  //       fetchusersdata(cdata);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const fetchcoursedata = () => {
  //   axios({
  //     method: "post",
  //     url: " https://testapis.megahoot.net/api/users/coursedata",
  //     data: {
  //       mentorid: decoded,
  //     },
  //   })
  //     .then((response) => fetchpackagedetails(response.data))
  //     .then(() => {
  //       if (income == "") {
  //         setTotalIncome("Loading");
  //       }
  //     })

  //     .catch((err) => console.log(err));
  // };

  // const sendtocalcincome = (data, cdata) => {
  //   axios
  //     .post(" https://testapis.megahoot.net/api/users/datainjson", {
  //       usersdata: data,
  //       coursedata: cdata,
  //       marketerid: decoded,
  //       sponsarid: decoded,
  //       package: packagedetails,
  //     })

  //     .then((response) => {
  //       setMentorIncome(response.data.data.Mentor_income);
  //       setMarketerIncome(response.data.data.Marketer_Income);
  //       axios .post(' https://testapis.megahoot.net/api/users/byid',{
  //         id:decoded
  //       })
  //       .then((res)=>{
  //         if(res.data.message.royality!==null){
  //           setRoyality(res.data.message.royality)
  //         }
     
  //       })
  //     })

  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    calculateMentorIncome();
    calculateMarketerIncome();
    calculateRoyalityIncome()
  }, [decoded])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1></h1>
      <div>
        {/*            
            <label>YOUR SPONSOR ID:</label>
            <input type="text" onChange={(e)=> {setSponsorid(e.target.value)}  } /> 
            <br />
            <label>YOUR MARKETER ID:</label> 
            <br />
            <input type="text" onChange={(e)=> {setMarketerid(e.target.value)}  } /> 
              <br />
            <label>YOUR MENTOR ID:</label> 
            
            <input type="text" onChange={(e)=> {setMentorid(e.target.value)}  } />  */}

        <Table striped bordered hover id="userTable">
          <thead>
            <tr>
              <th>Marketer Income</th>
              <th>Mentor Income</th>
              <th>Royality Income</th>
            </tr>
          </thead>

          <tbody className="userColumn-table">
            <tr>
            <td>Rs.{Math.round(marketerIncome)}</td>
              <td>Rs.{Math.round(mentorIncome)}</td>
              <td>Rs.{Math.round(parseInt(royality))}</td>
           
                </tr>


               
              </tbody>
       </Table>
       {/* <button type="submit" onClick={ Caller() }  style={{display:'none'}}>Show My Total Income</button>
               */}

              {/* <h3>TOTAL INCOME:  {Math.round(marketerIncome+mentorIncome+parseInt(royality))}</h3> */}
      </div>
    </div>
  );
}

export default Creditn;
