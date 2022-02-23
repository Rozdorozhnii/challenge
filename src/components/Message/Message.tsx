import React from 'react';
import cn from 'classnames';

import SenderImage from '../../images/fotka.png';
import ReadedImage from '../../images/Read.svg';
import './Message.scss';

export const Message: React.FC<MessageToRender> = ({
  content,
  senderId,
}) => {
  return (
    <div className={cn('communication__message message', {
      message__receiver: senderId === 111,
    })}
    >
      {senderId === 123 && (
        <img
          className="message__sender-img"
          src={SenderImage}
          alt="sender"
        />
      )}
      <div className={cn('message__item', {
        'message__item-sender': senderId === 123,
        'message__item-receiver': senderId === 111,
      })}
      >
        {content || (
          <div className="dot-flashing" />
        )}
        {senderId === 111 && (
          <img
            className="message__readed-img"
            src={ReadedImage}
            alt="readed"
          />
        )}
      </div>
    </div>
  );
};
