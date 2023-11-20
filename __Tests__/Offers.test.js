import React from 'react';
import { describe, expect, test, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import offers from '../src/components/offers';
import singleOffer from '../src/components/singleOffers';
import store from '../src/store';

describe('Offers Tab Tests', () => {
  const props = {
    offerContainersList: [
      {
        company: 'company1',
        salary: 10000,
        bonus: 10000,
        equity: 10000,
        totalComp: salary + bonus + equity,
      },
      {
        company: 'company2',
        salary: 20000,
        bonus: 20000,
        equity: 20000,
        totalComp: salary + bonus + equity,
      },
    ],
  };
  beforeEach(() => {
    render(<offers {...props} />);
  });

  test('renders the navbar', async () => {
    const navbar = await document.querySelector('#navbar');
    expect(navbar).toBeInTheDocument();
  });
  test('renders the page headers', async () => {
    const offers = await screen.findByText('Offers');
    // const company = await screen.findByText('Company');
    // const salary = await screen.findByText('Salary');
    // const bonus = await screen.findByText('Bonus');
    // const equity = await screen.findByText('Equity');
    // const totalComp = await screen.findByText('Total Compensation');
    // expect(company).toBeInTheDocument();
    // expect(salary).toBeInTheDocument();
    // expect(bonus).toBeInTheDocument();
    // expect(equity).toBeInTheDocument();
    // expect(totalComp).toBeInTheDocument();
    expect(offers).toBeInTheDocument();
  });
  test('renders the edit button for each offer', () => {
    const editButton = screen.getByRole('button', { name: 'EDIT' });
    expect(editButton).toBeInTheDocument();
  });
  // test('renders offers from each company', async () => {
  //   render(<singleOffer offer={props.offerContainersList[0]} />);
  //   const offerName = await screen.findByText((content, element) => {
  //     return content.includes('company1');
  //   });
  // });
});
