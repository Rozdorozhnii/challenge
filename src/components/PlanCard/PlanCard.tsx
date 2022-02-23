import React from 'react';
import cn from 'classnames';

import './PlanCard.scss';

export const PlanCard: React.FC<PlanCardToRender> = ({
  isChatIncluded,
  name,
  description,
  amount,
}) => {
  return (
    <div className="plan-card">
      <h4
        className={cn('plan-card__title', {
          'plan-card__title--with-chat': isChatIncluded,
          'plan-card__title--without-chat': !isChatIncluded,
        })}
      >
        {name}
      </h4>
      <p className="plan-card__description">
        {description}
      </p>
      <p className="plan-card__amount">
        {amount}
      </p>
      <a
        className="plan-card__card"
        href="/"
      >
        Try it
      </a>
    </div>
  );
};
