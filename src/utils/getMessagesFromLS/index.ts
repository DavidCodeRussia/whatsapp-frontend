export const getMessagesFromLS = () => {
  const messages = localStorage.getItem('messages');

  return messages && JSON.parse(messages);
};
