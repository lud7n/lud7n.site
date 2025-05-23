import React from 'react';
import MatrixBackground from './TypingBackground';

const ParallaxPage = ({ children }) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <MatrixBackground />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default ParallaxPage;
