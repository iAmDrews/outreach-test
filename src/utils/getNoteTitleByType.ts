import { NoteType } from "../types";

export const getNoteTitleByType = (noteType: NoteType | string): string => {
  switch (noteType) {
    case NoteType.MESSAGE:
      return 'added a note to';

    case NoteType.PHONE:
      return 'had a call with';

    case NoteType.COFFE:
      return 'had a coffe with';

    case NoteType.BEER:
      return 'had a beer with';

    case NoteType.MEETING:
      return 'had a meeting with';

    default:
      return '';
  }

}