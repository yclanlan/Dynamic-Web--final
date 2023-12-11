import { useRef } from "react";
import { useGLTF,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function SpaceCraft(props) {
  const { position, modelUrl } = props;

  const gltf = useGLTF(modelUrl);

  return (
    <primitive
      position={position ? position : [0, 0, 0]}
      object={gltf.scene}
    >
        
    </primitive>
  );
}

