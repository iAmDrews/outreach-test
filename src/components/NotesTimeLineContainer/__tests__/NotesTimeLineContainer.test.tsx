import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { NotesTimeLineContainer } from '../NotesTimeLineContainer';
import userEvent from '@testing-library/user-event';
import { NoteType } from '../../../types';

jest.mock('react-time-ago');

describe('#NotesTimeLineContainer', () => {
  it('renders NotesTimeLineContainer component with initial state', () => {
    render(<NotesTimeLineContainer user='You' contactPerson='Milton Romaguera' />);

    const textarea = screen.getByPlaceholderText('Add a note about Milton Romaguera...');
    const svg = screen.getByTestId('FormatListBulletedIcon');

    expect(textarea).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  describe('Actions', () => {
    it('should render new note', () => {
      render(<NotesTimeLineContainer user='You' contactPerson='Milton Romaguera' />);

      const textarea = screen.getByPlaceholderText('Add a note about Milton Romaguera...');
      act(() => textarea.focus());
      userEvent.type(textarea, 'Add new Note');

      const toggleButton = screen.getByRole('button', { name: NoteType.COFFE });
      const submitBtn = screen.getByText('Submit');

      userEvent.click(toggleButton);
      userEvent.click(submitBtn);

      const coffeicons = screen.getAllByTestId('LocalCafeIcon');
      const createdNotes = screen.getAllByTestId('created-note');
      const userText = screen.getByText('You');
      const personText = screen.getByText('Milton Romaguera');
      const titleText = screen.getByText('had a coffe with');
      const descriptionText = screen.getByText('Add new Note');

      expect(createdNotes).toHaveLength(1);
      expect(coffeicons).toHaveLength(2);
      expect(userText).toBeInTheDocument();
      expect(personText).toBeInTheDocument();
      expect(titleText).toBeInTheDocument();
      expect(descriptionText).toBeInTheDocument();
    });

    it('should delete new note', async () => {
      render(<NotesTimeLineContainer user='You' contactPerson='Milton Romaguera' />);

      const textarea = screen.getByPlaceholderText('Add a note about Milton Romaguera...');
      act(() => textarea.focus());
      userEvent.type(textarea, 'Add new Note');

      const toggleButton = screen.getByRole('button', { name: NoteType.COFFE });
      const submitBtn = screen.getByText('Submit');

      userEvent.click(toggleButton);
      userEvent.click(submitBtn);

      const createdNotes = screen.getAllByTestId('created-note');
      const content = screen.getByTestId('content');

      expect(createdNotes).toHaveLength(1);
      expect(content).toBeInTheDocument();

      userEvent.hover(content);

      const deleteButton = screen.getByTestId('ArrowDropDownIcon');
      userEvent.click(deleteButton);

      await waitFor(() => {
        expect(screen.queryByTestId('created-note')).not.toBeInTheDocument();
      });
    })
  })
})