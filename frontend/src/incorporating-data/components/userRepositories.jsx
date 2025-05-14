import FetchComponent from "./fetchComponent.jsx";
import RepoMenu from "./repoMenu";

export default function UserRepositories({
  login,
  selectedRepo,
  onSelect = (f) => f,
}) {
  return (
    <FetchComponent
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={(data) => (
        <RepoMenu
          repositories={data}
          selected={selectedRepo}
          onSelect={onSelect}
        />
      )}
    />
  );
}
