import React from 'react';

const About = () => {
  return (

    <div style={{ width:"70%", 
    height:"80vh",
    margin:"auto", 
    paddingTop:"23vh", 
    textAlign:"left"
}}>

      <h1 >About This Project</h1>

      <div style={{display:"flex", flexDirection:"row" }}>

      <div style={{width:"60%" , fontSize:"1.3rem", fontWeight:"300"}}>

      <p>
        Welcome to my cocktail corner! 🍹 <br/><br/>
        As a cocktail enthusiast, I love experimenting with different ingredients and concocting unique drinks right from the comfort of my home bar.
      </p>
      <p>
        Whether it's crafting classic cocktails like Old Fashioned and Martini, or creating innovative twists with fresh fruits and herbs, mixing drinks is not just a hobby for me, it's a passion.
      </p>
      <p>
      On this website, dedicated to cocktails and web design, I'm excited to share my favorite cocktail recipes alongside my expertise in creating 3D web experiences. Whether you're a seasoned cocktail connoisseur or a beginner looking to elevate your home bartending skills, or even if you're seeking web development services, I hope you'll find inspiration and enjoyment here.
      </p>
      <p>
        So sit back, relax, and join me on a journey through the art of cocktails. <br/>
        Cheers! 🥂
      </p>

      </div>

      <div style={{width:"8%"}}></div>

      <div style={{ width:"30%"}}>
      <img style={{ width:"100%", height:"100%", objectFit: "cover", objectPosition: "35% 0"}} src="./IMG_9949-2.jpg" alt="Lan do the cocktails!" /> 
      </div>
      
    </div>
    </div>
  );
};

export default About;
