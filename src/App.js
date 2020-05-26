import React, {Fragment, useRef, useState} from 'react'
import { Canvas, useFrame} from "react-three-fiber";
import { BackSide } from "three";

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
        <sphereBufferGeometry args={[1, 30, 30]} attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" />
      </mesh>
  )};

const App = () => {
  return (
      <Fragment>
        <Canvas>
          <FakeSphere/>
          {/*<perspectiveCamera />*/}
          <pointLight position={[0, 0, 0]}/>
          <ambientLight intensity={0.9}/>
          {/*<Box position={[0,0,0]} />*/}
          <mesh>
            <sphereBufferGeometry attach="geometry" args={[0, 0, 0]}/>
            <meshStandardMaterial attach="material" color={0xd2452b} side={BackSide}/>
          </mesh>
        </Canvas>
      </Fragment>
  );
};

export default App;
