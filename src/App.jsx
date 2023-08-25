import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Order from './pages/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>,
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
