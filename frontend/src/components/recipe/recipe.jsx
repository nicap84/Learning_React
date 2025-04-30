import React from "react";
import Ingredient from "./ingredient";

const Recipe = React.memo(({ name, ingredients, steps }) => {
  if (!name) {
    console.log(name);
    return;
  }
  return (
    <Recipe>
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <Ingredient ingredients={ingredients}></Ingredient>
      </section>
      <section className="steps">
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </Recipe>
  );
});

export default Recipe;
