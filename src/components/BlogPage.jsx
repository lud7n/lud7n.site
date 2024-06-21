import React, { useState, useEffect } from 'react';
import profileImage from "../Images/nanaka.jpg";
import articles from '../data/articles';
import { Link } from 'react-router-dom';
import scImage from "../Images/SC.jpg";
// import mireiImage from "../Images/mireshien.jpg";
// import { Link } from "react-router-dom";
// import copypenImage from "../Images/copypen.jpg";

const BlogPage = () => {

    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <div className="text-center">
                <h1 style={{ letterSpacing: '4px', fontWeight: '380' }}>Blog</h1>
                <br /><br />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {articles.map(article => (
                        <div key={article.id} className="article-container">
                            <h2 style={{ letterSpacing: '2px', fontWeight: '180' }} className="article-title">{article.title}</h2>
                            <img src={scImage} alt={article.title} className="article-image" />
                            <p>{article.summary}</p>
                            <Link to={article.link} className="view-article-button">View</Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BlogPage;