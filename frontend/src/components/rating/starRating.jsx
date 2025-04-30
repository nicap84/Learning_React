// import { useState } from "react";
import Star from "./star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ starNumber = 5, selectedStars = 0 }) {
  // const [state, setState] = useState(initialValue); returns an array with 2 elements
  // const [selectedStar, setSelectedStart] = useState(3);
  return (
    <div>
      {createArray(starNumber).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {starNumber}
      </p>
    </div>
  );
}
