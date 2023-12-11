import { Sphere, useTexture,Html } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Background(props) {
  const { position, children, rotation, scale, texturePath} = props;
  const texture = useTexture(texturePath);

  return (
    
    <Sphere
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
  
    >

    <meshStandardMaterial map={texture} side={DoubleSide} />
      
      
 
      {children}
    </Sphere>
  );
}