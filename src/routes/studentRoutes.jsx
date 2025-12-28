import Layout from '../components/Layout';
import StudentDashboard from '../pages/student/StudentDashboard';
import StudentGoals from '../pages/student/StudentGoals';
import StudentAttendance from '../pages/student/StudentAttendance';
import StudentAssignments from '../pages/student/StudentAssignments';
import AssignmentDetails from '../pages/student/AssignmentDetails';
import StudentExams from '../pages/student/Exams';
import TakeExam from '../pages/student/TakeExam';
import Courses from '../pages/student/Courses';
import CourseDetails from '../pages/student/CourseDetails';
import Broadcasts from '../pages/student/Broadcasts';
import Curricula from '../pages/student/Curricula';
import CurriculumViewer from '../pages/student/CurriculumViewer';
import BookPlacementTest from '../pages/student/BookPlacementTest';
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
    { path: "exams/take/:id", element: <TakeExam /> },
    { path: "courses", element: <Courses /> },
    { path: "courses/:id", element: <CourseDetails /> },
    { path: "broadcasts", element: <Broadcasts /> },
    { path: "curricula", element: <Curricula /> },
    { path: "curricula/view/:id", element: <CurriculumViewer /> },
    { path: "placement-test/book", element: <BookPlacementTest /> },
    { path: "profile", element: <div className="text-center text-gray-600">Profile page coming soon...</div> }
  ]
};