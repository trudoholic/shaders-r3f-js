import {useRef} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import vertexShader from "./shaders/gradient/vertexShader.js"
import fragmentShader from "./shaders/gradient/fragmentShader.js"

const Fragment = () => {
  const mesh = useRef()

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
      />

    </mesh>
  )
}

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
