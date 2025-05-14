import { useEffect } from "react";
import useIterator from "../hooks/useIterator";
import RepositoryReadme from "./repositoryReadme";

export default function RepoMenu({
  repositories,
  selected,
  onSelect = (f) => f,
}) {
  const [{ name, login }, next, prev] = useIterator(
    repositories,
    selected ? repositories.findIndex((repo) => repo.name === selected) : 0
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={prev}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}
