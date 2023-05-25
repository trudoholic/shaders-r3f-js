import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
// import Fragment from "./components/Fragment"
// import Blob from "./components/Blob"
// import Painting from "./components/Painting"
import Planet from "./components/Planet";

function App() {
  return (
    <>
      {/*Fragment camera*/}
      {/*<Canvas camera={{ position: [1.0, 1.0, 1.0] }}>*/}

      {/*Blob/Planet camera*/}
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>

      {/*Painting camera*/}
      {/*<Canvas camera={{ position: [0.0, 0.0, 1.5] }}>*/}

        <ambientLight intensity={0.03} />
        <directionalLight position={[0.3, 0.15, 0.0]} intensity={2} />

        {/*<Fragment />*/}
        {/*<Blob />*/}
        {/*<Painting />*/}
        <Planet />

        <axesHelper />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
