import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Search = ({ search, star, setStar }) => {
  const onStarClick = (nextValue, prevValue, name) => {
    setStar(nextValue);
  };
  return (
    <div>
      <div>
        <form action="">
          <input
            className="input"
            type="search"
            placeholder="search" 
            onChange={(e) => search(e.target.value)}
          />
         
        </form>
      </div>
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={star}
          onStarClick={onStarClick}
        />
      </div>
    </div>
  );
};

export default Search;