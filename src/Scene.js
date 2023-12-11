import { Suspense } from "react";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera , OrbitControls , Environment, Stars, Sparkles, useTexture} from "@react-three/drei";
import { Gin } from "./Gin-Glasslight"
import { Magrita } from "./Magrita"
import { Martini } from "./Martini2"
import FX from "./FX";
import AnimatedCamera from "./AnimatedCamera";
import AnimatedObject from "./Object";




function Scene() {



  return (
    <div id="canvas_wrapper">
      <Canvas>

        <Environment files="./fireplace_1k.hdr" background blur={0.1} rotation={[0,1,0]}/>
        
        {/* <FX />; */}

        {/* Camera 🎥 */}
         <AnimatedCamera />

        {/* <gridHelper /> */}
        {/* <OrbitControls enableZoom = {false}/> */}

        <Stars count={1000} />
        <Sparkles size={10} 
                  count={1000}
                  scale={20}
                  speed={0.3}/>
        

        {/* Lights 💡 */}
        <ambientLight intensity={0.5} />
        <pointLight color = {0xff4d12} position={[0, 3, -1]} intensity={30} />
        <pointLight color = {0xffa812} position={[-3, 3, 2]} intensity={30} />
        <pointLight color = {0xff8800} position={[20, 10, -2]} intensity={300} />


        {/* Objects 📦 */}





        <Suspense fallback={null}>
          
        <AnimatedObject
            scale={[10,1,10]}  
            position={[3, 0, 0]} 
            rotation={[0,-Math.PI/10*2,0]}
            modelUrl={"./woodentable.glb"} 
            /> 

        <Gin scale={[20,20,20]}
             position={[2, -0.13, 1.2]}
             rotation={[0,-Math.PI/10*3,0]}
               
        />

        <Magrita scale={[20,20,20]}
            position={[-1, 0.13, 5]}
            rotation={[0,-Math.PI/4*3,0]}
            
        />

        <Martini scale={[20,20,20]}
        position={[2, -0.13, 0]} 
        rotation={[0,-Math.PI/4*3,0]}
        />


          
        </Suspense>
        
      </Canvas>
    </div>
  );
}

export default Scene;



