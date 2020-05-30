import React from 'react';

export default () => {
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[100,10,10]}/>
            <meshStandardMaterial attach="material" color='rgb(199, 197, 72)' side={1}/>
        </mesh>
    );
};
