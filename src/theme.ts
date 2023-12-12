import { createTheme } from '@mui/material/styles';
import { lightBlue, grey, common } from '@mui/material/colors';

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
    }
  },
  spacing: 5,
});