import { Outlet } from "react-router-dom";

export default function Authlayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
