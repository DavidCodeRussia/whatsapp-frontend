import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorization } from '@redux/selectors';

export const RequireAuth = () => {
  const navigate = useNavigate();
  const isAuthorized = useSelector(getAuthorization);

  useEffect(() => {
    if (isAuthorized.length === 0) {
      navigate('/login');
    }
  }, [isAuthorized.length, navigate]);

  return <Outlet />;
};
