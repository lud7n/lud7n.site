import React from 'react';
import { Link } from 'react-router-dom';
import scImage from "../Images/SC.jpg";
import AtcoderBrownImage from "../Images/atcoder_icon_transparent.png";
import './BlogPage.css';

const articles = [
    { id: 1, title: "WebのPF、かっこいい・・", summary: "就活中に初めてReact触った人の話", link: "/article4", image: scImage, date: "2022-04-10" },
    { id: 2, title: "R5 IPA秋季試験", summary: "vs情報処理安全確保支援士", link: "/article3", image: scImage, date: "2023-10-08" },
    { id: 3, title: "AtCoder 入茶記事", summary: "半年間やったこと", link: "/article2", image: AtcoderBrownImage, date: "2024-05-21" },
    { id: 4, title: "R6 IPA春季試験", summary: "vs情報処理安全確保支援士（２）", link: "/article1", image: scImage, date: "2024-07-04" },
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <h1 className="blog-title">Blog Articles
            </h1>
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
                        </div>
                        <Link to={article.link} className="read-more-button">Read</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;