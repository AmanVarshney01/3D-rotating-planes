import React, {Fragment} from 'react'
import {Canvas} from "react-three-fiber";
import Cubes from "./components/Cubes/Cubes";
import Env from "./components/Environment"

const Core = () => {
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[15, 32, 32]}/>
            <meshBasicMaterial  attach="material" color="rgb(251, 255, 0)"/>
        </mesh>
    )
}

const App = () => {
    return (
        <Fragment>
            <Canvas camera={{ fov: 104, position: [0,0,70] }}>
                <ambientLight/>
                <pointLight/>
                <Cubes/>
                <Core/>
                <Env/>
            </Canvas>
        </Fragment>
    )
}

export default App;
