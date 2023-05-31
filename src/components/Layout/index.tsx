import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getMessages } from '@redux/selectors';

export const Layout = () => {
  const messages = useSelector(getMessages);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current && messages?.length > 0) {
      localStorage.setItem('messages', JSON.stringify(messages));
    }
    isMounted.current = true;
  }, [messages]);

  return <Outlet />;
};
