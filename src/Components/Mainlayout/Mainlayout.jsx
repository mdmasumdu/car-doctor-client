import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";

const Mainlayout = () => {
    return (
        <div className="bg-white">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;