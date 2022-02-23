import React from 'react';

import './LinkButton.scss';

interface Props {
  children?: React.ReactNode;
  styleName?: string;
}

export const LinkButton: React.FC<Props> = (props) => {
  return (
    <a
      className={`linkButton ${props.styleName}`}
      href="/"
    >
      {props.children}
    </a>
  );
};
