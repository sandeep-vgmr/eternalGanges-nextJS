import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const RatingStar = ({ stars, size, activColor, diActivColor }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return (
        <div className="star-rating" >
            {
                [...Array(stars || 5)].map((item, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                style={{ appearance: 'none' }}
                            />
                            <AiFillStar
                                className="stars"
                                color={ratingValue <= (hover || rating) ? activColor || "#146060" : diActivColor || "#e4e5e9"}
                                size={size || 30}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })
            }
        </div>
    )
}

export default RatingStar;
