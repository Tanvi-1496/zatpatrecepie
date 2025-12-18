import React from "react";

import "../../styles/NotFound/index.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          Looks like this dish is not available 🍕🍰
          <br />
          The page you are trying to reach doesn’t exist.
        </p>

        <a href="/" className="notfound-home">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
