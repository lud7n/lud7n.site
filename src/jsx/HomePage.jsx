import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SelfIntroduction from './SelfIntroduction';
import ScrollToBottomButton from './ScrollToBottomButton';
import '../css/HomePage.css';
import ParallaxPage from './ParallaxPage';
import Concept from './Concept';

// import LoadingScreen from './LoadingScreen';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <ParallaxPage>
            <div className="container">
                <div className={`title-container ${showContent ? 'show' : ''}`}>
                    <h2 className="title">lud7n</h2>
                </div>

                <SelfIntroduction />

                <div className="scroll-button-container">
                    <ScrollToBottomButton onClick={scrollToBottom} />
                </div>

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
    );
}

export default HomePage;