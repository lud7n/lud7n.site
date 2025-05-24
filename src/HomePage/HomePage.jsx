import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SelfIntroduction from '../SelfIntroduction/SelfIntroduction';
import '../HomePage/HomePage.css';
import ParallaxPage from '../Parallax/ParallaxPage';
import Concept from '../Concept/Concept';
import SpinnerOrbits from '../LoadingScreen/SpinnerOrbits';
import './LoadingFade.css';

const HomePage = () => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [showParallax, setShowParallax] = useState(false);

    useEffect(() => {
        const fadeStart = setTimeout(() => {
            setIsFadingOut(true); // フェード開始
        }, 2000);

        const removeLoader = setTimeout(() => {
            setIsVisible(false); // ローディング非表示に
        }, 3000); // フェード時間1秒

        const showParallaxTimer = setTimeout(() => {
            setShowParallax(true); // 5秒後にParallaxを表示
        }, 1500);

        return () => {
            clearTimeout(fadeStart);
            clearTimeout(removeLoader);
            clearTimeout(showParallaxTimer);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className={`loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
                    <SpinnerOrbits />
                </div>
            )}

            {showParallax && (
                <ParallaxPage>
                    <div className="container">
                        <div className="title-container show">
                            <h2 className="title">lud7n</h2>
                        </div>

                        <SelfIntroduction />

                        <div className="navigation-buttons">
                            <Link to="/works" className="nav-button">Works</Link>
                            <Link to="/skill" className="nav-button">Skill</Link>
                            <Link to="/like" className="nav-button">Like</Link>
                        </div>

                        <Concept />
                    </div>

                    <div className="bottom-space">
                        <p className="bottom-text">© 2024 lud7n.site All Rights Reserved.</p>
                    </div>
                </ParallaxPage>
            )}
        </>
    );
};

export default HomePage;
