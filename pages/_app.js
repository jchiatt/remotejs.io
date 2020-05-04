import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/global.css';

const theme = {
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '960px',
    lg: '1280px',
    xl: '1440px',
  },
  colors: {
    primary: '#f97165',
    secondary: '#1c1e2a',
    white: '#ffffff',
    black: '#171717',
    darkGray: '#202123',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
