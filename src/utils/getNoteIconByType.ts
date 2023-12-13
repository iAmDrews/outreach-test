import { NoteType, Icon } from "../types";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PersonIcon from '@mui/icons-material/Person';

export const getNoteIconByType = (noteType: NoteType | string): Icon | null => {
  switch (noteType) {
    case NoteType.MESSAGE:
      return ChatBubbleIcon;

    case NoteType.PHONE:
      return LocalPhoneIcon;

    case NoteType.COFFE:
      return LocalCafeIcon;

    case NoteType.BEER:
      return SportsBarIcon;

    case NoteType.MEETING:
      return PersonIcon;

    default:
      return null;
  }
}