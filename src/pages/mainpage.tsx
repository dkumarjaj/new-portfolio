import { Outlet } from "react-router";
import Nav from "../components/Nav";
import "../styles/main.css";

function Mainpage() {
  return (
    <div className="mainpage">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Mainpage;
