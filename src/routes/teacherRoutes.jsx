import Layout from '../components/Layout';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import Assignments from '../pages/teacher/Assignments';
import CreateAssignment from '../pages/teacher/CreateAssignment';
import AssignmentInfo from '../pages/teacher/AssignmentInfo';
import Attendance from '../pages/teacher/Attendance';
import Exams from '../pages/teacher/Exams';
import CreateExam from '../pages/teacher/CreateExam';
import Broadcasts from '../pages/teacher/Broadcasts';
import BroadcastRoom from '../pages/teacher/BroadcastRoom';

export const teacherRoutes = {
  path: "/teacher",
  element: <Layout role="teacher" />,
  children: [
    { index: true, element: <TeacherDashboard /> },
    { path: "assignments", element: <Assignments /> },
    { path: "assignments/create", element: <CreateAssignment /> },
    { path: "assignments/:id", element: <AssignmentInfo /> },
    { path: "attendance", element: <Attendance /> },
    { path: "exams", element: <Exams /> },
    { path: "exams/create", element: <CreateExam /> },
    { path: "broadcasts", element: <Broadcasts /> },
    { path: "broadcasts/:id", element: <BroadcastRoom /> },
  ]
};