import { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function RepositoryReadme({ repo, login }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const response = await fetch(uri);
    const { download_url } = await response.json();
    const markdownFetch = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdownFetch);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return <ReactMarkdown children={markdown} />;
}
