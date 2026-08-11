import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function MainLayout(){
    return(
        <div className="h-screen flex flex-col">
            
            <Navbar />

            <main className="flex-1 min-h-0">
                <Outlet />
            </main>

        </div>
    );
}

export default MainLayout;