import "./App.css";
import ColorList from "./components/rating/colorList";
import AddColorForm from "./components/form/addColorForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AddColorForm />
          <ColorList />
        </div>
      </header>
    </div>
  );
}

export default App;
