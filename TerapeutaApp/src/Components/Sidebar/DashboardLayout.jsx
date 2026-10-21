import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#f9f2f2]">
      <Sidebar />
      <main className="flex-1 min-w-0 px-6 py-8 md:px-14 md:py-12">
        <Outlet />
      </main>
    </div>
  );
}