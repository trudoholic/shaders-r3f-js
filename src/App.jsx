import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Fragment from "./components/Fragment"

function App() {
  return (
    <>
      <Canvas camera={{ position: [1.0, 1.0, 1.0] }}>
        <Fragment />
        <axesHelper />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
