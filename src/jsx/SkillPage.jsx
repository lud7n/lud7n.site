import React, { useState, useEffect } from 'react';
import SkillGage from './SkillGage';
import '../css/SkillPage.css';

const SkillPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // ページトップにスクロール
        window.scrollTo(0, 0);

        // 2秒後にポップアップを表示
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 400);

        // クリーンアップ関数でタイマーをクリア
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="text-center">
                <br /><br /><br /><br /><br /><br />
                <h2 style={{ letterSpacing: '4px', fontWeight: '380' }}>Skill</h2><br />
                {isVisible && <SkillGage />}
            </div>
        </div>
    );
};

export default SkillPage;