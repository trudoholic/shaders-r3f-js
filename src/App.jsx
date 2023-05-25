import {useMemo, useRef} from "react"
import { Color } from "three"
import {Canvas, useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

import vertexShader from "./shaders/moving/vertexShader.js"
import fragmentShader from "./shaders/moving/fragmentShader.js"

const Fragment = () => {
  const mesh = useRef(null)

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }), []
  )

  useFrame((state) => {
    const { clock } = state
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );

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
