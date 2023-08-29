import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

function main() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  const router = createBrowserRouter(routes);

  root.render(
    <RouterProvider router={router} />,
  );
}

main();
