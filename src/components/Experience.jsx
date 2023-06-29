import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};
