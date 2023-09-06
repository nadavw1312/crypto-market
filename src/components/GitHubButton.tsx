import React from "react";
import { MarkGithubIcon } from "@primer/octicons-react";

const GitHubButton = () => {
  return (
    <a
      className="github-button"
      href="https://github.com/nadavw1312/crypto-market"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub 
      <MarkGithubIcon />
    </a>
  );
};

export default GitHubButton;
