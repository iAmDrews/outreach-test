import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PersonIcon from '@mui/icons-material/Person';
import { NoteType, Icon } from '../../types';
import { getNoteIconByType } from '../getNoteIconByType';

describe('#getNoteIconByType', () => {
  const testCases: [NoteType | string, Icon | null][] = [
    [NoteType.MESSAGE, ChatBubbleIcon],
    [NoteType.PHONE, LocalPhoneIcon],
    [NoteType.COFFE, LocalCafeIcon],
    [NoteType.BEER, SportsBarIcon],
    [NoteType.MEETING, PersonIcon],
    ['test', null],
  ];

  it.each(testCases)(
    'should return expected icon for %s note',
    (noteType, expectedIcon) => {
      const result = getNoteIconByType(noteType);
      expect(result).toBe(expectedIcon);
    }
  );
});