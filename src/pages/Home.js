
import "../App.css";
import { Loader } from "@react-three/drei"
import Scene from "../Scene";
import SimpleSlide from "../SimpleSlide";

import { useEffect } from "react";
import { CameraTimeline } from "../AnimatedCamera"
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
    // register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();
      CameraTimeline.progress(scrolled);

      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;

      };
    };
  }, []);





  return (

    <>
  <Loader 
  containerStyles={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
  dataInterpolation={(p) => `Preparing your table ${p.toFixed(2)}%`}
  />
   
    <div id="article_wrapper">

      {/* HTML slides are nested here and we use vh values to specify where they are */}

      {/* slide1 -TITLE */}
      <SimpleSlide viewportPosition={15}>
        <div style={{ 
          fontWeight: "600",
          margin:"auto" , 
          width:"50%",
          fontSize:"4rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"center" }}>  

        Lan's Cocktail Menu
        
        </div>
        </SimpleSlide>

      {/* slide2 - Signature */}
      <SimpleSlide viewportPosition={120}>

      <div style={{ 
          
          fontWeight: "400",
          marginLeft:"4rem" , 
          width:"50%",
          fontSize:"3rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"left" }}>

          SIGNATURE!
          <hr  style={{width:"90%" , margin:"1rem 0"}}/>
          </div>

          <div
            style={{ 
            marginLeft:"0" , 
            width:"50%", 
            textAlign:"left",
            alignItems:"left",
            backdropFilter: "blur(5px)"
           }}>
            
            <DisplayOrder width="90%" alignItems="left" textAlign="left" justifyContent="start" paddingLeft="2rem" marginLeft="2rem" displayRange={3} />
           <p style={{width:"90%",alignItems:"right", textAlign:"right", justifyContent:"start" ,paddingLeft:"2rem", marginLeft:"2rem", fontWeight:"100", letterSpacing:"2px"}}> unit:ml</p>
          </div>
        </SimpleSlide>



        {/* slide3 - Classic-1 */}
        <SimpleSlide viewportPosition={350}>

        <div style={{ 
          fontWeight: "400", 
          margin:"auto" , 
          width:"50%",
          fontSize:"3rem" , 
          letterSpacing:"0.3rem", 
          textAlign:"center" }}>

          CLASSIC COCKTAIL 
          <hr />
          </div>
          <br/>


          <div
         style={{ 
          
          margin:"auto" , 
          width:"55%", 
          textAlign:"center",
          backdropFilter: "blur(5px)", }}>
          
          <DisplayOrder 
          displayRange={2} width="50%" alignItems="center" textAlign="center"  />
          <br/>
          <p style={{width:"90%",alignItems:"center", textAlign:"center", justifyContent:"start" ,paddingLeft:"2rem", marginLeft:"2rem", fontWeight:"100", letterSpacing:"2px"}}> unit:ml</p>
          </div>
        </SimpleSlide>



        {/* slide4 - Classic-2 */}
        <SimpleSlide viewportPosition={520}>          
          <div style={{ 
          
          margin:"auto" , 
          width:"40%", 
          textAlign:"center",
          backdropFilter: "blur(5px)" }}>
          
          <DisplayOrder 
          displayRange={1} width="90%" alignItems="center" textAlign="center" justifyContent="start" paddingLeft="2rem" marginLeft="2rem"/>
          <br/>
          <p style={{width:"90%",alignItems:"center", textAlign:"center", justifyContent:"start" ,paddingLeft:"2rem", marginLeft:"2rem", fontWeight:"100", letterSpacing:"2px"}}> unit:ml</p>
          
          </div>
        </SimpleSlide>


        {/* slide5 - Order */}
        <SimpleSlide viewportPosition={750}>
        <div style={{ 
           
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

      <Scene />

    </div>


    


    </>
  );
}

export default App;



