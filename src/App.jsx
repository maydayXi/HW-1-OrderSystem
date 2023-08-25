import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Inventory from './pages/Inventory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar><ErrorPage /></Navbar>,
    errorElement: <Navbar><ErrorPage /></Navbar>
  },
  {
    path: "/inventory",
    element: <><Navbar /><Inventory /></>,
    errorElement: <Navbar><ErrorPage /></Navbar>
  }
])

function App() {
  return (<RouterProvider router={router} />);
}

export default App
