import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTemplate.css';

const Article1 = () => {
    return (
        <div className="article-template">

            <main className="article-template-content">
                <br /><br /><br /><br />
                <h1 className="article-template-title">ポートフォリオサイト制作のきっかけ</h1>
                <p className="article-template-date">2023/02/04</p>
                <br></br><br /><br /><br /><br />
                <p>はじめまして</p>
                <br></br><br /><br />
                <p>おそらくこの記事を見てくれている人は、僕のことを深く知ってくれていると思うので、自己紹介は伏せておきます。</p>
                <br></br><br /><br />
                <p>今日は、僕がポートフォリオサイトを作ろうとしたきっかけについて少しお話ししようと思います。</p>
                <br></br><br /><br />
                <p>まず、僕は大学の中でも「情報デザインコース」というコースに所属していて、そのコースの学生の大半はポートフォリオ（自分の制作した成果物の記録のこと。以下：PF）を制作する風潮がありました。</p>
                <br></br><br /><br />
                <p>少なからず僕もPFを制作していたのですが、作ってみると自分のセンスの無さに絶望したのです。今まで見てきたPFは先輩のものや、芸大に通う学生のもので、とても一朝一夕で仕上げることのできるクオリティではありませんでした。</p>
                <br></br><br /><br />
                <p>なので、「PFじゃなくて、もっと僕にできる表現方法はないか」と考えていたら、僕の通う大学の学生がWebサイトでポートフォリオを作っていたのです。</p>
                <br></br><br /><br />
                <p>元々エンジニア職を志望していた僕は、デザインソフトでPFを作るよりもこちらの方がアピールできそう！と思いました。</p>
                <br></br><br /><br />
                <p>また、情報系の大学生である自分にはもっと適合しているとも感じます。実際、1年生の時に自分のWebサイトを制作する授業もありました。</p>
                <br></br><br /><br />
                <p>こんな感じで自分のWebサイトを制作し始めたのですが、実はこのWebPFは既に5回ほど作り直していて、一般に向けて公開したのは現在のWebサイトが初めてなのです。</p>
                <br></br><br /><br />
                <p>フロントサイドの言語もだんだん変化してきており、html直書き→html/css→react/jsとなって今に至ります。個人のWebでもreactがめっちゃおすすめですね。</p>
                <br></br><br /><br />
                <p>と、初めての記事はだいぶ堅い感じで書きましたので、こちらを見てくれている企業様はこの記事だけでブラウザバックしていただけると感謝です。</p>
                <br></br><br /><br />
                <p>それではまた〜</p>
                <br></br><br /><br /><br /><br />
            </main>

            <footer className="article-template-footer">
                <Link to="/blog" className="article-template-back-to-blog">Back to Blog List</Link>
            </footer>
            <br /><br />
        </div>
    );
};

export default Article1;