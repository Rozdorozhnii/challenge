import React from 'react';

import { Message } from '../../Message';
import './Communication.scss';

const messages: Message[] = [
  {
    id: 1,
    content: 'Hello, I\'m John, how may I help you?',
    senderId: 123,
  },
  {
    id: 2,
    content: 'I\'d like to check my order status.',
    senderId: 111,
  },
  {
    id: 3,
    content: 'No problem, please provide me with your order ID.',
    senderId: 123,
  },
  {
    id: 4,
    content: 'My order ID is GQ34566',
    senderId: 111,
  },
  {
    id: 5,
    content: null,
    senderId: 123,
  },
];

export const Communication: React.FC = () => {
  return (
    <div className="header__communication communication">
      {messages.map(message => (
        <Message
          key={message.id}
          content={message.content}
          senderId={message.senderId}
        />
      ))}
    </div>
  );
};
