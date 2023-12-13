import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { NotesTimeLineItem } from '../NotesTimeLineItem';
import { NoteType } from '../../../types';

jest.mock('react-time-ago');

const testNote = {
  id: 'test-id',
  type: NoteType.BEER,
  timestamp: 1000,
  currentUser: 'Test User',
  currentContactPerson: 'Test Person',
  title: 'had a beer with',
  description: 'test description',
};

const mockHandleDeleteNote = jest.fn();

describe('#NotesTimeLineItem', () => {
  it('should render NotesTimeLineItem component', async () => {
    render(<NotesTimeLineItem note={testNote} handleDeleteNote={mockHandleDeleteNote} />);

    const svgTimeline = screen.getByTestId('SportsBarIcon');
    const content = screen.getByTestId('content');
    const userText = screen.getByText('Test User');
    const personText = screen.getByText('Test Person');
    const titleText = screen.getByText('had a beer with');
    const descriptionText = screen.getByText('test description');

    expect(svgTimeline).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(userText).toBeInTheDocument();
    expect(personText).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();

    userEvent.hover(content);

    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should call mockHandleDeleteNote when DeleteButton is clicked', () => {
    render(<NotesTimeLineItem note={testNote} handleDeleteNote={mockHandleDeleteNote} />);

    const content = screen.getByTestId('content');
    userEvent.hover(content);

    const deleteButton = screen.getByRole('button');
    userEvent.click(deleteButton);

    expect(mockHandleDeleteNote).toHaveBeenCalledWith('test-id');
  });
});