"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.4rem',
      lineHeight: 1.2,
      '@media (max-width: 600px)': {
        fontSize: '1.3rem',
      },
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      textTransform: 'uppercase',
      '@media (max-width: 600px)': {
        fontSize: '0.7rem',
      },
    },
  },
  palette: {
    primary: {
      main: "#023020",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '32px',
          textTransform: 'uppercase',
          fontSize: '16px',
          padding: '14px 24px',
          '&:disabled': {
            backgroundColor: '#4d6379',
            color: '#ffffff',
          },
          '&:hover': {
            backgroundColor: 'white',
          },
        },
        contained: {
          boxShadow: 'none',
        },
        outlined: {
          border: '2px solid #000',
        },
      },
    },
  },
});

export default theme;
