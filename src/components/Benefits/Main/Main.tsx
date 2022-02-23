import React from 'react';

import { StatsCard } from '../../StatsCard';
import { LinkButton } from '../../LinkButton';
import DidYouKnow from '../../../images/Did_you_know.svg';
import './Main.scss';

const stats : StatsCard[] = [
  {
    id: 1,
    rate: '17-30%',
    title: 'Decrease in costs',
    description: 'Save costs on agent per month with the right pricing plan',
  },
  {
    id: 2,
    rate: '20%',
    title: 'Conversion rate increase',
    description: 'Empower your sales team with online chat and increase sales',
  },
  {
    id: 3,
    rate: '73%',
    title: 'Higher satisfaction rates',
    description: 'Improve customer satisfaction and decrease cart abandonment',
  },
];

export const Main: React.FC = () => {
  return (
    <div className="benefits__main main">
      <div className="main__info">
        <p className="main__tag">
          Helpdesk benefits
        </p>
        <h3 className="main__title">
          How can live chat software help your business?
        </h3>
        <p className="main__content">
          Chat conversations can help your contact center improve your sales
          process and empower your online businesses
        </p>
        <img
          className="main__img"
          src={DidYouKnow}
          alt="Info graphics"
        />
      </div>
      <div className="main__benefits">
        {stats.map(item => (
          <StatsCard
            key={item.id}
            rate={item.rate}
            title={item.title}
            description={item.description}
          />
        ))}
        <LinkButton>
          Make your business goals a reality
        </LinkButton>
      </div>
    </div>
  );
};
