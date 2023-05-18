import React from 'react';
import cn from 'classnames';
import s from './Message.module.scss';

type TMessageProps = {
  text: string;
  isMe: boolean;
};

export const Message: React.FC<TMessageProps> = ({ text, isMe }) => {
  return (
    <div
      className={cn(s.message, {
        [s.messageIsMe]: !isMe,
      })}>
      <div className={s.messageContent}>
        <div className={s.messageBubble}>
          <p className={s.messageText}>{text}</p>
        </div>
      </div>
    </div>
  );
};
