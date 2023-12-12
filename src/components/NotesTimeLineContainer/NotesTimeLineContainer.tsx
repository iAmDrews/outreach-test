import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { NotesTimeLineDefaultItem, NotesTimeLineItem } from '../NotesTimeLineItem';
import { Note } from '../../types';

interface NotesTimeLineContainerProps {
  contactPerson: string;
  user: string;
}

export const NotesTimeLineContainer: React.FC<NotesTimeLineContainerProps> = ({ contactPerson, user }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const handleNotes = (note: Note) => {
    setNotes((prevNote: Note[]) => [...prevNote, note])
  }

  return (
    <Timeline position='right'>
      <NotesTimeLineDefaultItem user={user} contactPerson={contactPerson} handleNotes={handleNotes} />
      {notes.map((note) => (
        <NotesTimeLineItem key={note.id} note={note} />
      ))}
    </Timeline>
  );
}
