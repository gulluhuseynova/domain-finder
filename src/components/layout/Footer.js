import React from "react";
import Image from "../../assets/img/Image";
import "../../assets/scss/Footer.scss";

const Footer = () => {
    return (
        <div className="container" id="main-footer" style={{ maxWidth: "100%" }}>
            <div id="separator">
                <img src={Image.separator} />
            </div>
            <div className="row text-center footer-wrapper">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <button id="twit-icon" type="button" className="btn btn-primary rounded-circle icon-btn">
                                <i className="fa-brands fa-twitter" />
                            </button>
                            <button id="face-icon" type="button" className="btn btn-primary rounded-circle icon-btn">
                                <i className="fa-brands fa-facebook-f" />
                            </button>
                            <button id="linkedin-icon" type="button" className="btn btn-primary rounded-circle icon-btn">
                                <i className="fa-brands fa-linkedin-in" />
                            </button>
                        </div>
                        <div className="col footer-style">
                            <div className="row">
                                <div className="col">
                                    <a className="footer-links-style" href="#">
                                        Terms of Service
                                    </a>
                                </div>
                                <div className="col">
                                    <a className="footer-links-style" href="#">
                                        Privacy Policy
                                    </a>
                                </div>
                                <div className="col">
                                    <a className="footer-links-style" href="#">
                                        Trust & Safety
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col lang">
                    <div className="row">
                        <div className="col-auto footer-style">Language :</div>
                        <select className="col-auto form-select" style={{ width: "80px" }}>
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
    );
};

export default Footer;
