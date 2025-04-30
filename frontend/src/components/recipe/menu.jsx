import React from "react";
import Recipe from "./recipe";

const Menu = React.memo(({ title, recipes }) => {
  console.log("title", title);
  console.log("lenght", recipes.length);
  return (
    <article>
      <h1>{title}</h1>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
});

export default Menu;
