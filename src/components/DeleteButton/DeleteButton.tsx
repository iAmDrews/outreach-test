import * as React from 'react';
import { Button, Tooltip, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledDeleteButton = styled(Button)({
  minWidth: 'auto',
  width: 25,
  height: 25,
  borderRadius: '50%',
  padding: 0,
});

interface DeleteButtonprops {
  handleDeleteNote: () => void;
};

export const DeleteButton: React.FC<DeleteButtonprops> = ({ handleDeleteNote }) => (
  <Tooltip
    title="Delete"
    placement='bottom-end'
    componentsProps={{
      tooltip: {
        sx: {
          boxShadow: 'rgba(0, 0, 0, 0.3) 0 2px 10px',
          fontSize: 14,
          padding: 1,
          color: 'info.dark',
          bgcolor: 'info.main',
          '& .MuiTooltip-arrow': {
            color: 'info.main',
          },
        }
      }
    }}
    arrow
  >
    <StyledDeleteButton
      color='primary'
      variant='contained'
      onClick={handleDeleteNote}
      sx={{ boxShadow: 'none' }}
    >
      <ArrowDropDownIcon fontSize='small' color='info' />
    </StyledDeleteButton>
  </Tooltip>
)