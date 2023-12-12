import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.secondary.light,
  boxShadow: 'none',
  lineHeight: 0,
}))