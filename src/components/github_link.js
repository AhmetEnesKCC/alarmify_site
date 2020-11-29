import React from "react";
import GithubLogo from "./github_logo";
export default function GithubLink() {
  return (
    <div className='github_link'>
      <div
        className='link_container'
        onClick={() => document.getElementById("link").click()}
      >
        <GithubLogo />
        <a
          target='_blank'
          id='link'
          href='https://github.com/AhmetEnesKCC/alarmify_app'
        >
          alarmify_app
        </a>
      </div>
    </div>
  );
}
