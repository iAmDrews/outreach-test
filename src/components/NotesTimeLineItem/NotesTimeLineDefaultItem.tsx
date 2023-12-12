import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Box, Button, Typography, styled } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { NotesTypeItems } from '../NotesTypeItems';
import { NoteType } from '../../types';
import { StyledPaper } from '../../common-styles';

const StyledTextArea = styled('textarea')(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.dark}`,
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.info.main,
  resize: 'none',
  outline: 'none',
  padding: theme.spacing(1, 2),
  transition: 'all .2s linear',
  '&:focus, &:hover': {
    border: `2px solid ${theme.palette.success.main}`
  }
}));

interface NotesTimeLineDefaultItemProps {
  contactPerson: string;
  user: string;
}

export const NotesTimeLineDefaultItem: React.FC<NotesTimeLineDefaultItemProps> = ({ contactPerson, user }) => {
  const [selectedNoteType, setSelectedNoteType] = React.useState<NoteType>(NoteType.MESSAGE);

  const handleSelectedNoteType = (noteType: NoteType) => {
    setSelectedNoteType(noteType);
  }

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot variant='outlined' sx={{ margin: 0 }}>
          <FormatListBulletedIcon color='secondary' />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <StyledPaper>
          <StyledTextArea placeholder={`Add a note about ${contactPerson}...`} />
          <Box display='flex' justifyContent='space-between' marginTop={2}>
            <NotesTypeItems selectedNoteType={selectedNoteType} handleSelectedNoteType={handleSelectedNoteType} />
            <Button color='success' variant='contained'>
              <Typography color='white'>Submit</Typography>
            </Button>
          </Box>
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}