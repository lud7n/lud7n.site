import React, { useState, useEffect } from 'react';
import './FadeInOverlay.css';

const FadeInOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 1秒後にオーバーレイを非表示にする

        return () => clearTimeout(timer);
    }, []);

    return isVisible ? <div className="fade-in-overlay"></div> : null;
};

export default FadeInOverlay;