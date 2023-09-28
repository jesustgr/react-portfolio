import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/index.css'  // CSS FILE

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './pages/about';
import Projects from './pages/projects';    
import Contact from './pages/contact';
import Resume from './pages/resume';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <about/>,
        },
        {
          path: '/Projects',
          element: <projects/>,
        },
        {
          path: '/Contact',
          element: <contact />
        },
        {
          path: '/Resume',
          element: <resume />
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );