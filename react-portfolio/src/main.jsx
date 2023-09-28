import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/index.css'  // CSS FILE

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';    
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <AboutMe/>,
        },
        {
          path: '/Projects',
          element: <Projects/>,
        },
        {
          path: '/Contact',
          element: <Contact />
        },
        {
          path: '/Resume',
          element: <Resume />
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );