import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FiveStars = ({ stars, size }) => {
    return (
        <div className="star-rating" >
            {
                [...Array(stars || 5)].map((item, i) => {
                    return (
                        <label key={i}>
                            <input type="radio"
                                name="rating"
                                style={{ appearance: 'none' }}
                            />
                            <AiFillStar
                                className="five-star"
                                style={{color:'#146060'}}
                                size={size || 30}
                            />
                        </label>
                    )
                })
            }
        </div>
    )
}

export default FiveStars;
