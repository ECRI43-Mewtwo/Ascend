import React from 'react';
import { describe, expect, test, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
// import offers from '../src/components/offers';
// import singleOffer from '../src/components/singleOffers';
// import store from '../src/store';

describe('Login Page Tests', () => {
  test('renders the sign-in button', async () => {
    const loginButton = await screen.getByRole('button', { name: 'SIGN IN' });
    expect(loginButton).toBeInTheDocument();
  });
  test('renders the username input', async () => {
    const username = await screen.getByDisplayValue('');
    expect(username).toBeInTheDocument();
  });
});
