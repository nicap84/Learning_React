import React from "react";
import useInput from "../../hooks/useInput";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault(); // prevent a POST request to the current URL with the values of the form stored in the body
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <input
          {...titleProps}
          type="text"
          placeholder="color title"
          required
        ></input>

        <input {...colorProps} type="color" required></input>
      </div>
      <button>Add</button>
    </form>
  );
}
