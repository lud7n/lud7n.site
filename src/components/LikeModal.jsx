import React from 'react';
import './LikeModal.css';

const LikeModal = ({ item, onClose }) => {
  return (
    <div className="like-modal-backdrop" onClick={onClose}>
      <div className="like-modal-content" onClick={e => e.stopPropagation()}>
        <button className="like-modal-close" onClick={onClose}>×</button>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default LikeModal;
