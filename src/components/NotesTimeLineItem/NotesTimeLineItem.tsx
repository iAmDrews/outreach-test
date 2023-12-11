import * as React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.secondary.light,
  boxShadow: 'none'
}))

export const NotesTimeLineItem: React.FC = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        9:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot variant='outlined' sx={{ margin: 0 }}>
          <FormatListBulletedIcon color='secondary' />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <StyledPaper>Test Line</StyledPaper>
      </TimelineContent>
    </TimelineItem>
  )
}