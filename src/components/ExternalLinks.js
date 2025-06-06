import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const ExternalLinks = ({ githubLink, openLink }) => {
  return (
    <span className="external-links">
      {githubLink && (
        <a className="github-icon" href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon
            sx={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          />
        </a>
      )}
      {openLink && (
        <a className="open-icon" href={openLink} target="_blank" rel="noopener noreferrer">
          <OpenInBrowserIcon
            sx={{
              fontSize: 25,
              color: "var(--lightest-slate)"
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
