import React from 'react';
import '../Like/Like.css';  // CSSファイルを作成し、インポートしてください
import ScrollToBottomButton from '../ScrollToBottomButton/ScrollToBottomButton';

const Like = () => {

    const scrollOneWindowHeight = () => {
        const currentScrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        window.scrollTo({
            top: currentScrollTop + windowHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="likes-page">
            <div className="likes-container">
                <h1 className="likes-title">Hobbies</h1>
                <p className="likes-subtitle">私の好きなもの・こと
                </p>
            </div>
            <ScrollToBottomButton onClick={scrollOneWindowHeight} />

            <div className="likes-content">
                <div className="like-item">
                    <h3 className="like-item-title">Artist</h3>
                    <p className="like-item-description">I like going to idol shows.
                        I especially like the idols =LOVE, ≠ME, and ≒JOY produced by Rino Sashihara.
                        Their live performances are incredibly exciting.
                        I love Maika Sasaki of =LOVE the most. I am thinking of getting married in the future, but she doesn't love me around. That is my recent problem.</p>
                </div>

                <div className="like-item">
                    <h3 className="like-item-title">Running</h3>
                    <p className="like-item-description">I like to run very long distances.
                        For example, I once ran the distance from Hakodate to Esan (46 km).
                        When I was in high school, I once ran 21 km in 1 hour and 12 minutes.
                        I also like to run shuttle runs. My highest record was 161 times.
                        Someday I would like to circumnavigate Japan and be called Ino Tadataka of Reiwa.</p>
                </div>

                <div className="like-item">
                    <h3 className="like-item-title">Qualification</h3>
                    <p className="like-item-description">I like to study for certifications. In fact, in 2023, I attempted the exams for driving license, color test, FE, SC, SG, and math test. I always like to study more than one subject and I am still studying for several certifications. {' '}
                        I have also written articles on qualifications.
                        <a href="https://note.com/lud7n/n/nb5a4357cfa30" className="click-here-link"> Read note</a>
                    </p>
                </div>
            </div>


            <div className="bottom-space">
                <p className="bottom-text">© 2024 lud7n.site All Rights Reserved.</p>
            </div>

        </div >
    );
};

export default Like
