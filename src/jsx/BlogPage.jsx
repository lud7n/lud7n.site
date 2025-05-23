import React from 'react';
import { Link } from 'react-router-dom';
import scImage from "../Images/SC.jpg";
import AtcoderBrownImage from "../Images/atcoder_icon.png";
import '../css/BlogPage.css';
import logoImage from '../Images/lud7n.logo_0815.png'; // ロゴ画像のパスを適切に設定してください
import kimoImage from '../Images/kimoi_me.jpg'; // ロゴ画像のパスを適切に設定してください
import article5Image from '../Images/shinsekai.jpg'; // ロゴ画像のパスを適切に設定してください


const articles = [
    { id: 1, title: "ポートフォリオサイト制作のきっかけ", summary: "未定", link: "/article1", image: logoImage, date: "2022-04-10" },
    { id: 2, title: "競技プログラミングについて", summary: "未定", link: "/article2", image: AtcoderBrownImage, date: "2023-10-08" },
    { id: 3, title: "情報処理安全確保支援士ってなに", summary: "未定", link: "/article3", image: scImage, date: "2024-06-25" },
    { id: 4, title: "アイドルのすすめ", summary: "未定", link: "/article4", image: kimoImage, date: "2024-07-04" },
    { id: 5, title: "デザイン（笑）しか", summary: "未定", link: "/article5", image: article5Image, date: "2024-11-19" },
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <h1 className="blog-title">Blog Articles</h1>
            <div className="articles-grid">
                {articles.slice().reverse().map(article => (
                    <div key={article.id} className="article-card">
                        <img
                            src={article.image}
                            alt={article.title}
                            className={`article-image ${article.imageClass || ''}`}
                        />
                        <div className="article-header">
                            <h6 className="article-title">{article.title}</h6>
                            <p className="article-date">
                                {new Date(article.date).toLocaleDateString('ja-JP', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).replace(/\//g, '/')}
                            </p>

                            <Link to={article.link} className="read-more-button">Read</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;