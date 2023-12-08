import "../../App.css";
import useFetchedData from "../../hooks/useFetchedData";

function FetchDataDemo() {
  const { data, error, loading } = useFetchedData();

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchDataDemo;
