import React from 'react';
import './SpinnerOrbits.css';

const SpinnerOrbits = () => {
    return (
        <div className="loading-wrapper">
            <div className="spinner-box">
                <div className="blue-orbit leo"></div>
                <div className="green-orbit leo"></div>
                <div className="red-orbit leo"></div>
                <div className="white-orbit w1 leo"></div>
                <div className="white-orbit w2 leo"></div>
                <div className="white-orbit w3 leo"></div>
            </div>

            {/* LOADINGテキストをオービットの下に追加 */}
            <div id="loading_container">
                <div className="L"><p>L</p></div>
                <div className="O"><p>O</p></div>
                <div className="A"><p>A</p></div>
                <div className="D"><p>D</p></div>
                <div className="I"><p>I</p></div>
                <div className="N"><p>N</p></div>
                <div className="G"><p>G</p></div>
            </div>
        </div>
    );
};

export default SpinnerOrbits;
