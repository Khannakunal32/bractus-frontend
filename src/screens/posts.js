import React from "react";

export default function Posts() {
  return (
    <div  style={{backgroundColor:'yellow',padding:'20px', display: "flex", maxWidth: "100%",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <li style={{fontSize:'3rem',fontWeight:'bold',backgroundColor:'salmon',textAlign:'center'}}>Title of the blog</li>
        <li style={{fontSize:'1.8rem',fontWeight:'bold',textAlign:'center'}}>Sub-Tile of blog</li>
      </ul>
      <div style={{ display: "flex", maxWidth: "90%",backgroundColor:'red' ,flexWrap:'wrap'}}>
        <ul style={{ flex: "3",backgroundColor:'blue',padding:'10px' }}>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </ul>
        <ul style={{ flex: "1",backgroundColor:'pink' }}>
        <ul><h2>Writer at a glance</h2>
         <ul style={{display:'flex',justifyContent:'space-evenly'}}>
             <li>image</li>
          <li>Name</li></ul>
          <ul style={{display:'flex',justifyContent:'space-evenly'}}><li>Insta</li><li>Mail</li><li>Twitter</li><li>website</li></ul>
       
         
        </ul>
        <hr></hr>
        <li>Category-#</li>
        <li>Published On 20-11-2021</li>
       

        </ul>
      </div>
      <div style={{ display: "flex",justifyContent:'space-evenly',backgroundColor:'red',minWidth:'90%' }}>
        <span>98 Like</span>
        <span>43 Comment</span>
        <span>50 Share</span>
        <span>35 Save</span>
      </div>
    </div>
  );
}
