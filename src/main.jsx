import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundContextProvider from './store/backgroundcotextprovider';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundContextProvider>
      <App />
    </BackgroundContextProvider>
  </StrictMode>
);
