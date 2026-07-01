import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/pages/HomePage';
import Events, { loader as eventsLoader }  from './components/pages/EventsPage';
import EventDetail from './components/pages/EventDetailPage';
import NewEvent from './components/pages/NewEventPage';
import EditEvent from './components/pages/EditEventPage';
import EventsRootLayout from './components/pages/EventsRoot';
import ErrorPage from './components/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true, element: <Events />, loader: eventsLoader
          },
          { path: ':eventId', element: <EventDetail /> },
          { path: 'new', element: <NewEvent /> },
          { path: ':eventId/edit', element: <EditEvent /> },
        ]
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
