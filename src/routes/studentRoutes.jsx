import Layout from '../components/Layout';
import StudentDashboard from '../pages/student/StudentDashboard';

export const studentRoutes = {
  path: "/student",
  element: <Layout role="student" />,
  children: [
    { index: true, element: <StudentDashboard /> },
    { path: "courses", element: <div className="text-center text-gray-600">My Courses page coming soon...</div> },
    { path: "settings", element: <div className="text-center text-gray-600">Settings page coming soon...</div> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};