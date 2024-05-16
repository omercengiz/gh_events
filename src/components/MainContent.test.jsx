import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent';
// Testing Process will be added
// Don't forget to import the necessary functions and objects from the testing-library
describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByTestId('help-area')).toBeInTheDocument();
  });
});
