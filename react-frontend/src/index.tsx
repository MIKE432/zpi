import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentation/App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './application/store/UserProvider/UserProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, Theme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
};

export enum ThemeVariant {
  LIGHT = 'light'
}

const lightVariant = createTheme({
  palette: {
    mode: 'light'
  }
});

const getVariant = (variant: ThemeVariant): Theme => {
  return {
    light: lightVariant
  }[variant];
};

const ThemeProviderWrapper: FC = ({ children }) => {
  const variant = ThemeVariant.LIGHT;
  return <ThemeProvider theme={getVariant(variant)}>{children}</ThemeProvider>;
};

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProviderWrapper>
      <QueryClientProvider client={new QueryClient(queryClientOptions)}>
        <UserProvider>
          <App />
        </UserProvider>
      </QueryClientProvider>
    </ThemeProviderWrapper>
  </StyledEngineProvider>,
  document.getElementById('root')
);

reportWebVitals();
