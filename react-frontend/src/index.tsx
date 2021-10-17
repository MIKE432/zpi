import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/poppins';
import './index.css';
import App from './presentation/App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './application/store/UserProvider/UserProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
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
    mode: 'light',
    primary: {
      main: '#0288D1',
      light: '#0288D1',
      dark: '#0288D1'
    },
    secondary: {
      main: '#d14a02',
      light: '#d14a02',
      dark: '#d14a02'
    },
    background: {
      default: '#e3f2fd'
    },
    text: {
      primary: '#000'
    }
  }
});

const darkVariant = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0288D1',
      light: '#0288D1',
      dark: '#0288D1'
    },
    secondary: {
      main: '#d14a02',
      light: '#d14a02',
      dark: '#d14a02'
    },
    background: {
      default: '#151515'
    },
    text: {
      primary: '#FFF'
    }
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
    <CssBaseline />
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
