import React, { useEffect, useState } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    return () => {
      if (hasError) {
        console.log("An Error Occured");
      }
    };
  }, [hasError]);

  if (hasError) {
    return <p className="text-red text-50px">An Error Occured</p>;
  }

  return props.children;
}

export default ErrorBoundary;
