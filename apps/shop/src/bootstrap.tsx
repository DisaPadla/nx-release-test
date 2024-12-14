import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(22222)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
