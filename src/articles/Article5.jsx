import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTemplate.css';

const Article4 = () => {
    return (
        <div className="article-template">

            <main className="article-template-content">
                <br /><br /><br /><br />
                <h1 className="article-template-title">デザイン（笑）しか</h1>
                <p className="article-template-date">2024/11/19</p>
                <br /><br /><br /><br />
                <p>情報デザインってなんなんだろう</p>
                <br /><br />
                <p>2年生になってデザインコースに所属して、少しずつ少しずつ、授業でデザインの知識を身につけてきた「感」はあるけど</p>
                <br /><br />
                <p>情報デザインの本質を前にして足踏みしているだけのような感覚に苛まれています</p>
                <br /><br />
                <p>例えば、スライド１つにしても</p>
                <br /><br />
                <p>フォントルール、トンマナ、配色などに気を遣ってぱっと見で「粋な」ページを作ることにはだんだん慣れてきた気がしています</p>
                <br /><br />
                <p>もちろん、それもだいじなことだと思うけど</p>
                <br /><br />
                <p>でも、受け取り手を最優先にした上で見返してみると、理解に苦しむレイアウトだったり、視線誘導が適切でなかったり、むずかしい言葉で煙に巻いてカッコつけてるような</p>
                <br /><br />
                <p>「見た目で無理やり惹きつける」デザインが得意になってしまったなぁ、と思います</p>
                <br /><br />
                <p>情報をデザインするって、難しい</p>
            </main >

            <footer className="article-template-footer">
                <Link to="/blog" className="article-template-back-to-blog">Back to Blog List</Link>
            </footer>
            <br /><br />
        </div >
    );
};

export default Article4;