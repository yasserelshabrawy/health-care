import { Link, useLocation } from "react-router-dom";

import dashboardIcon from "../assets/icon/dashboard-icon.png";
import patientIcon from "../assets/icon/patient-icon.png";
import doctorIcon from "../assets/icon/doctor-icon.png";
import leaderboardIcon from "../assets/icon/leaderboard-icon.png";
import reportingIcon from "../assets/icon/reporting-icon.png";
import agencyIcon from "../assets/icon/agency-icon.png";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", img: dashboardIcon },
    { name: "Patients", path: "/patients", img: patientIcon },
    { name: "Doctors", path: "/doctors", img: doctorIcon },
    { name: "Leaderboard", path: "/leaderboard", img: leaderboardIcon },
    { name: "Reporting", path: "/reporting", img: reportingIcon },
    { name: "Agency", path: "/agency", img: agencyIcon },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">RH-NYC</h2>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`block p-2 rounded-lg ${
                pathname === item.path ? "text-blue-500 bg-blue-100 " : "text-gray-700"
              }`}
            >
              <img src={item.img} alt={`${item.name} icon`} className="inline-block mr-2 w-5 h-5" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
