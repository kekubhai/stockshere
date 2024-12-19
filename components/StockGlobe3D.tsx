'use client'

import { Canvas, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import React from "react"
const TickerText = ({ position }) => {
  const textRef = useRef(null)
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.set(Math.sin(state.clock.elapsedTime) * 0.2, Math.cos(state.clock.elapsedTime) * 0.2, 0)
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      color="#00ff00"
      anchorX="center"
      anchorY="middle"
    >
      StocksHere
    </Text>
  )
}

const StockTicker3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TickerText position={[-2, 0, 0]} />
      <TickerText position={[0, 0, 0]} />
      <TickerText position={[2, 0, 0]} />
    </Canvas>
  )
}

export default StockTicker3D

