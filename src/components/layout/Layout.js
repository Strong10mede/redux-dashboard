import React, { useEffect } from "react";

import "./Layout.css";

import Sidebar from "./sidebar/Sidebar.js";
import TopNav from "./topnav/TopNav.js;
import Routes from "../Routes";

import { BrowserRouter, Route } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from '../../redux/actions/ThemeAction';

const Layout = () => {
    const themeReducer = useSelector(state => state.themeReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');
        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout;
