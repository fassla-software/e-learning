import Layout from '../components/Layout';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';

export const teacherRoutes = {
  path: "/teacher",
  element: <Layout role="teacher" />,
  children: [
    { index: true, element: <TeacherDashboard /> },
    { path: "courses", element: <div className="text-center text-gray-600">My Courses page coming soon...</div> },
    { path: "students", element: <div className="text-center text-gray-600">Students page coming soon...</div> },
    { path: "settings", element: <div className="text-center text-gray-600">Settings page coming soon...</div> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};