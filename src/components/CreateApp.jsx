import React from 'react';
import Navbar from './NavBar.jsx';
import { useState, useEffect } from 'react';

const CreateApp = () => {
  const createApp = async (e) => {
    e.preventDefault();
    const company = e.target.company.value;
    const title = e.target.jobtitle.value;
    const location = e.target.location.value;
    const apptype = e.target.apptype.value;
    const status = e.target.status.value;
    const contact = e.target.contact.value;
    const notes = e.target.notes.value;
    const referral = e.target.referral.value;
    const link = e.target.referral.value;
    const starred = e.target.starred.value;

    const body = {
      date: new Date(),
      company,
      title,
      location,
      app_type: apptype,
      status,
      contact,
      notes,
      referral,
      link,
      starred,
    };

    const postRequestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    fetch('/api/createApp', postRequestBody);
  };
  return (
    <div>
      <Navbar />
      Fill out the Application Form
      <form onSubmit={createApp}>
        <label htmlFor='company'>Company: </label>
        <input type='text' name='company' id='company' />
        <br></br>
        <label htmlFor='jobtitle'>Job Title</label>
        <input type='text' name='jobtitle' id='jobtitle' />
        <br></br>
        <label htmlFor='location'>Location</label>
        <input type='text' name='location' id='location' />
        <br></br>
        <label htmlFor='apptype'>Application Type</label>
        <input type='text' name='apptype' id='apptype' />
        <br></br>
        <label htmlFor='status'>Status</label>
        <input type='text' name='status' id='status' />
        <br></br>
        <label htmlFor='contact'>Contact</label>
        <input type='text' name='contact' id='contact' />
        <br></br>
        <label htmlFor='notes'>Notes</label>
        <input type='text' name='notes' id='notes' />
        <br></br>
        <label htmlFor='referral'>Referral</label>
        <input type='text' name='referral' id='referral' />
        <br></br>
        <label htmlFor='link'>Link</label>
        <input type='text' name='link' id='link' />
        <br></br>
        <label htmlFor='starred'>Starred</label>
        <input type='text' name='starred' id='starred' />
        <button id='submit-app' type='submit'></button>
      </form>
    </div>
  );
};

export default CreateApp;
