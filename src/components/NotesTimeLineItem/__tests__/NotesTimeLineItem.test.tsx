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
const mockHandleIsEditNote = jest.fn();

describe('#NotesTimeLineItem', () => {
  it('should render NotesTimeLineItem component', async () => {
    render(
      <NotesTimeLineItem
        note={testNote}
        editableNote={null}
        handleDeleteNote={mockHandleDeleteNote}
        handleCreateNotes={jest.fn()}
        handleEditNote={jest.fn()}
        handleIsEditNote={jest.fn()}
      />
    );

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

    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should call mockHandleDeleteNote when DeleteButton is clicked', () => {
    render(
      <NotesTimeLineItem
        note={testNote}
        editableNote={null}
        handleDeleteNote={mockHandleDeleteNote}
        handleCreateNotes={jest.fn()}
        handleEditNote={jest.fn()}
        handleIsEditNote={jest.fn()}
      />
    );

    const content = screen.getByTestId('content');
    userEvent.hover(content);

    const deleteButton = screen.getByTestId('delete-button');
    userEvent.click(deleteButton);

    expect(mockHandleDeleteNote).toHaveBeenCalledWith('test-id');
  });

  it('should call mockHandleIsEditNote when EditButton is clicked', () => {
    render(
      <NotesTimeLineItem
        note={testNote}
        editableNote={null}
        handleDeleteNote={jest.fn()}
        handleCreateNotes={jest.fn()}
        handleEditNote={jest.fn()}
        handleIsEditNote={mockHandleIsEditNote}
      />
    );

    const content = screen.getByTestId('content');
    userEvent.hover(content);

    const editButton = screen.getByTestId('edit-button');
    userEvent.click(editButton);

    expect(mockHandleIsEditNote).toHaveBeenCalledWith('test-id');
  });
});