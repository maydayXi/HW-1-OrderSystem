import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Inventory from './pages/Inventory';
import Order from './pages/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><ErrorPage /></>,
    errorElement: <><Navbar /><ErrorPage /></>
  },
  {
    path: "/inventory",
    element: <><Navbar /><Inventory /></>,
    errorElement: <><Navbar /><ErrorPage /></>
  }, 
  {
    path: "/orders",
    element: <><Navbar /><Order /></>,
    errorElement: <><Navbar /><ErrorPage /></>
  }
])

function App() {
  return (<RouterProvider router={router} />);
}

export default App
