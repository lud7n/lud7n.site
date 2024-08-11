import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SelfIntroduction.css';

const SelfIntroduction = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                <div className={`terminal-window ${isVisible ? 'visible' : ''}`}>
                    <div className="terminal-header">
                        <div className="terminal-dot"></div>
                        <div className="terminal-dot"></div>
                        <div className="terminal-dot"></div>
                    </div>
                    <div className="terminal-content">
                        <div className="self-introduction">
                            <p><span className="json-bracket">{"{"}</span></p>
                            <p>&nbsp;&nbsp;<span className="json-key">"name"</span>: <span className="json-string">"ShoutaKudo"</span>,</p>
                            <p>&nbsp;&nbsp;<span className="json-key">"age"</span>: <span className="json-number">21.0</span>,</p>
                            <p>&nbsp;&nbsp;<span className="json-key">"Hobbies"</span>: <span className="json-bracket">{"{"}</span></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"technology"</span>: <span className="json-string">"algorithm"</span>, <span className="json-string">"frontend"</span>,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"design"</span>: <span className="json-string">"logo"</span>, <span className="json-string">"illustration"</span>, <span className="json-string">"userinterface"</span></p>
                            <p>&nbsp;&nbsp;<span className="json-bracket">{"}"}</span></p>
                            <p><span className="json-bracket">{"}"}</span></p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default SelfIntroduction;