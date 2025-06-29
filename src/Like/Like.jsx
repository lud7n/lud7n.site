// src/components/Like.jsx
import React, { useState, useEffect } from 'react';
import mgaImg from '../Images/mga.jpg';

// 色の線形補間関数
function lerpColor(a, b, t) {
    const ah = a.match(/\w\w/g).map(x => parseInt(x, 16));
    const bh = b.match(/\w\w/g).map(x => parseInt(x, 16));
    const rh = ah.map((av, i) => Math.round(av + (bh[i] - av) * t));
    return `#${rh.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

const Like = () => {
    // スクロール量に応じたopacity管理
    const [boxOpacity, setBoxOpacity] = useState(0.7);
    // タイトルの色をboxOpacityに応じて補間
    const darkColor = '#b7e07a'; // さらに明るい黄緑
    const lightColor = '#eeffbb'; // 明るいライム系
    const titleColor = lerpColor(darkColor, lightColor, 1 - boxOpacity);

    useEffect(() => {
        const handleScroll = () => {
            // 0~200pxの間でopacityが1→0になる
            const scrollY = window.scrollY;
            const fadeStart = 0;
            const fadeEnd = 400;
            let opacity = 1;
            if (scrollY > fadeStart) {
                opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
            }
            setBoxOpacity(opacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center p-5 bg-black text-lime-100 font-serif">
            <div className="max-w-5xl w-full my-[300px] text-center animate-fade-in relative flex justify-center items-center">
                {/* 背景用の四角いボックス */}
                <div
                    className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] rounded-lg z-0"
                >
                    {/* 外枠ぼかしレイヤー */}
                    <div
                        className="absolute inset-0 rounded-lg scale-110"
                        style={{
                            backgroundImage: `url(${mgaImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(16px)',
                            zIndex: -1,
                            // WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                            maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                        }}
                    />
                    {/* 写真本体＋黒オーバーレイ */}
                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            backgroundImage: `url(${mgaImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: boxOpacity,
                        }}
                    >
                        <div className="absolute inset-0 bg-black rounded-lg" style={{ opacity: 0.5 }} />
                    </div>
                </div>
                {/* タイトル・サブタイトル */}
                <div className="relative z-10 w-full">
                    <h1 className="text-2xl font-light tracking-widest mb-2" style={{ color: titleColor }}>「目的を最適化する」</h1>
                    <p className="text-base font-light mb-[300px]" style={{ color: titleColor }}>Optimize my objectives</p>
                </div>
            </div>

            <div className="w-full mt-[300px] space-y-16">
                <div className="px-5 text-left rounded shadow-md">
                    <h3 className="text-xl font-light mb-2">Artist</h3>
                    <p className="text-base leading-relaxed font-light">
                        I like going to idol shows. I especially like the idols =LOVE, ≠ME, and ≒JOY produced by Rino Sashihara.
                        Their live performances are incredibly exciting. I love Maika Sasaki of =LOVE the most. I am thinking of
                        getting married in the future, but she doesn't love me around. That is my recent problem.
                    </p>
                </div>

                <div className="px-5 text-left rounded shadow-md">
                    <h3 className="text-xl font-light mb-2">Running</h3>
                    <p className="text-base leading-relaxed font-light">
                        I like to run very long distances. For example, I once ran the distance from Hakodate to Esan (46 km).
                        When I was in high school, I once ran 21 km in 1 hour and 12 minutes. I also like to run shuttle runs.
                        My highest record was 161 times. Someday I would like to circumnavigate Japan and be called Ino Tadataka
                        of Reiwa.
                    </p>
                </div>

                <div className="px-5 text-left rounded shadow-md">
                    <h3 className="text-xl font-light mb-2">Qualification</h3>
                    <p className="text-base leading-relaxed font-light">
                        I like to study for certifications. In fact, in 2023, I attempted the exams for driving license, color test, FE,
                        SC, SG, and math test. I always like to study more than one subject and I am still studying for several
                        certifications.
                        I have also written articles on qualifications.{' '}
                        <a
                            href="https://note.com/lud7n/n/nb5a4357cfa30"
                            className="text-lime-100 font-bold hover:text-blue-600 underline"
                        >
                            Read note
                        </a>
                    </p>
                </div>
            </div>

            <div className="mt-40 text-center text-sm text-lime-100 opacity-70">
                <p>© 2024 lud7n.site All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Like;
