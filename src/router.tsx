import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './pages/ErrorBoundary'
import { Routes } from './Routes'
import { DashboardPage } from './pages/DashboardPage'

const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    children: [
      { index: true, element: <DashboardPage /> },
    ],
    errorElement: <ErrorBoundary />,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
