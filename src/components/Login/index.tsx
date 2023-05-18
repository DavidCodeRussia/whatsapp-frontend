import { useNavigate } from 'react-router-dom';
import { Formik, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useAppDispatch } from '../../reduxToolkit/store';
import { setData } from '../../reduxToolkit/authorizationSlice';

import * as Yup from 'yup';
import * as svg from '../../assets/svg';

import s from './Login.module.scss';

interface MyFormValues {
  idInstance: string;
  apiTokenInstance: string;
  phoneNumber: string;
}

export const Login = () => {
  const initialValues: MyFormValues = { idInstance: '', apiTokenInstance: '', phoneNumber: '' };
  const validationSchema = Yup.object().shape({});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className={s.backgroundTop}></div>
      <div className={s.landingWrapper}>
        <div className={s.landingHeader}>
          <svg.WhatsAppLogo />
          <div className={s.landingHeaderTitle}>WhatsApp Web</div>
        </div>
        <div className={s.landingWindow}>
          <div className={s.landingWindowInner}>
            <div className={s.landingWindowTitle}>Используйте WhatsApp на компьютере</div>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  dispatch(setData(values));
                  resetForm();
                  navigate('/chat');
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Field
                        type="text"
                        id={'idInstance'}
                        name={'idInstance'}
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label={'idInstance'}
                      />
                    </div>
                    <div className={s.apiTokenField}>
                      <Field
                        type="text"
                        id={'apiTokenInstance'}
                        name={'apiTokenInstance'}
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label={'apiTokenInstance'}
                      />
                    </div>
                    <div className={s.apiTokenField}>
                      <Field
                        type="text"
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label={'Phone number companion'}
                      />
                    </div>
                    <Button variant="outlined" type="submit">
                      Отправить
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
