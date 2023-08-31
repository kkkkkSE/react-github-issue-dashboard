import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import routes from './routes';

import store from './stores';

function index() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  const router = createBrowserRouter(routes);

  root.render(
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>,
  );
}

index();
