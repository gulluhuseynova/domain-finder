import React from "react";
import TagCardsItem from "./TagCardsItem";
import { useState } from "react";
const TagCards = () => {
    let [cards, setCards] = useState([
        {
            title: "Tags",
            tags: ["adobe", "design", "creative", "designer", "photos", "illustrator"],
        },
        {
            title: "Company Sectors",
            tags: ["Art", "Design", "Photography", "Development", "Artist", "illustrator"],
        },
        {
            title: "Colors",
            tags: ["red", "black", "white", "grey"],
        },
    ]);
    return (
        <div>
            {cards.map((card, index) => {
                return <TagCardsItem key={index} {...card} />;
            })}
        </div>
    );
};

export default TagCards;
