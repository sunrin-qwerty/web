import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/error.jsx'
import Curriculum from './pages/curriculum.jsx'
import Main from './pages/main.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />
    },
    {
        path: "/apply",
        element: <ErrorPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/curriculum",
        element: <Curriculum />,
        errorElement: <ErrorPage />
    }
])

export default router