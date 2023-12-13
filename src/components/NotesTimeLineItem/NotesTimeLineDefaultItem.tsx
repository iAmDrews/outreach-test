import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Box, Button, Typography, Collapse, styled } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { NotesTypeItems } from '../NotesTypeItems';
import { Note, NoteType } from '../../types';
import { StyledPaper } from '../../common-styles';
import { v4 as uuid } from "uuid";
import { getNoteTitleByType } from '../../utils';

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
  handleCreateNotes: (note: Note) => void;
};

export const NotesTimeLineDefaultItem: React.FC<NotesTimeLineDefaultItemProps> = ({ contactPerson, user, handleCreateNotes }) => {
  const [textAreaValue, setTextAreaValue] = React.useState<string>('');
  const [selectedNoteType, setSelectedNoteType] = React.useState<NoteType>(NoteType.MESSAGE);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const handleSelectedNoteType = (noteType: NoteType): void => {
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
        <StyledPaper
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        >
          <StyledTextArea
            placeholder={`Add a note about ${contactPerson}...`}
            value={textAreaValue}
            onChange={(event) => setTextAreaValue(event.target.value)}
          />
          <Collapse
            in={isExpanded}
            timeout={200}
            tabIndex={0}
          >
            <Box display='flex' justifyContent='space-between' marginTop={3}>
              <NotesTypeItems
                selectedNoteType={selectedNoteType}
                handleSelectedNoteType={handleSelectedNoteType}
              />
              <Button
                color='success'
                variant='contained'
                sx={{ boxShadow: 'none' }}
                onClick={() => {
                  handleCreateNotes({
                    id: uuid(),
                    timestamp: new Date().getTime(),
                    type: selectedNoteType,
                    currentUser: user,
                    currentContactPerson: contactPerson,
                    title: getNoteTitleByType(selectedNoteType),
                    description: textAreaValue,
                  });

                  //reset values
                  setTextAreaValue('');
                  setSelectedNoteType(NoteType.MESSAGE);
                }}
              >
                <Typography color='info.main'>
                  Submit
                </Typography>
              </Button>
            </Box>
          </Collapse>
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}