import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './YouTubeLink.css'; // CSSファイルをインポート

function YouTubeLink() {
    const videoUrl = "https://www.youtube.com/watch?v=E4PVynHrfp8"; // YOUR_VIDEO_IDを実際のビデオIDに置き換えてください

    return (
        <div className="youtube-link">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPlayCircle} size="3x" /> {/* アイコンを追加 */}
            </a>
        </div>
    );
}

export default YouTubeLink;