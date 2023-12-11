import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      light: grey[200],
      main: grey[400],
    },
  },
  spacing: 5,
});