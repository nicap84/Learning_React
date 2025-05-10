import useFetch from "../hooks/useFetch.js";

export default function FetchComponent({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { data, error, loading } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) {
    return renderSuccess(data);
  }
}
