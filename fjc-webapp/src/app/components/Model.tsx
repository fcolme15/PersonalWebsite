import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"

useGLTF.preload("/commodore64_computer_1k.glb")

const Model = () => {
  const group = useRef<Group>(null)
  const { scene } = useGLTF("/commodore64_computer_1k.glb")

  return (
    <group ref={group} scale={[.5, .5, .5]}>
      <primitive object={scene} />
    </group>
  )
}

export default Model