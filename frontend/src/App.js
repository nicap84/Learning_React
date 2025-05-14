import "./App.css";
import React from "react";
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
}

export default App;
