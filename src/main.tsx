import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MemePage from './Routes/MemePage';
import './index.css';
import LoadingSpinner from './components/DumbComponents/LoadingSpinner';

const GeneratedMemePage = React.lazy(
  () => import('./Routes/GeneratedMemePage')
);    

const ErrorPage = React.lazy(
  () => import('./components/DumbComponents/ErrorPage')
);

const router = createHashRouter([
  {
    path: '/',
    element: <MemePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/generated',
    element: (
      <React.Suspense fallback={<LoadingSpinner />}>
        <GeneratedMemePage />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
