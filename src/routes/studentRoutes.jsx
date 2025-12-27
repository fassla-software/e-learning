import Layout from '../components/Layout';
import StudentDashboard from '../pages/student/StudentDashboard';
import StudentGoals from '../pages/student/StudentGoals';
import StudentAttendance from '../pages/student/StudentAttendance';
import StudentAssignments from '../pages/student/StudentAssignments';
import AssignmentDetails from '../pages/student/AssignmentDetails';
import StudentExams from '../pages/student/Exams';
export const studentRoutes = {
  path: "/student",
  element: <Layout role="student" />,
  children: [
    { index: true, element: <StudentDashboard /> },
    { path: "goals", element: <StudentGoals /> },
    { path: "attendance", element: <StudentAttendance /> },
    { path: "assignments", element: <StudentAssignments /> },
    { path: "assignments/:id", element: <AssignmentDetails /> },
    { path: "exams", element: <StudentExams /> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};