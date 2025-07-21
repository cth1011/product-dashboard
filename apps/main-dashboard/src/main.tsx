import { createRoot } from 'react-dom/client';
import App from './App';
import '@repo/ui/styles/globals.css';

createRoot(document.getElementById('app')!).render(<App />);
