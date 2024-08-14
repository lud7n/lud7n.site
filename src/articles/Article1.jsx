import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTemplate.css';

const Article1 = () => {
    return (
        <div className="article-template">
            <div className="article-template-wrapper">
                <header className="article-template-header">
                    <h1 className="article-template-title">R6 IPA春季試験</h1>
                    <p className="article-template-date">2024/07/04</p>
                </header>

                <main className="article-template-content">
                    <p>Here you write the main content of the article. Each paragraph should be enclosed in &lt;p&gt; tags.</p>

                    <p>For longer articles, you can divide the content into multiple paragraphs.</p>

                    <h2>Subheading</h2>
                    <p>You can use subheadings in the article to organize the content.</p>

                    <ul>
                        <li>You can also use bullet point lists</li>
                        <li>They're useful for listing important points</li>
                    </ul>

                    <p>If needed, you can add <a href="https://example.com" target="_blank" rel="noopener noreferrer">external links</a> to the article.</p>
                </main>

                <footer className="article-template-footer">
                    <Link to="/blog" className="article-template-back-to-blog">Back to Blog List</Link>
                </footer>
            </div>
        </div>
    );
};

export default Article1;