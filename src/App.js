import './App.css';
import BlogPage from './jsx/BlogPage';
import Header from './jsx/Header';
import HomePage from './jsx/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SkillPage from './jsx/SkillPage';
import Works from './jsx/Works';
import Like from './jsx/Like';
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';
import ScrollToTop from './jsx/ScrollToTop';
import SocialIcons from './jsx/SocialIcons';
// import Licenses from './jsx/Licenses';
function App() {
  return (
    // ここで各ページのリンクを管理しています
    <Router>
      <ScrollToTop /> {/* ページに遷移した時、トップに戻る */}
      <div className="App">
        <Header />
        <SocialIcons />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/like" element={<Like />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
          <Route path="/article4" element={<Article4 />} />
          <Route path="/article5" element={<Article5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;