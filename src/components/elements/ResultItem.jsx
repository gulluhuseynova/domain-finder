import React from "react";
import images from "../../assets/img";
import { Link } from "react-router-dom";
import "../../assets/scss/ResultItem.scss";
const ResultItem = (props) => {
    let { name, url, title, description, tags, id } = props;

    return (
        <div className="card mb-5" style={{ marginTop: "30px" }}>
            <div className="row container mt-4">
                <div className="col card-first-logo">
                    <img src={images.resultIcon} width="25px" height="25px" />
                </div>
                <div className="col-lg-8 card-name">
                    <div>{name}</div>
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
                <a target="_blank" href={url} className="pale-sentences" style={{ paddingLeft: "20px" }}>
                    {url}
                </a>
            </div>

            <Link to={`/results/${id}`}>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>

                    <div>
                        {tags.map((tag, index) => (
                            <button type="button" className="btn btn-light result-card-btns" key={index}>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ResultItem;
