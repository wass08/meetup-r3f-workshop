import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
        <Environment preset="city" />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
