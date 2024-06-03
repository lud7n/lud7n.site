import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import jsImage from "../Images/HTML_transparent.png";
import profileImage from "../Images/nanaka.jpg";
import cImage from "../Images/C++_transparent.png";
import reactImage from "../Images/React-2_transparent.png";
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
            <div className="container text-center">

                <h2 style={{ transform: 'translateY(320px)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '10px', fontWeight: '180' }}>lud7n.site</h2>

                <div class="container_ellipse">
                    <div class="ellipse" id="ellipse1"></div>
                    <div class="ellipse" id="ellipse2"></div>
                    <div class="ellipse" id="ellipse3"></div>
                </div>

                <img src={profileImage} className="fadeIn" style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: '0', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: opacity }} />


                <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '4px', fontWeight: '180' }}>
                    I'm a ? Engineer ? Designer ?<br></br>
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div class="text-center">

                    <Link to="/works">
                        <RotatingSemicircle />
                    </Link>
                    <div>

                        <h3 className="text-shadow" style={{ position: 'relative', top: '-20px', left: '10px', letterSpacing: '4px', fontWeight: '180' }}>
                            Works<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                        </h3>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div class="text-center">

                    <Link to="/skill">
                        <RotatingSemicircle />
                    </Link>

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-20px', left: '10px', letterSpacing: '4px', fontWeight: '180' }}>Skill<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                        </h3>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div class="text-center">

                    <RotatingSemicircle />

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-20px', left: '10px', letterSpacing: '4px', fontWeight: '180' }}>Qualification<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }} onClick={openPopup}>click here</h5>
                            <Popup isOpen={isOpen} close={closePopup} />
                        </h3>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div class="text-center">

                    <Link to="/like">
                        <RotatingSemicircle />
                    </Link>

                    <div>
                        <h3 className="text-shadow" style={{ position: 'relative', top: '-20px', left: '10px', letterSpacing: '4px', fontWeight: '180' }}>Like<br></br>
                            <h5 style={{ fontFamily: 'Arial', letterSpacing: '4px', fontWeight: '50' }}>click here</h5>
                        </h3>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                {/* <section id="article">
                    <div class="text-center">
                        <h4 class="title">スキル</h4>
                        <div class="row text-center">
                            <div class="col-md-4 services">
                                <img src={reactImage} />
                                <h4>React</h4>
                                <p>なにもできません</p>
                            </div>
                            <div class="col-md-4 services">
                                <img src={jsImage} />
                                <h4>HTML/CSS</h4>
                                <p>ほぼつ��えません</p>
                            </div>
                            <div class="col-md-4 services">
                                <img src={cImage} />
                                <h4>c++</h4>
                                <p>ちょっっっとだけつかえます</p><br></br>
                            </div>
                        </div>
                        <Link to="/skill">
                            <button type="button" class="btn btn-primary">
                                スキル一覧
                            </button>
                        </Link>
                    </div>
                </section> */}

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

