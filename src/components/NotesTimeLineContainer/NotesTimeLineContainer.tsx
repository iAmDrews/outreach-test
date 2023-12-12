import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { NotesTimeLineDefaultItem } from '../NotesTimeLineItem';

interface NotesTimeLineContainerProps {
  contactPerson: string;
  user: string;
}

export const NotesTimeLineContainer: React.FC<NotesTimeLineContainerProps> = ({ contactPerson, user }) => {
  return (
    <Timeline position='right'>
      <NotesTimeLineDefaultItem user={user} contactPerson={contactPerson} />
    </Timeline>
  );
}
