export enum NoteType {
  MESSAGE = 'message',
  PHONE = 'phone',
  COFFE = 'coffe',
  BEER = 'beer',
  MEETING_NOTE = 'meeting note',
}

export interface Note {
  timestamp: string;
  type: NoteType;
  title: string;
  description: string;
}