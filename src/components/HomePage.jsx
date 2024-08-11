import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from './Header';  // Header コンポーネントをインポート
import twitterImage from "../Images/twitter_icon.png";
import atcoderImage from "../Images/atcoder_icon_transparent.png";
import instagramImage from "../Images/insta.png";
import RotatingSemicircle from './RotatingCircle';
import Popup from './Popup';
import SelfIntroduction from './SelfIntroduction'; // 新しい SelfIntroduction コンポーネントをインポート
import ScrollToBottomButton from './ScrollToBottomButton'; // 新しい ScrollToBottomButton コンポーネントをインポート
import './HomePage.css';  // 既存のCSSファイルのインポートを確認

const HomePage = () => {
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        const maxOpacityScroll = 300; // 最大透明度に達するスクロール位置
        const currentScroll = window.pageYOffset;
        const newOpacity = Math.min(currentScroll / maxOpacityScroll, 1);
        setOpacity(newOpacity);
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (

        <body>
            <div className="homepage">
                <Header />
                <div className="container">
                    <div className="title-container">
                        <h2 className="title">lud7n.site</h2>
                    </div>

                    <p className="subtitle">
                        I'm a ? Engineer ? Designer ?<br></br>
                    </p>

                    <SelfIntroduction />

                    <div className="scroll-button-container">
                        <ScrollToBottomButton onClick={scrollToBottom} />
                    </div>

                    <div className="navigation-buttons">
                        <Link to="/works" className="nav-button">Works</Link>
                        <Link to="/skill" className="nav-button">Skill</Link>
                        <Link to="/like" className="nav-button">Like</Link>
                    </div>

                    <div class="text-center">

                        {/* <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '100px', letterSpacing: '4px', fontWeight: '180' }}>Qualification<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }} onClick={openPopup}>click here</h5>
                            <Popup isOpen={isOpen} close={closePopup} />
                        </h3>
                    </div> */}
                        <div className="social-icons" id="social-icons" style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '1000', gap: '10px' }}>
                            <a href="https://twitter.com/Iud7n" target="_blank"><img src={twitterImage} alt="Twitter" style={{ width: '35px', height: '35px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                            <a href="https://instagram.com/lud7n" target="_blank"><img src={instagramImage} alt="Instagram" style={{ width: '40px', height: '40px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                            <a href="https://atcoder.jp/users/lud7n" target="_blank"><img src={atcoderImage} alt="Facebook" style={{ width: '40px', height: '40px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                        </div>
                    </div >
                </div>
                <div className="bottom-space">
                    <p className="bottom-text">© 2024 lud7n.site All Rights Reserved.</p>
                </div>
            </div>
        </body >


    )
}

export default HomePage