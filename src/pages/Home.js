import "../App.css";
import Scene from "../Scene";
import SimpleSlide from "../SimpleSlide";
import { useEffect, useState } from "react";
import {CameraTimeline} from "../AnimatedCamera"
import Order from "../Order";
import DisplayOrder from "../DisplayOrder";

function getScrollProgress() {
 
  const winScroll = window.document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  return winScroll / height;
}



function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();
      CameraTimeline.progress(scrolled);
      let px = scrolled * 20000
      // console.log("pixel:"+ px);

      // console.log("VH:" + ((scrolled * 25000) / document.documentElement.clientHeight) * 100 );


      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;

      };
    };
  }, []);

  return (


    





    
    <div id="article_wrapper">
      {/* HTML slides are nested here and we use vh values to specify where they are */}

      <SimpleSlide viewportPosition={15}>
        <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          width:"50%",
          fontSize:"4rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"center" }}>  
        Lan's Cocktail Menu
        </div>
      
        </SimpleSlide>


      <SimpleSlide viewportPosition={120}>
         <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          marginLeft:"4rem" , 
          width:"50%",
          fontSize:"3rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"left" }}>

          CLASSIC COCKTAIL 
          <hr />
          </div>
          
          <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          marginLeft:"0" , 
          width:"60%", 
          textAlign:"left" }}>
          
          <DisplayOrder 
          displayRange={1} width="90%" alignItems="left" textAlign="left" justifyContent="start" paddingLeft="2rem"/>
          </div>
          
        
        </SimpleSlide>


        <SimpleSlide viewportPosition={300}>

        <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          width:"50%",
          fontSize:"3rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"center" }}>

          CLASSIC COCKTAIL - 2
          <hr />
          </div>
          <br/>


          <div
         style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          width:"55%", 
          textAlign:"center",
          backdropFilter: "blur(5px)", }}>
            


          <DisplayOrder 
          displayRange={2} width="90%" alignItems="center" textAlign="center"  />


          </div>

        </SimpleSlide>




        <SimpleSlide viewportPosition={520}>

        <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          width:"70%",
          fontSize:"3rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"center", }}>

          SIGNATURE!
          <hr />
          </div>
          <br/><br/>

          
          <div
         style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          width:"40%", 
          textAlign:"center",
          backdropFilter: "blur(5px)",
           }}>
            
            <DisplayOrder displayRange={3} />

          </div>

        </SimpleSlide>



        <SimpleSlide viewportPosition={750}>
        <div style={{ 
          fontFamily: "Cormorant Garamond, cursive", 
          margin:"auto" , 
          backgroundColor:"black",
          height:"200vh",
          fontSize:"3rem" , 
          letterSpacing:"0.1rem", 
          textAlign:"center",
          backdropFilter: "blur(5px)",
          zIndex:"10" }}>
            <Order />
            
          </div> 

         
          </SimpleSlide >


    

          


          
            
        




          
 
      {/* 3D scene container */}
      <Scene />

 

    </div>
  );
}

export default App;



