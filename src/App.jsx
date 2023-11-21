// import React from 'react';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from 'react-router-dom';
// import * as ReactDOM from 'react-dom';
// import Login from './components/Login.jsx';
// import HomePage from './components/HomePage.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' elemenet={<Login />}>
//       <Route path='homepage' element={<HomePage />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
