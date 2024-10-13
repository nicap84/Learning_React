import StarRating from "./starRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  color,
  title,
  rating,
  onRemove = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}
