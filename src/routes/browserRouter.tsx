import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '@/pages/auth/AuthLayout';
import ErrorPage from '@/components/errorPage';
import Layout from '@/components/layout';
import Redirect from '@/components/layout/Redirect';
import NotFoundPage from '@/components/notfoundPage';
import { webRoutes } from './web';
import loadable from '@loadable/component';
import ProgressBar from '@/components/loader/progressBar';
import RequireAuth from './requireAuth';
import Login from '@/pages/auth/Login';

const errorElement = <ErrorPage />;
const fallbackElement = <ProgressBar />;

const Dashboard = loadable(() => import('@/components/dashboard'), {
  fallback: fallbackElement,
});
const Demo = loadable(() => import('@/pages/demo-pages'), {
  fallback: fallbackElement,
});

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <Redirect />,
    errorElement: errorElement,
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <Login />,
      },
    ],
  },

  // protected routes
  {
    element: (
        <Layout />
    ),
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: webRoutes.demo,
        element: <Demo />,
      },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: errorElement,
  },
]);
