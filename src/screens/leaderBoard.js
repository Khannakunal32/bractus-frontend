import React from 'react'

export default function leaderBoard() {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
           <p className="price">Offers of the day!!</p> 
           <div style={{display:'flex',justifyContent:'space-evenly'}}>


        <div style={{maxWidth:'350px', display:'flex',flexDirection:'column',alignItems:'center',margin:'10px',justifyContent:'center',border:'1px solid grey',padding:'10px'}}>
           <h3>OFFER 1</h3>
           <div className="price">Rs. 2800</div>
          <h2>Descriptions/Requirements:</h2>
          <li>Requirements 1</li>
          <li>Requirements 2</li>
          <li>Requirements 3</li>
          <li>Requirements 4</li>
          <li>Requirements 5</li>
          <p style={{textAlign:'left'}}> Bractus offers you a beautiful and an organized platform of
                earning while learning through our e-trainings and Skill-training
                based program. We don't charge you any amount to be a part of
                our ecosystem, the amount you may pay for the mentors, guidance and
                the resourses you are getting from Bractus.</p>
                <h1>Note:All terms and conditions applied</h1>
           </div>

           <div style={{maxWidth:'350px',display:'flex',flexDirection:'column',alignItems:'center',margin:'10px',justifyContent:'center',border:'1px solid grey',padding:'10px'}}>
           <h3>OFFER 2</h3>
           <div className="price">Rs. 2800</div>
          <h2>Descriptions/Requirements:</h2>
          <li>Requirements 1</li>
          <li>Requirements 2 </li>
          <li>Requirements 3</li>
          <li>Requirements 4</li>
          <li>Requirements 5</li>
          <p style={{textAlign:'left'}}> Bractus offers you a beautiful and an organized platform of
                earning while learning through our e-trainings and Skill-training
                based program. We don't charge you any amount to be a part of
                our ecosystem, the amount you may pay for the mentors, guidance and
                the resourses you are getting from Bractus.</p>
                <h1>Note:All terms and conditions applied</h1>
         
           </div>
          
           </div>
         
        </div>
    )
}
