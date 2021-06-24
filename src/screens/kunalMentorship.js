import React from 'react'

export default function kunalMentorship() {
    return (
        <div style={{display:'flex',flexDirection:'column',maxWidth:'100vw',alignItems:'center',justifyContent:'center'}} >
          <h1>Kunal Khanna's Mentorship</h1>  
        
          <iframe className="mentorship-teaser"
              src="https://www.youtube.com/embed/cM_5GI1hyac"
              title="Kunal's Mentorship"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1>Description</h1>
            <div style={{maxWidth:'35%',textAlign:'left',lineHeight:'25px'}}><p>Bractus offers you a beautiful and an organized platform of earning while learning through our e-trainings and Skill-training based program. We don't charge you any amount to be a part of our ecosystem, the amount you may pay for the mentors, guidance and the resourses you are getting from Bractus.</p></div>
            <h1>Task:Day 1</h1>
            <div style={{maxWidth:'35%',textAlign:'left',lineHeight:'25px'}}>
              <p>Task for the day 1 is folowing:</p>
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
              </div>
              <h1>Note: Please make sure to obey rules</h1>
              
        </div>
    )
}
