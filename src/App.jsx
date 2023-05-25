import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
// import Fragment from "./components/Fragment"
import Blob from "./components/Blob"

function App() {
  return (
    <>
      {/*Blob camera*/}
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      {/*Fragment camera*/}
      {/*<Canvas camera={{ position: [1.0, 1.0, 1.0] }}>*/}
        {/*<Fragment />*/}
        <Blob />
        <axesHelper />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
