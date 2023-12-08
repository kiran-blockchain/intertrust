// src/MyComponent.js
import React, { useState, useEffect } from 'react';
import fetchData from '../../utils/api';

const ApiDemo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiDemo;
