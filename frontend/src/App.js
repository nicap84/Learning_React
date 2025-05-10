import "./App.css";
import React from "react";
import { useState } from "react";
import GitHubUser from "./incorporating-data/components/githubUser.jsx";

function App() {
  const [login, setLogin] = useState("moontahoe");
  return <GitHubUser login={login} />;
}

export default App;
