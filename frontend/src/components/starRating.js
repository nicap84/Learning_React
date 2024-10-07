import Star from "./star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ starNumber = 5 }) {
  return createArray(starNumber).map((n, i) => <Star key={i} />);
}
