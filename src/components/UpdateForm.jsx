import React from 'react';
import NavBar from './NavBar.jsx';
import { useLocation } from 'react-router-dom';

const UpdateForm = () => {
  const { state } = useLocation();
  console.log(state);
  const update = (e) => {
    e.preventDefault();
    const id = e.target.updateid.value;
    const company = e.target.updatecompany.value;
    const title = e.target.updatejobtitle.value;
    const location = e.target.updatelocation.value;
    const apptype = e.target.updateapptype.value;
    const status = e.target.updatestatus.value;
    const contact = e.target.updatecontact.value;
    const notes = e.target.updatenotes.value;
    const referral = e.target.updatereferral.value;
    const link = e.target.updatereferral.value;
    const starred = e.target.updatestarred.value;
    console.log(
      id,
      company,
      title,
      location,
      apptype,
      status,
      contact,
      notes,
      referral,
      link,
      starred
    );

    const body = {
      id,
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
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    fetch('/api/updateApp', postRequestBody);
  };

  return (
    <div>
      <NavBar />
      Update Your Application
      <form onSubmit={update}>
        <label htmlFor='updateid'>Id: </label>
        <input
          type='text'
          name='updateid'
          id='updateid'
          value={state.passedid}
        />
        <br></br>
        <label htmlFor='updatecompany'>Company: </label>
        <input type='text' name='updatecompany' id='updatecompany' />
        <br></br>
        <label htmlFor='updatejobtitle'>Job Title</label>
        <input type='text' name='updatejobtitle' id='updatejobtitle' />
        <br></br>
        <label htmlFor='updatelocation'>Location</label>
        <input type='text' name='updatelocation' id='updatelocation' />
        <br></br>
        <label htmlFor='updateapptype'>Application Type</label>
        <input type='text' name='updateapptype' id='updateapptype' />
        <br></br>
        <label htmlFor='updatestatus'>Status</label>
        <input type='text' name='updatestatus' id='updatestatus' />
        <br></br>
        <label htmlFor='updatecontact'>Contact</label>
        <input type='text' name='updatecontact' id='updatecontact' />
        <br></br>
        <label htmlFor='updatenotes'>Notes</label>
        <input type='text' name='updatenotes' id='updatenotes' />
        <br></br>
        <label htmlFor='updatereferral'>Referral</label>
        <input type='text' name='updatereferral' id='updatereferral' />
        <br></br>
        <label htmlFor='updatelink'>Link</label>
        <input type='text' name='updatelink' id='updatelink' />
        <br></br>
        <label htmlFor='updatestarred'>Starred</label>
        <input type='text' name='updatestarred' id='updatestarred' />
        <button id='submit-update-app' type='submit'></button>
      </form>
    </div>
  );
};
export default UpdateForm;
