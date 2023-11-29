import React from "react";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as unknown;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not found page</i>
      </p>
    </div>
  );
}
