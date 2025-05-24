import { useParams } from "react-router-dom";
import { useColors } from "../../hooks/useColors";

export default function ColorDetails() {
  let { id } = useParams();
  let { colors } = useColors();

  let foundColors = colors.find((color) => color.id === id);
  return (
    <>
      <h1>Color Details</h1>
      <div
        style={{
          height: 100,
          backgroundColor: foundColors.color,
          width: 100,
          marginBottom: 10,
        }}
      ></div>
      <h2>{foundColors.title}</h2>
      <h2>{foundColors.color}</h2>
    </>
  );
}
