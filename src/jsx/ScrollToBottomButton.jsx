import React from 'react';
import '../css/ScrollToBottomButton.css';

const ScrollToBottomButton = ({ onClick }) => {

    return (
        <button onClick={onClick} className="scroll-button">
            ▼
        </button>
    );
};

export default ScrollToBottomButton;