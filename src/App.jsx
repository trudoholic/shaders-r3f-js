import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
// import Fragment from "./components/Fragment"
// import Blob from "./components/Blob"
import Painting from "./components/Painting"

function App() {
  return (
    <>
      {/*Fragment camera*/}
      {/*<Canvas camera={{ position: [1.0, 1.0, 1.0] }}>*/}

      {/*Blob camera*/}
      {/*<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>*/}

      {/*Painting camera*/}
      <Canvas camera={{ position: [0.0, 0.0, 1.5] }}>

        {/*<Fragment />*/}
        {/*<Blob />*/}
        <Painting />

        <axesHelper />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
