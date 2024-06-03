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
            <img src={profileImage} className="fadeIn" style={{ width: '100vw', height: '100vh', objectFit: 'cover', borderRadius: '0', position: 'fixed', top: '0', left: '0', zIndex: '-1', opacity: '1.0' }} />
            <br /><br /><br /><br /><br /><br />
            <div className="text-center">
                <h1 style={{ letterSpacing: '4px', fontWeight: '380' }}>Blog</h1>
                <br /><br />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {articles.map(article => (
                        <div key={article.id} className="article-container">
                            <h2 className="article-title">{article.title}</h2>
                            <img src={scImage} alt={article.title} className="article-image" />
                            <p>{article.summary}</p>
                            <Link to={article.link} className="view-article-button">View</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        // <section class="page-section" id="article">
        //     <div className="container text-center">
        //         <br /><br /><br /><br /><br /><br />
        //         <h4 class="section-subheading text-muted mb-5">
        //             記事一覧
        //         </h4>

        //         <div class="row text-center">
        //             <div class="col-md-4 services">
        //                 <img src={mireiImage} />
        //                 <h5 class="my-3"><p>R6 情報処理安全確保支援士</p></h5>
        //                 <p>
        //                     <Link to="/page01">記事を読む</Link>
        //                 </p>
        //             </div>
        //             <div class="col-md-4">
        //                 <img src={copypenImage} />
        //                 <h5 class="my-3"><p>R6 情報処理安全確保支援士</p></h5>
        //                 <p>
        //                     <Link to="/page01">記事を読む</Link>
        //                 </p>
        //             </div>
        //             <div class="col-md-4">
        //                 <img src={copypenImage} />
        //                 <h5 class="my-3"><p>R6 情報処理安全確保支援士</p></h5>
        //                 <p>
        //                     <Link to="/page01">記事を読む</Link>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section >
    )
}

export default BlogPage;