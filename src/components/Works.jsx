import React from 'react'
import './Works.css';
import copypenImage from "../Images/copypen.jpg";
import fuwawariImage from "../Images/fuwawari.png";
import funfesImage from "../Images/funfes.jpg";
import RedesignerImage from "../Images/redesigner_transparent.png";
import ScrollToBottomButton from './ScrollToBottomButton';  // ScrollBottomButtonをインポート

const Works = () => {
    return (
        <div className="works-page">
            <a href="https://student.redesigner.jp/students/e9d78f9a30ea8c296c368168c9f03a3e"
                target="_blank"
                rel="noopener noreferrer"
                className="redesigner-link">
                <img src={RedesignerImage} alt="Redesigner" className="redesigner-image" />
            </a>
            <div className="works-container">
                <div className="works-header">
                    <h2 className="works-title">Works</h2>
                    <p className="works-subtitle">
                        Here is a list of works I have produced.<br />
                        For more information, please visit <a href="https://student.redesigner.jp/students/e9d78f9a30ea8c296c368168c9f03a3e" target="_blank" rel="noopener noreferrer" className="highlight">Redesigner for student</a>.
                    </p>
                </div>

                <ScrollToBottomButton onClick={ScrollToBottomButton} />

                <div className="works-content">
                    <div className="work-item">
                        <img src={copypenImage} alt="Copypen" className="work-image" />
                        <h3 className="work-title">Copypen</h3>
                        <p className="work-description">This device allows you to enjoy the tactile sensation of the pen on your fingertips while copying and pasting with just the pen itself. It was created in the project "Interaction Elements".</p>
                    </div>
                    <div className="work-item">
                        <img src={fuwawariImage} alt="ふわわり" className="work-image" />
                        <h3 className="work-title">ふわわり</h3>
                        <p className="work-description">We designed a service that communicates whether or not communication is possible by changing the color of the towel. This is the outcome of the third year class "User-Centered Design."</p>
                    </div>
                    <div className="work-item">
                        <img src={funfesImage} alt="未来祭2022" className="work-image" />
                        <h3 className="work-title">未来祭2022</h3>
                        <p className="work-description">３年ぶりとなる大型の対面開催に向けて、未来祭実行委員で力を合わて学園祭を務め上げました。私はイベントセクションリーダーという役職を務めました。</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Works