import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorPage from './components/pages/Error';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Character from './components/pages/Character';
import CreateCharacter from './components/pages/CreateCharacter';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login', // Use relative path
        element: <Login />,
      },
      {
        path: 'register', // Use relative path
        element: <Register />,
      },
      {
        path: 'character', // Use relative path
        element: <Character />,
      },
      {
        path: 'createcharacter', // Use relative path
        element: <CreateCharacter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
