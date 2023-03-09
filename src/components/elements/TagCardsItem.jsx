import React from "react";

const TagCardsItem = (props) => {
    let { title, tags } = props;
    return (
        <div className="card mb-5 registrar-sec">
            <div className="row container mt-4">
                <h2>{title}</h2>
                <div>
                    {tags.map((tag, index) => (
                        <button type="button" className="btn btn-light result-card-btns" key={index}>
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagCardsItem;
