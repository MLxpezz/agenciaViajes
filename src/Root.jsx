import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default Root;
