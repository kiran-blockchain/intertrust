import React, { useState, useEffect } from 'react';

function useErrorBoundary() {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const resetErrorBoundary = () => {
    setError(null);
    setErrorInfo(null);
  };

  useEffect(() => {
    const errorHandler = (event) => {
      setError(event.error);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  const handleError = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

  const ErrorFallback = () => (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error && error.toString()}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );

  return { handleError, ErrorFallback };
}

function ErrorBoundary({ children, FallbackComponent }) {
  const { handleError } = useErrorBoundary();

  const handleComponentError = (error, errorInfo) => {
    handleError(errorInfo);
  };

  return (
    <React.Fragment>
      <ErrorBoundaryWrapper onError={handleComponentError} FallbackComponent={FallbackComponent}>
        {children}
      </ErrorBoundaryWrapper>
    </React.Fragment>
  );
}

function ErrorBoundaryWrapper({ onError, FallbackComponent, children }) {
  const [hasError, setHasError] = useState(false);

  const resetErrorBoundary = () => {
    setHasError(false);
  };

  useEffect(() => {
    const handleComponentError = (errorInfo) => {
      setHasError(true);
      if (onError) {
        onError(errorInfo);
      }
    };

    return () => {
      setHasError(false);
    };
  }, [onError]);

  if (hasError) {
    return <FallbackComponent />;
  }

  return children;
}

function MyComponent() {
  // Simulate an error for testing purposes
  if (Math.random() < 0.5) {
    throw new Error('Random error occurred!');
  }

  return <div>Rendered successfully!</div>;
}

function App() {
  const { ErrorFallback } = useErrorBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
