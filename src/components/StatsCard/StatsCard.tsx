import React from 'react';

import './StatsCard.scss';

export const StatsCard: React.FC<StatsCardToRender> = ({
  rate,
  title,
  description,
}) => {
  return (
    <div className="stats-card">
      <div className="stats-card__rate">
        {rate}
      </div>
      <div className="stats-card__aside">
        <h5 className="stats-card__title">
          {title}
        </h5>
        <p className="stats-card__description">
          {description}
        </p>
      </div>
    </div>
  );
};
