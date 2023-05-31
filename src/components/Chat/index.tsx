import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import * as svg from '@assets/svg';
import { Message } from '../Message';
import {
  getAuthorization,
  getApiTokenInstance,
  getpPhoneNumber,
  getMessages,
} from '@redux/selectors';
import { useGetNotificationQuery } from '@api/apiMessageSlice';
import { useAppDispatch } from '@redux/store';
import { setMessages } from '@redux/messagesSlice';
import { useSendMessageMutation, useReadNotificationMutation } from '@api/apiMessageSlice';

import s from './Chat.module.scss';

interface MyFormValues {
  message: string;
}

interface TMessage {
  isMe: boolean;
  data: string;
}

export const Chat = () => {
  const idInstance = useSelector(getAuthorization);
  const apiTokenInstance = useSelector(getApiTokenInstance);
  const phoneNumber = useSelector(getpPhoneNumber);
  const messages = useSelector(getMessages);
  const dispatch = useAppDispatch();
  const [sendMessage] = useSendMessageMutation();
  const [readNotification] = useReadNotificationMutation();

  const { data, isSuccess } = useGetNotificationQuery(
    { idInstance, apiTokenInstance },
    {
      pollingInterval: 5000,
    },
  );

  const initialValues: MyFormValues = { message: '' };
  const validationSchema = Yup.object().shape({});

  useEffect(() => {
    if (data && data?.body?.messageData?.textMessageData?.textMessage?.length > 0) {
      dispatch(
        setMessages({
          isMe: false,
          data: data.body.messageData.textMessageData.textMessage,
        }),
      );
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      readNotification({
        idInstance,
        apiTokenInstance,
        receiptId: data?.receiptId,
      });
    }
  }, [isSuccess, readNotification, idInstance, apiTokenInstance, data?.receiptId]);

  return (
    <>
      <div className={s.backgroundTop}></div>
      <div className={s.landingWrapper}>
        <div className={s.landingWindow}>
          <div className={s.landingWindowInner}>
            {messages.map((item: TMessage, index: number) => {
              return <Message key={index} text={item.data} isMe={item.isMe} />;
            })}
          </div>
          <div className={s.landingWindowForm}>
            <svg.Smile />
            <svg.Clip />

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                console.log(values);
                await sendMessage({
                  idInstance,
                  apiTokenInstance,
                  body: {
                    chatId: `${phoneNumber}@c.us`,
                    message: values.message,
                  },
                });
                dispatch(
                  setMessages({
                    isMe: true,
                    data: values.message,
                  }),
                );
                resetForm();
              }}>
              {({ values, handleSubmit }) => (
                <form className={s.landingWindowFormInner} onSubmit={handleSubmit}>
                  <Field className={s.landingWindowInput} type="text" id="message" name="message" />
                  {values.message.length !== 0 ? (
                    <button type="submit">
                      <svg.ArrowRight />
                    </button>
                  ) : (
                    <button>
                      <svg.Microphone />
                    </button>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
