import React from 'react';
import './ScrollToBottomButton.css';

const ScrollToBottomButton = ({ onClick }) => {

    return (
        <button onClick={onClick} className="scroll-button">
            ▽
        </button>
    );
};

export default ScrollToBottomButton;