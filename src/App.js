import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {

 const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/create",
    element:<Create/>
  },
  {
    path:"/update/:id",
    element: <Update/>
  }
 ])

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
