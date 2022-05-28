import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
)

// ReactDom.render(<App/>,
//   document.getElementById('root'));