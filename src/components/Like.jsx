import React, { useState } from 'react';
import LikeModal from './LikeModal';
import './Like.css';

const likeItems = [
  { id: 'cp', title: 'Competitive Programming', content: 'I enjoy solving algorithm problems on AtCoder and LeetCode. I use C++ and always aim for optimal solutions.' },
  { id: 'idol', title: 'Idol', content: 'I love =LOVE and Maika Sasaki. Their concerts are emotional, energetic, and unforgettable.' },
  { id: 'qualification', title: 'Qualifications', content: 'I study for various certifications like FE, SC, and more. I love learning across disciplines.' },
];

const Like = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="like-page">
      <h1 className="like-title">My Favorites</h1>
      <div className="like-buttons">
        {likeItems.map(item => (
          <button key={item.id} className="like-button" onClick={() => setActiveItem(item)}>
            {item.title}
          </button>
        ))}
      </div>

      {activeItem && (
        <LikeModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </div>
  );
};

export default Like;
