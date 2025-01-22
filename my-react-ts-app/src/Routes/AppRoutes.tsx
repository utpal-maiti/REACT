
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import DashboardRoutes from './DashboardRoutes';
import Dashboard from '../pages/Dashboard/Dashboard';
import Project from '../pages/Project/Project';
import RecentActivity from '../pages/RecentActivity/RecentActivity';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
