import React from "react";
import "../../assets/scss/Filter.scss";
const FilterItem = (props) => {
    let { name, firstChecks, secondChecks, thirdChecks, fourthChecks, fifthChecks } = props;
    return (
        <div>
            <h2>{name}</h2>
            <div className="input-group rounded">
                <input
                    style={{ border: "1px solid #E8E7E8", border: " 1px solid #E8E7E8", maxWidth: "100%" }}
                    type="search"
                    className="rounded"
                    placeholder="Search sector"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search" />
                </span>
            </div>

            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" defaultValue id="firstCheckbox" />
                    <label className="form-check-label filter-label-size" htmlFor="firstCheckbox">
                        {firstChecks}
                    </label>
                </li>
                <li className="list-group-item">
                    <input
                        className="form-check-input me-1"
                        style={{ backgroundColor: "#52AB84", borderColor: "#52AB84" }}
                        type="checkbox"
                        defaultValue
                        id="secondCheckbox"
                        defaultChecked
                    />
                    <label className="form-check-label filter-label-size" htmlFor="secondCheckbox">
                        {secondChecks}
                    </label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" defaultValue id="thirdCheckbox" />
                    <label className="form-check-label filter-label-size" htmlFor="thirdCheckbox">
                        {thirdChecks}
                    </label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" defaultValue id="thirdCheckbox" />
                    <label className="form-check-label filter-label-size" htmlFor="thirdCheckbox">
                        {fourthChecks}
                    </label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" defaultValue id="thirdCheckbox" />
                    <label className="form-check-label filter-label-size" htmlFor="thirdCheckbox">
                        {fifthChecks}
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default FilterItem;
