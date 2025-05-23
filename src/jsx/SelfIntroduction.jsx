import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/SelfIntroduction.css';

const SelfIntroduction = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const fullText = `
{
    "name": "ShoutaKudo",
    "age": 22.0,
    "Hobbies": {
        "technology": "algorithm", "frontend",
        "design": "logo", "illustration", "userinterface"
    }
}
`;

    useEffect(() => {
        if (isVisible) {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) {
                    clearInterval(interval);
                }
            }, 50); // 文字が表示される速度を調整
            return () => clearInterval(interval);
        } else {
            setDisplayText('');
        }
    }, [isVisible]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="self-introduction-container">
            <button onClick={toggleVisibility} className="terminal-button">
                {isVisible ? '~ aboutme % cd ../' : '~ % cd aboutme'}
            </button>
            <CSSTransition
                in={isVisible}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-dot"></div>
                        <div className="terminal-dot" onClick={toggleVisibility}></div> {/* 黄色のドットにクリックイベントを追加 */}
                        <div className="terminal-dot"></div>
                    </div>
                    <div className="terminal-content">
                        <pre className="self-introduction">{displayText}</pre>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default SelfIntroduction;