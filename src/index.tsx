import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Reset } from 'styled-reset';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import routes from './routes';

function index() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  const router = createBrowserRouter(routes);

  root.render(
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
}

index();
