import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Classes from './pages/admin/Classes';
import Students from './pages/admin/Students';
import StudentInfo from './pages/admin/StudentInfo';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import Teachers from './pages/admin/Teachers';
import TeacherInfo from './pages/admin/TeacherInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - redirects to student dashboard for now */}
        <Route path="/" element={<Navigate to="/student" replace />} />

        {/* Admin Routes */}
        <Route element={<Layout role="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/classes" element={<Classes />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/students/:id" element={<StudentInfo />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/teachers/:id" element={<TeacherInfo />} />
          <Route path="/admin/settings" element={<div className="text-center text-gray-600">Settings page coming soon...</div>} />
          <Route path="/admin/profile" element={<div className="text-center text-gray-600">Profile page coming soon...</div>} />
        </Route>

        {/* Student Routes */}
        <Route element={<Layout role="student" />}>
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<div className="text-center text-gray-600">My Courses page coming soon...</div>} />
          <Route path="/student/settings" element={<div className="text-center text-gray-600">Settings page coming soon...</div>} />
          <Route path="/student/profile" element={<div className="text-center text-gray-600">Profile page coming soon...</div>} />
        </Route>

        {/* Teacher Routes */}
        <Route element={<Layout role="teacher" />}>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/courses" element={<div className="text-center text-gray-600">My Courses page coming soon...</div>} />
          <Route path="/teacher/students" element={<div className="text-center text-gray-600">Students page coming soon...</div>} />
          <Route path="/teacher/settings" element={<div className="text-center text-gray-600">Settings page coming soon...</div>} />
          <Route path="/teacher/profile" element={<div className="text-center text-gray-600">Profile page coming soon...</div>} />
        </Route>

        {/* Catch all - 404 */}
        <Route path="*" element={<div className="text-center text-gray-600 mt-10">404 - Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

