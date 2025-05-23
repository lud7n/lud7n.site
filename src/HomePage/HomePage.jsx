import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SelfIntroduction from '../SelfIntroduction/SelfIntroduction';
import ScrollToBottomButton from '../ScrollToBottomButton/ScrollToBottomButton';
import '../HomePage/HomePage.css';
import ParallaxPage from '../Parallax/ParallaxPage';
import Concept from '../Concept/Concept';

const HomePage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // コンテンツを表示する
        setShowContent(true);
    }, []);

    return (
        <ParallaxPage>
            <div className="container">
                <div className={`title-container ${showContent ? 'show' : ''}`}>
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
    );
}

export default HomePage;