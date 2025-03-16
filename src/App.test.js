// Import necessary testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';

// Import the main App component for testing
import App from './App';

// Basic test to check if the "Learn React" link is rendered on the page
test('renders learn react link', () => {
  // Render the App component in a virtual testing environment
  render(<App />);

  // Look for an element containing the text "Learn React" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Ensure that the element is actually in the document
  expect(linkElement).toBeInTheDocument();
});
