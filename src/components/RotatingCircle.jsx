import React, { useEffect, useState } from 'react';

function RotatingSemicircle() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const rotationDegree = window.scrollY % 360; // スクロール量に応じた回転角度
            setRotation(rotationDegree);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="half-circle" style={{
            transform: `rotate(${rotation}deg)`,
        }}>
        </div >
    );
}

export default RotatingSemicircle;