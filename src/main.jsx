import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HostelManagement from './pages/HostelManagement';
import ClassCommittee from './pages/ClassCommittee';
import Aakam360 from './pages/Aakam360';
import LibraryManagement from './pages/LibraryManagement';
import BiometricAttendance from './pages/BiometricAttendance';
import AttendanceManagement from './pages/AttendanceManagement';
import EventManagement from './pages/EventManagement';
import TransportManagement from './pages/TransportManagement';
import HospitalityManagement from './pages/HospitalityManagement';
import StudentManagement from './pages/StudentManagement';
import FeesManagement from './pages/FeesManagement';
import TimeTableAutomation from './pages/TimeTableAutomation';
import TimeSheetAppraisal from './pages/TimeSheetAppraisal';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Notifications from './pages/Notifications'; // Import the Notifications component
import ProfilePage from './pages/ProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hostel-management" element={<HostelManagement />} />
        <Route path="/class-committee" element={<ClassCommittee />} />
        <Route path="/aakam360" element={<Aakam360 />} />
        <Route path="/library-management" element={<LibraryManagement />} />
        <Route path="/biometric-attendance" element={<BiometricAttendance />} />
        <Route path="/attendance-management" element={<AttendanceManagement />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/transport-management" element={<TransportManagement />} />
        <Route path="/hospitality-management" element={<HospitalityManagement />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/fees-management" element={<FeesManagement />} />
        <Route path="/time-table-automation" element={<TimeTableAutomation />} />
        <Route path="/time-sheet-appraisal" element={<TimeSheetAppraisal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<Notifications />} /> {/* Add the Notifications route */}
      </Routes>
    </Router>
  </ChakraProvider>
);
