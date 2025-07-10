import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "../pages/Patients"; 
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Authlayout from "../components/layout/Authlayout";
import Doctors from "../pages/Doctors";
import Leaderboard from "../pages/Leaderboard";
import Reporting from "../pages/Reporting";
import Agency from "../pages/Agency";
import Dashboard from "../pages/Dashboard/Dashboard";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authlayout/>}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/agency" element={<Agency />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
