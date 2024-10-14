import React, { Suspense } from 'react'
import Earth from '../public/Earth'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const App = () => {

  return (
    <div className='overflow-hidden relative bg-neutral-900 h-screen w-screen'>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5}  />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Earth scale={[3, 3, 3]} position={[0, 0, 0]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>

      <div className='absolute flex left-1/2 top-1/2 -translate-x-1/2 items-center justify-center w-max h-max'>
        <h1 className='bg-gradient-to-r from-emerald-400 via-purple-400 to-orange-700 bg-clip-text text-transparent tracking-wider uppercase text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Spaces That Inspire.</h1>
      </div>
    </div>
  )
}

export default App