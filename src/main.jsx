import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/index.css'  // CSS FILE

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/about';
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
          element: <About/>,
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