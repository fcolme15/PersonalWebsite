'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html, OrbitControls, useProgress } from '@react-three/drei'
import Model from './Model'

function Loader (){
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function Scene() {
  return (
    <Canvas gl={{ antialias: true}} dpr={[1, 1.5]}  camera={{ position: [2, 2, 4], fov: 55 }} className='relative '>
      
      <ambientLight intensity={5} />
      <Suspense fallback={<Loader/>}>
        <Model />
        
      </Suspense>
      <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        enableRotate={true} />
    </Canvas>
  )
}

export default Scene;