import Header from "./Header";
import {Outlet} from "react-router"
import React from "react";

const Main = () => {
    return (
        <div className=' w-100'>
            <Header/>
            <div className="container-sm">
                <Outlet/>
            </div>
        </div>

    )
}
export default Main;