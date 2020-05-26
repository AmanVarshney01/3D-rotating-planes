import React, {Fragment, useRef, useState} from 'react'
import { Canvas, useFrame, extend, useThree} from "react-three-fiber";
import { BackSide } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls})

const Controls = () => {

    const {camera, gl} = useThree()
    const orbitRef = useRef()

    useFrame(() => {
        orbitRef.current.update()
    })

    return (
        <orbitControls ref={orbitRef} args={[camera, gl.domElement]}/>
    )}

const Box = (props) => {

  const boxRef = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useFrame(() => {
    if (isHovered) {
      boxRef.current.rotation.x = boxRef.current.rotation.y += 0.1
    }
    // if (isActive) {
    //   boxRef.current.position = [1.5, 1.5, 1.5]
    // }
  })

  return(
      <mesh ref={boxRef}
            {...props}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            onClick={() => setIsActive(!isActive)}
            scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}>
        <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        <meshStandardMaterial attach="material" color="hotpink"/>
      </mesh>
  )};

const FakeSphere = () => {
  return (
      <mesh>
        <sphereBufferGeometry args={[0.7, 1, 1]} attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" />
      </mesh>
  )};

const App = () => {
  return (
      <Fragment>
        <Canvas>
          <FakeSphere/>
          <perspectiveCamera args={[45 , window.innerWidth / window.innerHeight, 1, 100]} position={[-1, 2, 3]}/>
          <pointLight position={[0, 0, 0]}/>
          <ambientLight intensity={0.9}/>
          {/*<Box position={[1,0,0]} />*/}
          {/*<Box position={[0,1,0]} />*/}
          {/*<Box position={[-1,0,0]} />*/}
          <Controls/>
          <mesh>
            <sphereBufferGeometry attach="geometry" args={[10, 1, 1]}/>
            <meshStandardMaterial attach="material" color={0xd2452b} side={BackSide}/>
          </mesh>
        </Canvas>
      </Fragment>
  );
};

export default App;
