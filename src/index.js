import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from '@/App';
import { GlobalStyle, ModalProvider, theme } from '@/shared';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <App />
      <GlobalStyle />
    </ModalProvider>
  </ThemeProvider>,
);
