import Color from "./color";

export default function ColorList({ colors = [], onRemoveColors = (f) => f }) {
  console.log("lenght", colors.length);
  if (!colors.length) {
    return <div>No colors</div>;
  }
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColors} />
      ))}
    </div>
  );
}
