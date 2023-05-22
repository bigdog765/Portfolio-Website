import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import WorkExpirience from "./pages/WorkExpirience.tsx";
import Contact from "./pages/Contact.tsx";
import Skills from "./pages/Skills.tsx";
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
                <Route path="work" element={<WorkExpirience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
              </Route>
            
          </Routes>
      </div>
      
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
