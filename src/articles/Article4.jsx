import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTemplate.css';

const Article4 = () => {
    return (
        <div className="article-template">

            <main className="article-template-content">
                <br /><br /><br /><br />
                <h1 className="article-template-title">アイドルのすすめ</h1>
                <p className="article-template-date">2023/10/08</p>
                <br /><br /><br /><br />
                <p>アイドルに毎日を支えられているみなさん、おつかれさまです</p>
                <br />
                <p>個人的に最近、良いな〜って思うアイドルを紹介するだけのラフなブログです</p>
                <br />
                <p>興味が湧いたら、ぜひぜひ調べてみてください</p>
                <br /><br />
                <p>- iLiFE!</p>
                <br />
                <p>2021年に「アイドルライフスターターパック」でバズってから少しずつ有名になっていっているアイドルです。知ってる人も多いんじゃないかな</p>
                <br />
                <p>iLiFE!はライブがめちゃくちゃ楽しい！ある程度有名なコールを覚えておけば、新規でも汗かいちゃうくらい現場で騒げます</p>
                <br />
                <p>今では武道館公演も単独でやるくらいで、全然地上アイドルと肩を並べられるくらい強いグループだと思ってます</p>
                <br />
                <p>推し曲「sweet timer」「ガンバッテンダー」</p>
                <br /><br />
                <p>- STU48</p>
                <br /><br />
                <p>48系のなかで、瀬戸内に拠点があるグループです</p>
                <br />
                <p>なので海をテーマにした曲が多く、ゆったりした曲調が好きな人は刺さる曲も多いと思います</p>
                <br />
                <p>ライブも中国・四国地方が多くてなかなか行けないのが悔しいですが、いつか行きたいな〜。</p>
                <br />
                <p>背中を押してくれるような歌詞・歌い方がとっても響くんです</p>
                <br />
                <p>推し曲「息をする心」「非全力」</p>
                <br /><br />
                <p>- 透色ドロップ</p>
                <br />
                <p>曲調・歌詞・歌声の全てがハイクオリティなのに、なんで地下なんだろう？って感じているアイドルです</p>
                <br />
                <p>正直、初見のインパクトが強いアイドルソングが流行るこの時代に、あえて王道青春系ソングで真っ向勝負しているのがめっちゃエモい、いつか絶対人気になると思う。</p>
                <br />
                <p>いま、個人的に1番来てるアイドルです。ライブ早く行きたい。</p>
                <br />
                <p>推し曲「最愛」「だけど夏なんて嫌いで」</p>
                <br /><br /><br />
                <p>2024年は日本の女性アイドルが大躍進した年だと思う。2025年は↑が流行ります。</p>
                <br /><br />
                <p>それでは、おやすみなさい</p>
            </main>

            <footer className="article-template-footer">
                <Link to="/blog" className="article-template-back-to-blog">Back to Blog List</Link>
            </footer>
            <br /><br />
        </div>
    );
};

export default Article4;