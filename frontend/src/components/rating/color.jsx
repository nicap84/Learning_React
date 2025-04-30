import StarRating from "./starRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../../hooks/useColors";

export default function Color({ id, color, title, rating }) {
  const { removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}
