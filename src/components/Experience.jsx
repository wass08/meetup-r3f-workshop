import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Model } from "./Table";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Model />
      <ContactShadows position={[0, -1, 0]} blur={3} opacity={0.42} />
    </>
  );
};
