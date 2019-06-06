import * as React from 'react';
import '../../styles/navigation.css';

export const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation-item"><a href="/">Home</a></li>
      <li className="navigation-item"><a href="/">About</a></li>
      <li className="navigation-item"><a href="/gallery">Gallery</a></li>
    </ul>
  );
};
