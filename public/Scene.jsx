/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: NepsterCZ (https://sketchfab.com/NepsterCZ)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-red-reaper-harrower-class-a5ca72b9e280496586e5424d82df128c
Title: Star Wars - Red Reaper | Harrower-class
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Harrower_0.geometry} material={materials.Details03} />
      <mesh geometry={nodes.Harrower_1.geometry} material={materials.Trims01} />
      <mesh geometry={nodes.Harrower_2.geometry} material={materials.Panels02} />
      <mesh geometry={nodes.Harrower_3.geometry} material={materials.Panels01} />
      <mesh geometry={nodes.Harrower_4.geometry} material={materials.Details02} />
      <mesh geometry={nodes.Harrower_5.geometry} material={materials.Details01} />
      <mesh geometry={nodes.Harrower_6.geometry} material={materials.Forcefield} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
