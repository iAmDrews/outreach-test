import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { NotesTimeLineDefaultItem } from '../NotesTimeLineDefaultItem';

const handleCreateNotesMock = jest.fn();

describe('#NotesTimeLineDefaultItem', () => {
  it('should expands and collapses on focus and blur', async () => {
    render(<NotesTimeLineDefaultItem user='You' contactPerson='Milton Romaguera' handleCreateNotes={handleCreateNotesMock} />);

    const textarea = screen.getByPlaceholderText('Add a note about Milton Romaguera...');
    const collapse = screen.getByTestId('collapse');
    const toggleButtons = screen.getAllByTestId('toggle-button');

    expect(collapse).not.toHaveClass('MuiCollapse-entered');
    expect(toggleButtons).toHaveLength(5);

    act(() => textarea.focus());
    await waitFor(() => {
      expect(collapse).toHaveClass('MuiCollapse-entered');
    });

    act(() => textarea.blur());
    await waitFor(() => {
      expect(collapse).not.toHaveClass('MuiCollapse-entered');
    });
  });

  it('should call mock function on button click with default data', () => {
    render(<NotesTimeLineDefaultItem user='You' contactPerson='Milton Romaguera' handleCreateNotes={handleCreateNotesMock} />);

    const submitBtn = screen.getByText('Submit');
    const textarea = screen.getByPlaceholderText('Add a note about Milton Romaguera...');

    userEvent.type(textarea, 'Some test text');
    userEvent.click(submitBtn);

    expect(handleCreateNotesMock).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue('');
  });
})