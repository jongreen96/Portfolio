import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Background from './components/background.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Background />
    <App />
  </StrictMode>
);
