import { Outlet } from "react-router-dom";
import Main from "../components/layout/Main";
import Navbar from '../components/layout/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Outlet />
    </>
  )
};

export default Layout;
