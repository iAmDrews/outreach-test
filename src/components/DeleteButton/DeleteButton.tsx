import * as React from 'react';
import { Tooltip } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { StyledButton } from '../../common-styles';

interface DeleteButtonprops {
  handleDeleteNote: () => void;
};

export const DeleteButton: React.FC<DeleteButtonprops> = ({ handleDeleteNote }) => (
  <Tooltip
    title='Delete'
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
    <StyledButton
      color='primary'
      variant='contained'
      onClick={handleDeleteNote}
      sx={{ boxShadow: 'none' }}
      data-testid='delete-button'
    >
      <ArrowDropDownIcon fontSize='small' color='info' />
    </StyledButton>
  </Tooltip>
)