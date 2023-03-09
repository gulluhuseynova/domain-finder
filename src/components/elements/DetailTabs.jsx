import React from "react";
import "../../assets/scss/DetailTabs.scss";
const DetailTabs = () => {
    return (
        <div className="card mb-5 registrar-sec">
            <div className="row container mt-4">
                <h2 className="registrar-title" style={{ marginBottom: "35px" }}>
                    Who is
                </h2>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-tab-pane"
                            aria-selected="true"
                        >
                            Domain Information
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-tab-pane"
                            aria-selected="false"
                        >
                            Registrant Contact
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="contact-tab-pane"
                            aria-selected="false"
                        >
                            Administrative Contact
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="contact-tab-pane"
                            aria-selected="false"
                        >
                            Administrative Contact
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                        <div className="row">
                            <div className="col tabs-position" style={{ position: "relative" }}>
                                <div>
                                    <div className="row">Domain:</div>
                                    <div className="row">Registrar:</div>
                                    <div className="row">Registered On:</div>
                                    <div className="row">Expires On:</div>
                                    <div className="row">Updated On:</div>
                                    <div className="row">Status:</div>
                                </div>

                                <div className="row tab-position">Name Servers:</div>
                            </div>
                            <div className="col tabs-position">
                                <div>
                                    <div className="row">adobe.com</div>
                                    <div className="row">Nom-iq Ltd. dba COM LAUDE</div>
                                    <div className="row">1986-11-17</div>
                                    <div className="row">2022-05-17</div>
                                    <div className="row">2021-04-17</div>
                                    <div className="row">
                                        clientUpdateProhibited <br /> serverDeleteProhibited
                                        <br />
                                        serverTransferProhibited <br />
                                        serverUpdateProhibited
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: "15px" }}>
                                    a1-217.akam.net <br /> a10-64.akam.net
                                    <br /> a13-65.akam.net <br />
                                    a26-66.akam.net <br />
                                    a28-67.akam.net
                                    <br /> a7-64.akam.net adobe-dns-01.adobe.com <br />
                                    adobe-dns-03.adobe.com <br />
                                    adobe-dns-04.adobe.com <br />
                                    adobe-dns-05.adobe.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                        ...
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                        ...
                    </div>
                    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>
                        ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTabs;
