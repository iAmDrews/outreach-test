import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { NotesTimeLineItem } from '../NotesTimeLineItem/NotesTimeLineItem';

export const NotesTimeLineContainer: React.FC = () => {
  return (
    <form>
      <Timeline position="right">
        <NotesTimeLineItem />
      </Timeline>
    </form>
  );
}
