import React from 'react';
import { describe, expect, test, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
// import offers from '../src/components/offers';
// import singleOffer from '../src/components/singleOffers';
// import store from '../src/store';

describe('Update Offers Tab Tests', () => {
  test('renders the navbar', async () => {
    const navbar = await document.querySelector('#navbar');
    expect(navbar).toBeInTheDocument();
  });
  test('renders the update button', async () => {
    const updateButton = await screen.getByRole('button', { name: 'UPDATE' });
    expect(updateButton).toBeInTheDocument();
  });
  test('renders the update form', async () => {
    const updateForm = await document.querySelector('#update-page-form');
    expect(updateForm).toBeInTheDocument();
  });
});
