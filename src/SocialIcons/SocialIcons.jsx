import React from 'react';
import '../SocialIcons/SocialIcons.css';
import twitterImage from "../Images/icons8-ツイッター-48.png";
import atcoderImage from "../Images/icons8-laptop-coding-48.png";
import instagramImage from "../Images/icons8-インスタグラム-48.png";

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://twitter.com/Iud7n" target="_blank" rel="noopener noreferrer">
                <img src={twitterImage} alt="Twitter" />
            </a>
            <a href="https://instagram.com/lud7n" target="_blank" rel="noopener noreferrer">
                <img src={instagramImage} alt="Instagram" />
            </a>
            <a href="https://atcoder.jp/users/lud7n" target="_blank" rel="noopener noreferrer">
                <img src={atcoderImage} alt="Atcoder" />
            </a>
        </div>
    );
};

export default SocialIcons;