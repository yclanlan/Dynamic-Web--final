import { PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react"
import { gsap } from "gsap"



export const CameraTimeline = new gsap.timeline({
    paused:true
});




 function AnimatedCamera(props){
  
  const cameraRef = useRef();
   
   useEffect( ()=>{
     
     CameraTimeline.to(
     cameraRef.current.position,
     { x:5 , y:2 , z:-9},
       "animation1"
     );
     
     CameraTimeline.to(
     cameraRef.current.rotation,
     { x:0 , y:Math.PI*1.1 , z:0},
       "animation1"
     );
     
     
    CameraTimeline.to(
     cameraRef.current.position,
     { x:2 , y:3 , z:-3},
      "animation2"
     );
     
     CameraTimeline.to(
     cameraRef.current.rotation,
     { x:0 , y:Math.PI*1.0 , z:0},
     "animation2"
     );




     CameraTimeline.to(
      cameraRef.current.position,
      { x:3, y:3 , z:8},
       "animation3"
      );
      
      CameraTimeline.to(
      cameraRef.current.rotation,
      { x:0 , y:Math.PI*0.3 , z:0},
      "animation3"
      );




      CameraTimeline.to(
        cameraRef.current.position,
        { x:6, y:3 , z:10},
         "animation4"
        );
        
        CameraTimeline.to(
        cameraRef.current.rotation,
        { x:0 , y:Math.PI*0.3, z:0},
        "animation4"
        );

        CameraTimeline.to(
          cameraRef.current.position,
          { x:6+3, y:3 , z:10+2},
           "animation5"
          );
          
          CameraTimeline.to(
          cameraRef.current.rotation,
          { x:0 , y:Math.PI*0.3, z:0},
          "animation5"
          );

          CameraTimeline.to(
            cameraRef.current.position,
            { x:6+3*2, y:3 , z:10+2*2},
             "animation6"
            );
            
            CameraTimeline.to(
            cameraRef.current.rotation,
            { x:0 , y:Math.PI*0.3, z:0},
            "animation6"
            );

            CameraTimeline.to(
              cameraRef.current.position,
              { x:1 , y:3 , z:0},
               "animation7"
              );
              
              CameraTimeline.to(
              cameraRef.current.rotation,
              { x:0,y:Math.PI*1.28,z:0},
              "animation7"
              );
     



 
     
     
     },[cameraRef]);
   
   console.log(cameraRef);
   
   
   
   
  
   return  <PerspectiveCamera ref={cameraRef} makeDefault position={[-5, 3, -5]} rotation={[0,Math.PI*1.28,0]} />;
  
}

export default AnimatedCamera;