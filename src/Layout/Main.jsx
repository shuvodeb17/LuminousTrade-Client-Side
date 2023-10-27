import { Outlet } from "react-router";
import Navbar from "../components/Share/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Main;