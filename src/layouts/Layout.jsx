import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
