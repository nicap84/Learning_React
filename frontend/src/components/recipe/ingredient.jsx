export default function Ingredient({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <div>
          <article Key={i}>{ingredient}</article>
        </div>
      ))}
    </div>
  );
}
