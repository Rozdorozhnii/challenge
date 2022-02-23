import React from 'react';

import BackGroundImage from '../../images/AdobeStock_267287110 1.png';
import { Logo } from './Logo';
import { Communication } from './Communication';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="body__header header">
      <img
        src={BackGroundImage}
        alt="Girl writing message"
        className="header__bgimage"
      />
      <div className="header__content">
        <Logo />
        <Communication />
      </div>
    </header>
  );
};
