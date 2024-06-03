import React from 'react'
import profileImage from "../Images/nanaka.jpg";
import YouTubeLink from './YouTubeLink'; // YouTubeLink コンポーネントをインポート
import FloatingTitle from './FloatingTitle'; // FloatingTitle コンポーネントをインポート
import Poll from './Poll';

const Like = () => {
    return (
        <div>
            <img src={profileImage} className="fadeIn" style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: '0', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: '1.0' }} />
            <br /><br /><br /><br /><br /><br />
            <div class="text-center">
                <h2 style={{ fontWeight: 'bold' }}>
                    Idol Life<br /><br />
                </h2>
                {/*   */}
                <br />
                <FloatingTitle />
                <br /><br />
                <YouTubeLink />
                <br /><br />
                <Poll />
            </div>
        </div>
    )
}

export default Like
