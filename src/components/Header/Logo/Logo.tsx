import React from 'react';

import Airbus_logo from '../../../images/Airbus.svg';
import Forbes_logo from '../../../images/Forbes.svg';
import Nascar_logo from '../../../images/Nascar.svg';
import USC_logo from '../../../images/USC.svg';
import { LinkButton } from '../../LinkButton';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="header__logo logo">
      <h1 className="logo__title">
        capture more leads with
        {' '}
        <span className="logo__title-span">live chat</span>
      </h1>

      <h2 className="logo__subtitle">
        take customer engagement to the next level with LiveAgent
      </h2>

      <p className="logo__benefits">
        ✓ No setup fee ✓ Customer service 24/7
        <br />
        ✓ No credit card required ✓ Cancel any time
      </p>
      <div className="logo__interactive">
        <LinkButton>
          Get Started | 14 days free
        </LinkButton>
        <div className="logo__play">
          <button className="logo__button-play" type="button">
          </button>
          <span className="logo__button-play-text">See It In Action</span>
        </div>
      </div>
      <div className="logo__customers">
        <p className="logo__customers-title">used by</p>
        <div className="logo__customers-logos">
          <a
            className="logo__customers-logo"
            href="https://www.airbus.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Airbus_logo}
              alt="Airbus-logo"
            />
          </a>

          <a
            className="logo__customers-logo"
            href="https://www.forbes.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Forbes_logo}
              alt="Forbes_logo"
            />
          </a>

          <a
            className="logo__customers-logo"
            href="https://www.nascar.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Nascar_logo}
              alt="Nascar_logo"
            />
          </a>

          <a
            className="logo__customers-logo"
            href="https://www.usc.edu/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={USC_logo}
              alt="USC_logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
