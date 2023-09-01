import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

import ROUTES from './constants/routes';

import Layout from './components/Layout';

const IssueList = lazy(() => import('./pages/IssueListPage'));
const IssueDetail = lazy(() => import('./pages/IssueDetailPage'));

const routes = [
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Navigate to={ROUTES.ISSUES} /> },
      { path: ROUTES.ISSUES, element: <IssueList /> },
      { path: `${ROUTES.ISSUES}/:id`, element: <IssueDetail /> },
    ],
  },
];

export default routes;
