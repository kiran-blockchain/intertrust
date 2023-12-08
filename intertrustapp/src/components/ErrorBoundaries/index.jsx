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

  const ErrorFallback = ({ retry }) => (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error && error.toString()}</p>
      <button onClick={retry}>Retry</button>
    </div>
  );

  return { handleError, ErrorFallback };
}

function ErrorBoundary({ children, FallbackComponent }) {
  const { handleError } = useErrorBoundary();
  const [retryCount, setRetryCount] = useState(0);

  const handleComponentError = (error, errorInfo) => {
    handleError(errorInfo);
  };

  const handleRetry = () => {
    setRetryCount((prevCount) => prevCount + 1);
  };

  return (
    <React.Fragment>
      <ErrorBoundaryWrapper onError={handleComponentError} FallbackComponent={FallbackComponent} retryCount={retryCount}>
        {children}
      </ErrorBoundaryWrapper>
    </React.Fragment>
  );
}

function ErrorBoundaryWrapper({ onError, FallbackComponent, retryCount, children }) {
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
    return <FallbackComponent retry={resetErrorBoundary} />;
  }

  return children;
}

function ErrorProneComponent() {
  // Simulate an error for testing purposes
  if (Math.random() < 0.3) {
    throw new Error('Random error occurred!');
  }

  return <div>Rendered successfully!</div>;
}

function App() {
  const { ErrorFallback } = useErrorBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}

export default App;
