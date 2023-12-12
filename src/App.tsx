import React from 'react';
import { NotesTimeLineContainer } from './components';

const App: React.FC = () => {
  const CONTACT_PERSON = 'Milton Romaguera';
  const USER = 'You';

  return (
    <NotesTimeLineContainer contactPerson={CONTACT_PERSON} user={USER} />
  );
}

export default App;
