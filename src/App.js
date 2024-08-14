import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SkillPage from './components/SkillPage';
import Works from './components/Works';
import Like from './components/Like';
import Article1 from './articles/Article1';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/page_01" element={<Page01 />} />
          <Route path="/page_02" element={<Page02 />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/like" element={<Like />} />
          <Route path="/article1" element={<Article1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;