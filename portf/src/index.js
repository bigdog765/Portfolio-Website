import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import WorkExperience from "./pages/WorkExperience.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";
import Projects from "./pages/Projects.js";
import Layout from "./pages/Layout.tsx";
import Nav from './Nav';

export default function Main() {
  return (
    <BrowserRouter>
      <div className='navWrapper'>
        <Routes>
          <Route path="/" element={<Nav title="Aidan's Portfolio" />}>
            <Route index element={<App />} />
            <Route path="work" element={<WorkExperience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Main />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
