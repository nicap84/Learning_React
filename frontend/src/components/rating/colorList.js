import { useContext } from "react";
import { ColorContext } from "../../";
import Color from "./color";

export default function ColorList() {
  const { colorsData: colors } = useContext(ColorContext);

  console.log(colors);

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
