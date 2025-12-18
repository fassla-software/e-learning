import Layout from '../components/Layout';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import Assignments from '../pages/teacher/Assignments';
import CreateAssignment from '../pages/teacher/CreateAssignment';
import AssignmentInfo from '../pages/teacher/AssignmentInfo';
import Attendance from '../pages/teacher/Attendance';
import Exams from '../pages/teacher/Exams';
import CreateExam from '../pages/teacher/CreateExam';

export const teacherRoutes = {
  path: "/teacher",
  element: <Layout role="teacher" />,
  children: [
    { index: true, element: <TeacherDashboard /> },
    { path: "courses", element: <div className="text-center text-gray-600">My Courses page coming soon...</div> },
    { path: "students", element: <div className="text-center text-gray-600">Students page coming soon...</div> },
    { path: "assignments", element: <Assignments /> },
    { path: "assignments/create", element: <CreateAssignment /> },
    { path: "assignments/:id", element: <AssignmentInfo /> },
    { path: "attendance", element: <Attendance /> },
    { path: "exams", element: <Exams /> },
    { path: "exams/create", element: <CreateExam /> },
    { path: "settings", element: <div className="text-center text-gray-600">Settings page coming soon...</div> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};