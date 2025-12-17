import Layout from '../components/Layout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Classes from '../pages/admin/Classes';
import Students from '../pages/admin/Students';
import StudentInfo from '../pages/admin/StudentInfo';
import Teachers from '../pages/admin/Teachers';
import TeacherInfo from '../pages/admin/TeacherInfo';
import EditTeacherPermissions from '../pages/admin/EditTeacherPermissions';
import Exams from '../pages/admin/Exams';
import ExamInfo from '../pages/admin/ExamInfo';
import ScheduleBroadcast from '../pages/admin/ScheduleBroadcast';
import Broadcasts from '../pages/admin/Broadcasts';
import Curricula from '../pages/admin/Curricula';
import EditCurriculum from '../pages/admin/EditCurriculum';

export const adminRoutes = {
  path: "/admin",
  element: <Layout role="admin" />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: "classes", element: <Classes /> },
    { path: "students", element: <Students /> },
    { path: "students/:id", element: <StudentInfo /> },
    { path: "teachers", element: <Teachers /> },
    { path: "teachers/:id", element: <TeacherInfo /> },
    { path: "edit-teacher-permissions", element: <EditTeacherPermissions /> },
    { path: "exams", element: <Exams /> },
    { path: "exams/:id", element: <ExamInfo /> },
    { path: "schedule-broadcast", element: <ScheduleBroadcast /> },
    { path: "broadcasts", element: <Broadcasts /> },
    { path: "curricula", element: <Curricula /> },
    { path: "curricula/edit/:id", element: <EditCurriculum /> },
    { path: "settings", element: <div className="text-center text-gray-600">Settings page coming soon...</div> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};