import React from 'react';
import '../css/BackGroundImage.css';

const BackgroundImage = ({ children }) => {
    return (
        <div className="background-image">
            {children}
        </div>
    );
};

export default BackgroundImage;