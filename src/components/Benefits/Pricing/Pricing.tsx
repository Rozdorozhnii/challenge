import React from 'react';

import { LinkButton } from '../../LinkButton';
import { PlanCard } from '../../PlanCard';
import './Pricing.scss';

const plans: PlanCard[] = [
  {
    id: 1,
    isChatIncluded: false,
    name: 'Ticket',
    description: 'For Small Businesses and Entrepreneurs',
    amount: '15$ / mo',
  },
  {
    id: 2,
    isChatIncluded: true,
    name: 'Ticket+Chat',
    description: 'For Medium-sized Businesses and Professional Agencies',
    amount: '29$ / mo',
  },
];

export const Pricing: React.FC = () => {
  return (
    <div className="benefits__pricing pricing">
      <div className="pricing__detail">
        <p className="pricing__tag">
          Best price
        </p>
        <h3 className="pricing__title">
          A fair knowledge base software
        </h3>
        <p className="pricing__content">
          Creating your own knowledge center doesn’t have to be an expensive feat. LiveAgent offers
          multiple pricing plans that cater to all support needs. Get our standalone knowledge base
          software with the least expensive plan or take a look at other plans that offer additional
          features.
        </p>
        <LinkButton styleName="pricing__link">
          Pricing
        </LinkButton>
      </div>

      <div className="pricing__cards">
        {plans.map(plan => (
          <PlanCard
            key={plan.id}
            isChatIncluded={plan.isChatIncluded}
            name={plan.name}
            description={plan.description}
            amount={plan.amount}
          />
        ))}
      </div>

    </div>
  );
};
