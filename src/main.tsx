import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/index.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>,
)
