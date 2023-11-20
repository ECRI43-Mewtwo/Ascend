import React from 'react';
import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Home Page Tests', () => {
  beforeEach(() => {
    render(<ApplicationPage />);
  });

  test('renders the application-page-form', async () => {
    const applicationPageForm = await screen.querySelector('#app-page-form');
    expect(applicationPageForm).toBeInTheDocument();
  });
  test('render application-page-submit-box', async () => {
    const applicationPageSubmitBox = await screen.querySelector(
      '#application-page-submit-box'
    );
  });
});
