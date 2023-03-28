import { createBrowserRouter } from 'react-router-dom';
import { Calculator, Home, Quotes } from '../pages';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calculator',
        element: <Calculator />,
      },
      {
        path: 'quote',
        element: <Quotes />,
      },
    ],
  },
]);

export default router;
