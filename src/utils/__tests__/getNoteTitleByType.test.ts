import { NoteType } from '../../types';
import { getNoteTitleByType } from '../getNoteTitleByType';

describe('#getNoteTitleByType', () => {
  const testCases: [NoteType | string, string][] = [
    [NoteType.MESSAGE, 'added a note to'],
    [NoteType.PHONE, 'had a call with'],
    [NoteType.COFFE, 'had a coffe with'],
    [NoteType.BEER, 'had a beer with'],
    [NoteType.MEETING, 'had a meeting with'],
    ['test', ''],
  ];

  it.each(testCases)(
    'should return expected icon for %s note',
    (noteType, expectedTitle) => {
      const result = getNoteTitleByType(noteType);
      expect(result).toBe(expectedTitle);
    }
  );
});