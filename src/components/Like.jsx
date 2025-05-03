import React, { useState, useEffect } from 'react';

const ScrollBackgroundColor = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollPercent = Math.min(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight), 1);

  let backgroundColor;
  
  if (scrollPercent < 0.5) {
    // 黒から白への変化（スクロール位置が50%以下）
    backgroundColor = `rgb(${255 * scrollPercent}, ${255 * scrollPercent}, ${255 * scrollPercent})`;
  } else {
    // 白から赤への変化（スクロール位置が50%以上）
    const redPercent = (scrollPercent - 0.5) * 2; // 0.5以上から1までを0から1にスケーリング
    backgroundColor = `rgb(${255}, ${255 - 255 * redPercent}, ${255 - 255 * redPercent})`;
  }

  return (
    <div style={{ height: '2000vh', backgroundColor: backgroundColor }}> {/* 高さを300vhに設定 */}
      <h1 style={{ color: scrollPercent < 0.5 ? 'white' : 'black' }}>Scroll to change background color</h1>
    </div>
  );
};

export default ScrollBackgroundColor;

// test