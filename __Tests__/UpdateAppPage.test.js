import React from 'react'
import {expect, jest, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Home Page Tests', () => {
  beforeEach(() => {
    render(
      <UpdateApplicationPage />
    )
  })

  test('rendering title-box', async () => {
    const titleBox = await screen.querySelector('.title-box')
    expect(titleBox).toBeInTheDocument()
  })

  test('renders the app-nav-bar in Nav', async () => {
    const appNavBar = await screen.querySelector('#app-nav-box')
    expect(appNavBar).toBeInTheDocument()
  })

  test('renders the chart-nav-box in Nav', async () => {
    const chartNavBox = await screen.querySelector('#chart-nav-box')
    expect(chartNavBox).toBeInTheDocument()
  })

  test('renders the offer-nav-box in Nav', async () => {
    const offerNavBox = await screen.querySelector('#offer-nav-box')
    expect(offerNavBox).toBeInTheDocument()
  })

  test('renders the logout-nav-box in Nav', async () => {
    const logoutNavBox = await screen.querySelector('#logout-nav-box')
    expect(logoutNavBox).toBeInTheDocument()
  })

  test('renders the application-edit-page-form', async () => {
    const applicationEditPageForm = await screen.querySelector('#application-edit-page-form')
    expect(applicationEditPageForm).toBeInTheDocument()
  })
  test('render application-edit-page-update-box', async () => {
    const applicationEditPageUpdateBox = await screen.querySelector('#application-edit-page-update-box')
    expect(applicationEditPageUpdateBox).toBeInTheDocument();
  })
})