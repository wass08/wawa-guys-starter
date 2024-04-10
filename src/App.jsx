import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

import { UI } from "./components/UI";
import { AudioManagerProvider } from "./hooks/useAudioManager";

function App() {
  return (
    <AudioManagerProvider>
      <Canvas shadows camera={{ position: [0, 16, 10], fov: 42 }}>
        <color attach="background" args={["#041c0b"]} />
        <Experience />
      </Canvas>
      <UI />
    </AudioManagerProvider>
  );
}

export default App;
