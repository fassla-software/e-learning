import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { adminRoutes } from './routes/adminRoutes.jsx';
import { studentRoutes } from './routes/studentRoutes.jsx';
import { teacherRoutes } from './routes/teacherRoutes.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/student" replace />
  },
  adminRoutes,
  studentRoutes,
  teacherRoutes,
  {
    path: "*",
    element: <div className="text-center text-gray-600 mt-10">404 - Page not found</div>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

