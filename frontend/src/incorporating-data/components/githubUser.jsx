import FetchComponent from "./fetchComponent.jsx";
import UserDetails from "./userDetails.jsx";

export default function GitHubUser({ login }) {
  return (
    <FetchComponent
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}
