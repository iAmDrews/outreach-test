import { createTheme } from '@mui/material/styles';
import { lightBlue, grey, green, common } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[400]
    },
    secondary: {
      light: grey[200],
      dark: grey[500],
      main: grey[400],
    },
    info: {
      main: common.white,
      dark: common.black
    },
    success: {
      main: green[400]
    }
  },
  spacing: 5,
  typography: {
    body1: {
      textTransform: 'capitalize',
    }
  }
});