import './App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const RootLayout = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }
    ]
  },
]);

function App() {
 
  return (
    <div>
    <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
