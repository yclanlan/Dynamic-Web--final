import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGLTF, Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { CameraTimeline } from "./AnimatedCamera"
import { MeshBasicMaterial } from "three";

function AnimatedObject(props) {
  const { position, rotation, scale, modelUrl } = props;

  const gltf = useGLTF(modelUrl);
  // const objtexture = useTexture(textureUrl);
  const objectRef = useRef();

  // const meteraial = 
  // <meshBasicMaterial map={bakedTexture} map-flipY={false} />



  // useEffect(() => {
    
  //     CameraTimeline.to(
  //       objectRef.current.position,
  //       { x: -1, y: 0, z: 0 },
  //       "animation1"
  //     );

  //     CameraTimeline.to(
  //       objectRef.current.rotation,
  //       { x: 0, y: -0.7, z: 1 },
  //       "animation1"
  //     );


  //     CameraTimeline.to(
  //       objectRef.current.position,
  //       { x: -1, y: 0, z: 0 },
  //       "animation2"
  //     );

  //     CameraTimeline.to(
  //       objectRef.current.rotation,
  //       { x: 0, y: 0.7, z: 1 },
  //       "animation2"
  //     );


    
  // }, [objectRef]);

  return (
    <primitive
      ref={objectRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1,1,1]}
      object={gltf.scene}
      // material={MeshBasicMaterial}
      // texture={objtexture}
    />
  
  );

  // <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} />;
}

export default AnimatedObject;
