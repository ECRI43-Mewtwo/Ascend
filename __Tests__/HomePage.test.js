import React from 'react'
import {expect, jest, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Home Page Tests', () => {
  beforeEach(() => {
    render(
      <HomePage />
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

  test('renders the main-page-dropdown', async () => {
    const mainpageDropDown = await screen.querySelector('#main-page-drop-down')
    expect(mainpageDropDown).toBeInTheDocument()
  })
  
  test('renders the home-headers-box', async () => {
    const homeHeadersBox = await screen.querySelector('#home-headers-box')
    expect(homeHeadersBox).toBeInTheDocument()
  })

  test('renders the form-box', async () => {
    const homePageFormBox = await screen.querySelector('#home-page-form')
    expect(homePageFormBox).toBeInTheDocument()
  })

  test('renders the edit-box', async () => {
    const editBox = await screen.querySelector('.edit-application-box')
    expect(editBox).toBeInTheDocument()
  })
})