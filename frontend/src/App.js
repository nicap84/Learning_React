import "./App.css";
import React from "react";
import { ColorProvider } from "./hooks/useColors.js";
import { Routes, Route } from "react-router";
import ColorList from "./components/rating/colorList.jsx";
import ColorDetails from "./components/rating/colorDetails.jsx";

function App() {
  return (
    <ColorProvider>
      <Routes>
        <Route path="/" element={<ColorList />}></Route>
        <Route path=":id" element={<ColorDetails />}></Route>
      </Routes>
    </ColorProvider>
  );
}

/*import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  NotFound,
} from "./components/pages.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}*/

/*
import { useState } from "react";
import GitHubUser from "./incorporating-data/components/githubUser.jsx";
import UserRepositories from "./incorporating-data/components/userRepositories.jsx";
import RepositoryReadme from "./incorporating-data/components/repositoryReadme.jsx";
function App() {
  const [login, setLogin] = useState("moontahoe");
  const [repo, setRepo] = useState("car-bingo"); // learning-react
  return (
    <>
      <GitHubUser login={login} />
      <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}*/

export default App;
