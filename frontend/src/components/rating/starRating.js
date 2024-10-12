import { useState } from "react";
import Star from "./star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ starNumber = 5 }) {
  // const [state, setState] = useState(initialValue); returns an array with 2 elements
  const [selectedStar, setSelectedStart] = useState(3);
  return (
    <>
      {createArray(starNumber).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStart(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {starNumber}
      </p>
    </>
  );
}
