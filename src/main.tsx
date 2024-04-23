import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PersonalInfoPage } from './pages/PersonalInfoPage.tsx'
import { SelectPlanPage } from './pages/SelectPlanPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersonalInfoPage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/selectplan',
    element: <SelectPlanPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
