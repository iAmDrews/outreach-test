import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { NotesTimeLineDefaultItem, NotesTimeLineItem } from '../NotesTimeLineItem';
import { Note } from '../../types';

interface NotesTimeLineContainerProps {
  contactPerson: string;
  user: string;
};

export const NotesTimeLineContainer: React.FC<NotesTimeLineContainerProps> = ({ contactPerson, user }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const handleCreateNotes = (note: Note) => {
    setNotes((prevNotes: Note[]) => [...prevNotes, note])
  }

  const handleDeleteNote = (id: string) => {
    setNotes((prevNotes: Note[]) => prevNotes.filter((note: Note) => note.id !== id))
  }

  return (
    <Timeline position='right'>
      <NotesTimeLineDefaultItem user={user} contactPerson={contactPerson} handleCreateNotes={handleCreateNotes} />
      {notes.map((note) => (
        <NotesTimeLineItem key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
    </Timeline>
  );
}
