import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";

const Cube = () => {

    const cubeRef = useRef()

    useFrame(() => {
        cubeRef.current.rotation.y += 0.02
    })

    const position = [Math.floor(Math.random() * 120) - 50, Math.floor(Math.random() * 100) - 50, Math.floor(Math.random() * 100) - 50]

    return (
        <mesh ref={cubeRef} position={position}>
            <planeBufferGeometry attach='geometry' args={[1.5, 3, 1]}/>
            <meshStandardMaterial attach='material' color="rgb(244, 125, 14)" side={2}/>
        </mesh>
    )
}

let nodesArray = [...new Array(100)]

const Cubes = () => {
    const group = useRef();

    useFrame(() => {
        group.current.rotation.y += 0.005;
    });

    return (
        <group ref={group}>
            {
                nodesArray.map((el, i) => (<Cube key={i}/>))
            }
        </group>
    )
}

export default Cubes;
