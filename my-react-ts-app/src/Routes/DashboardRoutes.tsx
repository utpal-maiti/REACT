
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Project from '../pages/Project/Project';
import RecentActivity from '../pages/RecentActivity/RecentActivity';
const DashboardRoutes = () => (
    <Routes>
        <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<RecentActivity />} />
            <Route path="project/:id" element={<Project />} />
        </Route>
    </Routes>
);

export default DashboardRoutes;
