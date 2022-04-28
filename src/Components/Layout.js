import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import NavbarMobile from "./NavbarMobile";

export default function App() {
    return (
        <>
            <Header />
            <NavbarMobile />
            <Outlet />
            <Footer />
        </>
    );
}
