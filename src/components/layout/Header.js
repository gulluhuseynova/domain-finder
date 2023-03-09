import React from "react";
import "../../assets/scss/Header.scss";
import images from "../../assets/img";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();
    let { pathname } = location;
    return (
        <div className={pathname === "/" ? "bg-white" : "nav-style"}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid navbar-mobile">
                        <div className="header-logo">
                            <Link to="/">
                                <img src={images.logo} />
                            </Link>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0 header-links-style" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mobile-only">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/about">
                                        Main
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={pathname === "/" ? "color-dark" : "color-light"} aria-current="page" to="/about">
                                        About us
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={pathname === "/" ? "color-dark" : "color-light"} aria-current="page" to="/fordevelopers">
                                        For Developers
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mobile-only">
                                <li className="nav-item">
                                    <NavLink className="nav-link active font-style" aria-current="page" to="/fordevelopers">
                                        Terms of Service
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
