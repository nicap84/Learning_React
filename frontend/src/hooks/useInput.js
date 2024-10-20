import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (input) => {
        setValue(input.target.value);
      },
    },
    () => setValue(initialValue),
  ];
}
