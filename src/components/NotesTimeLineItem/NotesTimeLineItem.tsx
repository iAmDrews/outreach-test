import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Typography } from '@mui/material';
import { Note } from '../../types';
import { getNoteIconByType } from '../../utils';
import { StyledPaper } from '../../common-styles';

interface NotesTimeLineItemProps {
  note: Note;
}

export const NotesTimeLineItem: React.FC<NotesTimeLineItemProps> = ({ note }) => {
  const {
    type,
    timestamp,
    currentUser,
    currentContactPerson,
    title,
    description
  } = note;

  const Icon = getNoteIconByType(type);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align='right'
        variant='body2'
        color='text.secondary'
      >
        {timestamp}
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
          <Typography fontWeight='bold'>
            <Typography component='span' color='primary.main' fontWeight='inherit'>{currentUser}</Typography>
            <Typography component='span' fontWeight='inherit' marginX={1} textTransform='lowercase'>{title}</Typography>
            <Typography component='span' color='primary.main' fontWeight='inherit'>{currentContactPerson}</Typography>
          </Typography>
          {description && (
            <Typography variant='body2' textTransform='none' marginTop={1}>
              {description}
            </Typography>
          )}
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}