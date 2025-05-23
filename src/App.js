import './App.css';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SkillPage from './SkillPage/SkillPage';
import Works from './Works/Works';
import Like from './Like/Like';
import SocialIcons from './SocialIcons/SocialIcons';
// import Licenses from './jsx/Licenses';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SocialIcons />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;