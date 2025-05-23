import React, { useEffect, useRef } from 'react';
import '../css/Parallax.css';

const ParallaxPage = ({ children }) => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const scrollPosition = window.pageYOffset;
                backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`; // 係数を0.3に調整
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax-background" ref={backgroundRef}></div>
            <div className="parallax-content">
                {children}
            </div>
        </div>
    );
};

export default ParallaxPage;