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
  const [editableNote, setEditableNote] = React.useState<string | null>(null);

  const handleCreateNotes = (note: Note): void => {
    setNotes((prevNotes: Note[]) => [...prevNotes, note])
  }

  const handleDeleteNote = (id: string): void => {
    setNotes((prevNotes: Note[]) => prevNotes.filter((note: Note) => note.id !== id))
  }

  const handleEditNote = (note: Note) => {
    setNotes((prevNotes: Note[]) => prevNotes.map((prevNote: Note) => {
      if (prevNote.id === note.id) {
        return note;
      } else {
        return prevNote;
      }
    }));

    setEditableNote(null);
  }

  const handleIsEditNote = (id: string) => {
    setEditableNote(id);
  }

  const getSortedNotes = (a: Note, b: Note): number => {
    return b.timestamp - a.timestamp;
  }

  return (
    <Timeline position='right'>
      <NotesTimeLineDefaultItem user={user} contactPerson={contactPerson} handleCreateNotes={handleCreateNotes} />
      {notes.sort(getSortedNotes).map((note) => (
        <NotesTimeLineItem key={note.id} note={note} handleDeleteNote={handleDeleteNote} editableNote={editableNote} handleEditNote={handleEditNote} handleIsEditNote={handleIsEditNote} handleCreateNotes={handleCreateNotes} />
      ))}
    </Timeline>
  );
}
