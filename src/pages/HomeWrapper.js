import Navbar from "../Components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
function HomeWrapper({search, setSearch, styleFix}) {
    return (
        <>
            <Navbar styleFix={styleFix} search={search} setSearch={setSearch}/>
            <Outlet />
        </>
    )
}

export default HomeWrapper