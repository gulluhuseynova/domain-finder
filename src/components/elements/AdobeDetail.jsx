import React from "react";
import images from "../../assets/img";
import "../../assets/scss/ResultItem.scss";
const AdobeDetail = () => {
    return (
        <div className="card mb-5 adobe-detail-wrapper" style={{ marginTop: "30px" }}>
            <div className="row container mt-4">
                <div className="col card-first-logo adobe-detail-style">
                    <img src={images.resultIcon} width="25px" height="25px" />
                </div>
                <div className="col-lg-8 card-name card-p-0">
                    <div>Adobe</div>
                </div>
                <div className="col card-icon card-p-0">
                    <img src={images.cardIcon} />
                </div>
                <div className="col">
                    <div className="card-rating-num">3.5</div>
                    <div className="pale-sentences">Local Rating</div>
                </div>
                <div className="col">
                    <div className="card-rating-num">5.0</div>
                    <div className="pale-sentences">Global Rating</div>
                </div>
                <a target="_blank" href="https://www.adobe.com/" className="pale-sentences adobe-detail-a-tag">
                    https://www.adobe.com/
                </a>
            </div>
            <hr />
            <div className="card-body">
                <h2 className="card-title">Adobe: Creative, marketing and document management ...</h2>
                <p className="card-text">
                    Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and
                    applications.
                </p>
            </div>
        </div>
    );
};

export default AdobeDetail;
