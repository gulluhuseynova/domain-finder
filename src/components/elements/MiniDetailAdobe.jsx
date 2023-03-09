import React from "react";
import images from "../../assets/img";
const MiniDetailAdobe = () => {
    return (
        <div className="card mb-5" style={{ marginTop: "30px" }}>
            <div className="row container mt-4">
                <div className="col card-first-logo">
                    <img src={images.resultIcon} width="25px" height="25px" />
                </div>
                <div className="col-lg-8 card-name">
                    <div>Adobe</div>
                </div>
                <div className="col card-icon">
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
                <a target="_blank" href=" https://www.adobe.com/" className="pale-sentences" style={{ paddingLeft: "20px" }}>
                    https://www.adobe.com/
                </a>
            </div>
            <hr/>
            <div className="card-body">
                <h2 className="card-title">Adobe: Creative, marketing and document management ...</h2>
                <p className="card-text">
                    {" "}
                    Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and
                    applications.
                </p>

                <div>
                    <button type="button" className="btn btn-light result-card-btns">
                        adobe
                    </button>
                    <button type="button" className="btn btn-light result-card-btns">
                        design
                    </button>
                    <button type="button" className="btn btn-light result-card-btns">
                        creative
                    </button>
                    <br />
                    <button type="button" className="btn btn-light result-card-btns">
                        designer
                    </button>
                    <button type="button" className="btn btn-light result-card-btns">
                        photoshop
                    </button>
                    <button type="button" className="btn btn-light result-card-btns">
                        illustrator
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniDetailAdobe;
