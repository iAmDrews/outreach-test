import * as React from 'react';
import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { StyledButton } from '../../common-styles';

interface EditButtonProps {
  handleIsEditNote: () => void;
};

export const EditButton: React.FC<EditButtonProps> = ({ handleIsEditNote }) => (
  <Tooltip
    title='Edit'
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
      onClick={handleIsEditNote}
      sx={{ boxShadow: 'none' }}
      data-testid='edit-button'
    >
      <EditIcon fontSize='small' color='info' />
    </StyledButton>
  </Tooltip>
)