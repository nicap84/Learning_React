import "./App.css";
import { useState } from "react";
import ColorList from "./components/rating/colorList";
import colorsData from "./models/colors.json";

function App() {
  const [colors, setColors] = useState(colorsData);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ColorList
            colors={colors}
            onRemoveColors={(id) => {
              const newColors = colors.filter((color) => color.id !== id);
              setColors(newColors);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
