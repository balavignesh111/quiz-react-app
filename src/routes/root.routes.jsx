import { Outlet } from "react-router-dom";
import Navbar from "../component/home/navbar.component";
const Root = () => {
  return (
  <div>
    <Navbar/>
    <Outlet></Outlet>
  </div>);
}

export default Root;