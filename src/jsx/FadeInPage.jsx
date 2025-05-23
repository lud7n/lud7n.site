import React, { useEffect } from 'react';
import '../css/FadeInPage.css'; // CSSファイルをインポート

const FadeInPage = ({ children }) => {
    useEffect(() => {
        const pageElement = document.querySelector('.fade-in-page');
        pageElement.classList.add('fade-in'); // フェードインのクラスを追加
    }, []);

    return (
        <div className="fade-in-page">
            {children}
        </div>
    );
};

export default FadeInPage;