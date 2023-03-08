import React from "react"
import "../../assets/scss/Footer.scss"


const Footer = () => {
    return (
        <div
            className="container"
            id="main-footer"
        >
            <div className="row text-center footer-wrapper">
                <div className="col col-md-2">
                    <button
                        id="twit-icon"
                        type="button"
                        className="btn btn-primary rounded-circle icon-btn"
                        href="#"
                    >
                        <i className="fa-brands fa-twitter" />
                    </button>
                    <button
                        id="face-icon"
                        type="button"
                        className="btn btn-primary rounded-circle icon-btn"
                        href="#"
                    >
                        <i className="fa-brands fa-facebook-f" />
                    </button>
                    <button
                        id="linkedin-icon"
                        type="button"
                        className="btn btn-primary rounded-circle icon-btn"
                        href="#"
                    >
                        <i className="fa-brands fa-linkedin-in" />
                    </button>
                </div>
                <div className="col col-md-4 footer-style">
                    <a className="footer-links-style" href="#">
                        Terms of Service
                    </a>
                    <a className="footer-links-style" href="#">
                        Privacy Policy
                    </a>
                    <a className="footer-links-style" href="#">
                        Trust & Safety
                    </a>
                </div>
                <div className="col-auto lang-selector">
                    <div className="row">
                        <div className="col">
                            <div
                                className="footer-style"
                                style={{ marginLeft: "auto" }}
                            >
                                Language :
                            </div>
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                style={{ width: "80px" }}
                            >
                                <option defaultValue={"select"} value="1">
                                    EN
                                </option>
                                <option value="2">AZ</option>
                                <option value="3">RU</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer





