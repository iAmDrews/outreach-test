import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DeleteButton } from '../DeleteButton';

const mockHandleDeleteNote = jest.fn();

describe('#DeleteButton', () => {
  it('should render DeleteButton component with Tooltip', async () => {
    render(<DeleteButton handleDeleteNote={mockHandleDeleteNote} />);

    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();

    userEvent.hover(deleteButton);

    await waitFor(() => {
      const tooltipContent = screen.getByText('Delete');
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  it('should call handleDeleteNote when the button is clicked', () => {
    render(<DeleteButton handleDeleteNote={mockHandleDeleteNote} />);

    const deleteButton = screen.getByTestId('delete-button');
    userEvent.click(deleteButton);

    expect(mockHandleDeleteNote).toHaveBeenCalledTimes(1);
  });
});
