import React from 'react';
import YouTubeLink from './YouTubeLink'; // YouTubeLink コンポーネントをインポート
import FloatingTitle from './FloatingTitle'; // FloatingTitle コンポーネントをインポート
import Poll from './Poll';

const Like = () => {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <div class="text-center">

                <br />
                <FloatingTitle />
                <br /><br />
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/E4PVynHrfp8?si=ZnUDFmVObkpXQWrP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <br /><br />
                <Poll />
                <br /><br /><br /><br />
            </div>
        </div>
    )
}

export default Like
