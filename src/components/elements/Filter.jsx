import React from "react";
import FilterItem from "./FilterItem";
import { useState } from "react";
const Filter = () => {
    let [filters, setFilter] = useState([
        {
            id: 1,
            name: "Company Sector",
            firstChecks: "Adminstrative",
            secondChecks: "Arts & Design",
            thirdChecks: "Business",
            fourthChecks: "Consulting",
            fifthChecks: "Customer Services & Support",
        },
        {
            id: 2,
            name: "Country",
            firstChecks: "Worldwide",
            secondChecks: "United States",
            thirdChecks: "Azerbaijan",
            fourthChecks: "Russia",
            fifthChecks: "Turkey",
        },
        {
            id: 3,
            name: "Metatags",
            firstChecks: "Metatag 1",
            secondChecks: "Metatag 2",
            thirdChecks: "Metatag 3",
            fourthChecks: "Metatag 4",
            fifthChecks: "Metatag 5",
        },
        {
            id: 4,
            name: "Alexapoints",
            firstChecks: "5 star",
            secondChecks: "4 star",
            thirdChecks: "3 star",
            fourthChecks: "2 star",
            fifthChecks: "1 star",
        },
        {
            id: 5,
            name: "Colors",
            firstChecks: "Green",
            secondChecks: "Red",
            thirdChecks: "Yellow",
            fourthChecks: "Blue ",
            fifthChecks: "White",
        },
    ]);
    return (
        <div className="hidden-filter">
            {filters.map((filter, index) => {
                return <FilterItem key={index} {...filter} />;
            })}
        </div>
    );
};

export default Filter;
