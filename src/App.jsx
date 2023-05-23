import {useRef} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'

const Fragment = () => {
  const mesh = useRef()

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1.0}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />

    </mesh>
  )
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [0.0, 0.0, 1.0] }}>
        <Fragment />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
