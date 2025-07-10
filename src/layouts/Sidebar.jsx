import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Patients", path: "/patients" },
    { name: "Doctors", path: "/doctors" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Reporting", path: "/reporting" },
    { name: "Agency", path: "/agency" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">RH-NYC</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`block ${
                pathname === item.path ? "text-blue-600 font-bold" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
