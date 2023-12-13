import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { Note } from '../../types';
import { getNoteIconByType } from '../../utils';
import { StyledPaper } from '../../common-styles';
import { DeleteButton } from '../DeleteButton';
import ReactTimeAgo from 'react-time-ago';

interface NotesTimeLineItemProps {
  note: Note;
  handleDeleteNote: (id: string) => void;
};

export const NotesTimeLineItem: React.FC<NotesTimeLineItemProps> = ({ note, handleDeleteNote }) => {
  const [isVisibleDeleteButton, setIsVisibleDeleteButton] = React.useState<boolean>(false);
  const {
    type,
    timestamp,
    currentUser,
    currentContactPerson,
    title,
    description,
    id,
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
        <ReactTimeAgo date={timestamp} locale="en-US" timeStyle='twitter' />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot variant='outlined' sx={{ margin: 0 }}>
          {Icon && <Icon color='secondary' />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        onMouseOver={() => setIsVisibleDeleteButton(true)}
        onMouseOut={() => setIsVisibleDeleteButton(false)}
      >
        <StyledPaper>
          <Box display='flex' justifyContent='space-between' alignItems='center' minHeight={25}>
            <div>
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
            </div>
            {isVisibleDeleteButton && <DeleteButton handleDeleteNote={() => handleDeleteNote(id)} />}
          </Box>
        </StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}