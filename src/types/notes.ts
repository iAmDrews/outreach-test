export enum NoteType {
  MESSAGE = 'message',
  PHONE = 'phone',
  COFFE = 'coffe',
  BEER = 'beer',
  MEETING = 'meeting',
};

export interface Note {
  id: string;
  timestamp: number;
  type: NoteType;
  currentUser: string;
  currentContactPerson: string;
  title: string;
  description?: string;
};