import React, { useEffect, useRef, useState } from 'react';
import '../Concept/Concept.css';

const Concept = () => {
    const conceptRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (conceptRef.current) {
                const rect = conceptRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初期チェック

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`concept-container ${isVisible ? 'visible' : ''}`}
            ref={conceptRef}
        >
            <h2 className="concept-title">v_2.1 "aqualium"</h2>
            <p className="concept-description">
                The design is inspired by the floating feeling of the jellyfish in Alaska, with the parallax effect in mind.<br />
                In addition, the text color matches the cool colors to create a rich impression.<br /><br />
                FrontEnd : React, JavaScript, Bootstrap<br />
                BackEnd : Node.js<br />
            </p>
        </div>
    );
};

export default Concept;