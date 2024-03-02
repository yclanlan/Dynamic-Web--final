import { useGLTF } from "@react-three/drei";


function AnimatedObject(props) {
  const { position, rotation, scale, modelUrl } = props;

  const gltf = useGLTF(modelUrl);
  // const objectRef = useRef();

  return (
    <primitive
      // ref={objectRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1,1,1]}
      object={gltf.scene}

    />
  
  );

}

export default AnimatedObject;
