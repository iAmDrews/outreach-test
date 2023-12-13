import * as React from 'react';
import { styled } from '@mui/material';
import { Stack, } from '@mui/system';
import { NoteType } from '../../types';
import { getNoteIconByType } from '../../utils';
import { ToggleButton } from '@mui/material';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  height: 32,
  width: 32,
  backgroundColor: theme.palette.info.main,
  borderRadius: '50%',
  transition: 'all .2s linear',
  border: `1px solid ${theme.palette.secondary.main}`,
  '&:hover, &.Mui-selected, &.Mui-selected:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    '.MuiSvgIcon-root': {
      color: theme.palette.info.main
    },
  },
}));

interface NotesTypeItemsProps {
  selectedNoteType: NoteType;
  handleSelectedNoteType: (noteType: NoteType) => void;
};

export const NotesTypeItems: React.FC<NotesTypeItemsProps> = ({ selectedNoteType, handleSelectedNoteType }) => {
  return (
    <Stack direction='row' spacing={1}>
      {
        Object.values(NoteType).map((noteType) => {
          const NoteIcon = getNoteIconByType(noteType);

          return (
            <StyledToggleButton
              key={noteType}
              value={noteType}
              selected={noteType === selectedNoteType}
              onChange={() => handleSelectedNoteType(noteType)}
              data-testid='toggle-button'
              aria-label={noteType}
            >
              {NoteIcon && <NoteIcon color='secondary' fontSize='small' />}
            </StyledToggleButton>
          )
        })
      }
    </Stack>
  );
}