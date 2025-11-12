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
            <h2 className="concept-title">v_2.2 "CodeSPACEs"</h2>
            <p className="concept-description">
                I designed it with a coding-themed aesthetic in mind.<br />
                Since my AtCoder rating has reached the green level, <br />
                the color scheme is based on various shades of green.
            </p>
        </div>
    );
};

export default Concept;