import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, HashRouter, RouterProvider } from 'react-router-dom';
import MemePage from './Routes/MemePage';
import './index.css';
import ErrorPage from './components/DumbComponents/ErrorPage';
import GeneratedMemePage from './Routes/GeneratedMemePage';

const router = createHashRouter([
  {
    path: '/',
    element: <MemePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/generated',
    element: <GeneratedMemePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
