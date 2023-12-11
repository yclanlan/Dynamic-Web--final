import { Sphere, useTexture,Html } from "@react-three/drei";

export default function SimplePlanet(props) {
  const { position, children, rotation, scale, texturePath} = props;
  const texture = useTexture(texturePath);

  return (
    <Sphere
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      material-map={texture}
    >
      
      
      <Html>
        <h1 class="tag">Planet!!!</h1>
      
      
      </Html>
      
      {children}
    </Sphere>
  );
}
