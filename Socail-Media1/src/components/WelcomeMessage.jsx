import React from "react";

function WelcomeMessage({ onGetPostsClicked }) {
  return (
    <center>
      <h1 style={{ marginTop: "100px" }}>There are no Posts</h1>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={onGetPostsClicked}
      >
        Get Posts From Server
      </button>
    </center>
  );
}

export default WelcomeMessage;
