import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTemplate.css';

const Article2 = () => {
    return (
        <div className="article-template">

            <main className="article-template-content">
                <br /><br /><br /><br />
                <h1 className="article-template-title">競プロとかいうマジでおもんないゲーム</h1>
                <p className="article-template-date">2023/10/08</p>
                <br /><br /><br /><br />
                <p>競プロって知ってますか？</p>
                <br /><br />
                <p>（Atcoder公式サイトより）</p>
                <br /><br />
                <p>決められた条件のもとで与えられた問題、課題をプログラミングを用いて解決し、その過程や結果を競うものを競技プログラミングといいます。</p>
                <br /><br />
                <p>様々なジャンルの出題がされますが、プログラミングや思考力、数学力、知識を活用します。</p>
                <br /><br />
                <p>そのうち、アルゴリズムやヒューリスティックというジャンルについてはAtCoderやCodeforces等で定期的にコンテストが開かれており、その結果によってレーティングと呼ばれる実力指数が変化します。</p>
                <br /><br />
                <p>コンテストの開始時間に問題が一斉に公開されます。それまでに出されたことのない問題が出題され、どのように解決するかが問われます。</p>
                <br /><br />
                <p>---</p>
                <br /><br />
                <p>僕は日本で1番規模の大きいAtCoderというコンテスト（弊大生なら知ってる人も多いんじゃないかな）に毎週参加しているわけなのですが、これを始めて1年弱、ずっと思っていることがあります。</p>
                <br /><br />
                <p>マジで面白くないです。</p>
                <br /><br />
                <p>全然問題が解けるようにならないし、大学で学んだプログラミングなんてほとんど役立ちません。（AtCoderのレベルが高すぎて）</p>
                <br /><br />
                <p>Xで有名な競プロerはたくさんいるのですが、みんな強いひとばっかりで、心を折られた競プロerも多いんじゃないでしょうか。</p>
                <br /><br />
                <p>弊学生でも「AtCoder始めてみた！」みたいなことを呟いた1ヶ月後にはアカウント自体消してる、みたいな人をたくさん見てきました。</p>
                <br /><br />
                <p>ここまで記事を見てくれた人にはただのAtCoderアンチのように見えていると思うし、なんで続けてんの？みたいに感じる人も多いと思います。</p>
                <br /><br />
                <p>これだけ面白くないとゴネている僕が競プロを続けている理由は、「これ以上にメリットがたくさんあるから」なのです。</p>
                <br /><br />
                <p>ここからは競プロをベタ褒めするフェーズに突入しますので、競プロを始めてみたい！という人はここからの記事を見てください。（遅い）</p>
                <br /><br />
                <p>まず、競プロのメリットを列挙します。</p>
                <br /><br />
                <p>就活に強い</p>
                <br /><br />
                <p>競プロは、エンジニア職で就活をしよう、と考えている人にはめちゃくちゃおすすめです。コンテストで培われるアルゴリズム実装能力及び思考力は、現場でも活用される部分が多いです。実際、僕も就活で精一杯アピールしてきました。</p>
            </main>

            <footer className="article-template-footer">
                <Link to="/blog" className="article-template-back-to-blog">Back to Blog List</Link>
            </footer>
            <br /><br />
        </div>
    );
};

export default Article2;