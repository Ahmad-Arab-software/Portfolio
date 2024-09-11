import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const MyCharacter = (props) => {
  const { camera } = useThree();
  console.log(camera.position);
  const { nodes, materials, scene } = useGLTF("avatar.glb");

  useEffect(() => {
    scene?.position.set(0, -1.3, 0);
    camera?.position.set(0, 0.2, 0.99);

    // Set initial camera position
    const logPos = () => {
      console.log(camera);
    };
    setInterval(logPos, 5000);
    return clearInterval(logPos);
  }, [camera, scene]);

  if (!nodes || !materials) return null;
  console.log(nodes);
  console.log(materials);

  return <primitive object={scene} />;
};

useGLTF.preload("avatar.glb");
