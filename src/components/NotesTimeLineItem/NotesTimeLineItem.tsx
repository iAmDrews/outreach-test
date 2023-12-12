import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Note } from '../../types';
import { getNoteIconByType } from '../../utils';
import { StyledPaper } from '../../common-styles';

interface NotesTimeLineItemProps {
  contactPerson: string;
  user: string;
  note: Note;
}

export const NotesTimeLineItem: React.FC<NotesTimeLineItemProps> = ({ contactPerson, user, note }) => {
  const Icon = getNoteIconByType(note.type);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align='right'
        variant='body2'
        color='text.secondary'
      >
        {note.timestamp}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot variant='outlined' sx={{ margin: 0 }}>
          {Icon && <Icon color='secondary' />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <StyledPaper>
          Test Line
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}