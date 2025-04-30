import { useState, createContext } from "react";
import colorData from "../models/colors.json";
import { v4 } from "uuid";

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);
  const addColors = (title, color) =>
    setColors([
      ...colors,
      [
        {
          id: v4(),
          title,
          color,
          rating: 0,
        },
      ],
    ]);

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (id === color.id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => id !== color.id));

  return (
    <ColorContext.Provider
      value={{ colors, addColors, removeColor, rateColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}
