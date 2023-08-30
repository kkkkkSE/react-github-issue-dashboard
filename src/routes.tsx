import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

import ROUTES from './constants/routes';

import Layout from './components/Layout';

const IssueList = lazy(() => import('./pages/IssueListPage'));
const Issue = lazy(() => import('./pages/IssuePage'));

const routes = [
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Navigate to={ROUTES.ISSUES} /> },
      { path: ROUTES.ISSUES, element: <IssueList /> },
      { path: `${ROUTES.ISSUES}/:id`, element: <Issue /> },
    ],
  },
];

export default routes;
