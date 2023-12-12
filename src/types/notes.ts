export enum NoteType {
  MESSAGE = 'message',
  PHONE = 'phone',
  COFFE = 'coffe',
  BEER = 'beer',
  MEETING_NOTE = 'meeting note',
}

export interface Note {
  id: string;
  timestamp: string;
  type: NoteType;
  currentUser: string;
  currentContactPerson: string;
  title: string;
  description?: string;
}