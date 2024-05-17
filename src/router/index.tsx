import Dashboard from "@/views/Dashboard";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
