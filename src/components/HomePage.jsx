import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import twitterImage from "../Images/twitter_icon.png";
import atcoderImage from "../Images/atcoder_icon_transparent.png";
import instagramImage from "../Images/insta.png";
import RotatingSemicircle from './RotatingCircle';
import Popup from './Popup';

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

    return (

        <body>
            <div className="container">

                <h2 style={{ transform: 'translateY(320px)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '10px', fontWeight: '180' }}>lud7n.site</h2>

                <div class="container_ellipse">
                    <div class="ellipse" id="ellipse1"></div>
                    <div class="ellipse" id="ellipse2"></div>
                    <div class="ellipse" id="ellipse3"></div>
                </div>

                <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '4px', fontWeight: '180' }}>
                    I'm a ? Engineer ? Designer ?<br></br>
                </p>

                <Link to="/works">
                    <RotatingSemicircle />
                </Link>
                <div>

                    <h3 className="text-shadow" style={{ position: 'relative', top: '-40px', letterSpacing: '4px', fontWeight: '180' }}>
                        Works<br></br>
                        <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                    </h3>
                </div>

                <div class="text-center">

                    <Link to="/skill">
                        <RotatingSemicircle />
                    </Link>

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-40px', letterSpacing: '4px', fontWeight: '180' }}>Skill<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                        </h3>
                    </div>
                </div>

                <div class="text-center">

                    <RotatingSemicircle />

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-40px', letterSpacing: '4px', fontWeight: '180' }}>Qualification<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }} onClick={openPopup}>click here</h5>
                            <Popup isOpen={isOpen} close={closePopup} />
                        </h3>
                    </div>
                </div>

                <div class="text-center">

                    <Link to="/like">
                        <RotatingSemicircle />
                    </Link>

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-40px', letterSpacing: '4px', fontWeight: '180' }}>Like<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                        </h3>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div className="social-icons" id="social-icons" style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '1000', gap: '10px' }}>
                    <a href="https://twitter.com/Iud7n" target="_blank"><img src={twitterImage} alt="Twitter" style={{ width: '35px', height: '35px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                    <a href="https://instagram.com/lud7n" target="_blank"><img src={instagramImage} alt="Instagram" style={{ width: '40px', height: '40px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                    <a href="https://atcoder.jp/users/lud7n" target="_blank"><img src={atcoderImage} alt="Facebook" style={{ width: '40px', height: '40px', opacity: 1.0, transition: 'opacity 0.3s ease-in-out', margin: '10px 0' }} /></a>
                </div>
            </div >
        </body >


    )
}

export default HomePage

