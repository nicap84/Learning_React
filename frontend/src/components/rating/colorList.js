import { useColors } from "../../hooks/useColors";
import Color from "./color";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) {
    return <div>No colors</div>;
  }
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
