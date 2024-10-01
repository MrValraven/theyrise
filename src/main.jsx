import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SheRise from './pages/SheRise/SheRise.jsx';
import Opportunities from './pages/Opportunities/Opportunities.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sherise",
    element: <SheRise />,
  },
  {
    path: "/opportunities",
    element: <Opportunities />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);