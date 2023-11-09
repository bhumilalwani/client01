import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Purpple from './components/Purpple';
import Nav from './components/nav';
import Page1 from './components/page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/page5';
import Counsell from './components/Counsell';
import Appoint from './components/Appoint';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Purpple />
    <Nav />
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Counsell/>
    <Appoint/>

  </React.StrictMode>
);


