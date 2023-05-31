import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Login } from '@components/Login';
import { RequireAuth } from '@components/RequireAuth';
import { Chat } from '@components/Chat';
import { Layout } from '@components/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Route>
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
