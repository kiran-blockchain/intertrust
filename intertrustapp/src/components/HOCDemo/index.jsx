import React, { useEffect, useState } from 'react';

// Define a Higher Order Component (HOC) for data fetching
const withDataFetching = (url) => (WrappedComponent) => {
  // Return a new component
  return function WithDataFetching(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Function to fetch data from the provided URL
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      // Fetch data when the component mounts
      fetchData();

      // Clean up function to cancel the fetch if the component unmounts
      return () => {
        setData([]);
        setLoading(true);
        setError(null);
      };
    }, [url]); // Re-run effect if the URL changes

    // Render the original component with data, loading, and error props
    return <WrappedComponent data={data} loading={loading} error={error} {...props} />;
  };
};

// Create a functional component that displays data
const DisplayData = ({ data, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Enhance the functional component using the HOC
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const DisplayDataWithFetching = withDataFetching(API_URL)(DisplayData);

// Use the enhanced component in your application
const HOCDemo = () => {
  return <DisplayDataWithFetching />;
};

export default HOCDemo;
