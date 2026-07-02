import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/pages/HomePage';
import Events, { loader as eventsLoader } from './components/pages/EventsPage';
import EventDetail, { loader as eventDetailLoader } from './components/pages/EventDetailPage';
import NewEvent, { action as formSubmitAction } from './components/pages/NewEventPage';
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
            index: true,
            element: <Events />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: 'edit', element: <EditEvent /> },
            ]
          },
          {
            path: 'new',
            element: <NewEvent />,
            action: formSubmitAction,
          },
        ]
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
