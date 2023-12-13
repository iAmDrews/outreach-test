import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { NotesTypeItems } from '../NotesTypeItems';
import { NoteType } from '../../../types';

const mockHandleSelectedNoteType = jest.fn();
const selectedNoteType = NoteType.BEER;

describe('#NotesTypeItems', () => {
  it('should select item and call mock with the expected value', async () => {
    render(<NotesTypeItems selectedNoteType={selectedNoteType} handleSelectedNoteType={mockHandleSelectedNoteType} />);

    const toggleButton = screen.getByRole('button', { name: selectedNoteType });

    userEvent.click(toggleButton);

    expect(mockHandleSelectedNoteType).toHaveBeenCalledTimes(1);
    expect(mockHandleSelectedNoteType).toHaveBeenCalledWith(selectedNoteType);
    expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
  });
})