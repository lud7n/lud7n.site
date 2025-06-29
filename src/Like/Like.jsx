// src/components/Like.jsx
import React from 'react';

const Like = () => {

    return (
        <div className="min-h-screen flex flex-col items-center p-5 bg-black text-lime-100 font-serif">
            <div className="max-w-5xl w-full my-[300px] text-center animate-fade-in">
                <h1 className="text-2xl font-light tracking-widest mb-2">「目的を最適化する」</h1>
                <p className="text-base font-light mb-[300px]">Optimize my objectives</p>
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
