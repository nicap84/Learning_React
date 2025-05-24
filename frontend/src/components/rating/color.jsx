import StarRating from "./starRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../../hooks/useColors";
import { useNavigate } from "react-router";

export default function Color({ id, color, title, rating }) {
  const { removeColor } = useColors();
  const navigate = useNavigate();
  return (
    <section className="color" onClick={() => navigate(`/${id}`)}>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating selectedStars={rating} />
    </section>
  );
}
