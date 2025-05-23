import React, { useEffect, useState } from 'react';
import '../css/LoadingScreen.css';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setFadeOut(true), 500); // 少し遅延させてフェードアウトを開始
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 20); // 2秒で100%に達するように調整

        return () => clearInterval(interval);
    }, []);

    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
            <div className="progress-circle">
                <svg className="progress-ring" width="120" height="120">
                    <circle
                        className="progress-ring__circle"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="transparent"
                        r={radius}
                        cx="60"
                        cy="60"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset,
                        }}
                    />
                </svg>
                <div className="progress-text">{progress}%</div>
            </div>
        </div>
    );
};

export default LoadingScreen;