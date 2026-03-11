import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* Outlet means the child so /solutions or /pricing depending on what is clicked */}
    </>
  );
};

export default MainLayout;