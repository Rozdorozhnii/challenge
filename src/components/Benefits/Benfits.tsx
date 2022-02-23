import React from 'react';

import { Pricing } from './Pricing';
import { Main } from './Main';
import './Benefits.scss';

export const Benefits: React.FC = () => {
  return (
    <div className="body__benefits benefits">
      <Pricing />
      <Main />
    </div>
  );
};
