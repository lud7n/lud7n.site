import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Page_01 from './components/Page_01';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SkillPage from './components/SkillPage';
import Works from './components/Works';
import Like from './components/Like';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/page_01" element={<Page_01 />} />

          <Route path="/skill" element={<SkillPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
