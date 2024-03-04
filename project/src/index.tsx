// index.tsx 파일

import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Routes';
import CreateDOM from 'react-dom/client'

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element');
const root = CreateDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
