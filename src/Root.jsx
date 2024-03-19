import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
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
