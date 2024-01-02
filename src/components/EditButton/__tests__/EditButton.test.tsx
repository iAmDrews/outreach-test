import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditButton } from '../EditButton';

const mockHandleIsEditNote = jest.fn();

describe('#EditButton', () => {
  it('should render EditButton component with Tooltip', async () => {
    render(<EditButton handleIsEditNote={mockHandleIsEditNote} />);

    const editButton = screen.getByTestId('edit-button');
    expect(editButton).toBeInTheDocument();

    userEvent.hover(editButton);

    await waitFor(() => {
      const tooltipContent = screen.getByText('Edit');
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  it('should call handleIsEditNote when the button is clicked', () => {
    render(<EditButton handleIsEditNote={mockHandleIsEditNote} />);

    const editButton = screen.getByTestId('edit-button');
    userEvent.click(editButton);

    expect(mockHandleIsEditNote).toHaveBeenCalledTimes(1);
  });
});
