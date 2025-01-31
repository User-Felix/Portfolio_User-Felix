import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainRoute from './routers/route';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRoute/>
  </StrictMode>,
);
