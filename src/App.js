import React from "react";
import GithubLink from "./components/github_link";
import Header from "./components/header";
import Header_Title from "./components/header_title";
function App() {
  return (
    <div className='App'>
      <Header_Title />
      <Header />
      <GithubLink />
      <p className='contributers'>Contributers</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          width: 250,
          height: 200,
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <a target='_blank' href='https://github.com/AhmetEnesKCC/alarmify_app'>
          Ahmet Enes Kececi
        </a>
        <a
          target='_blank'
          href='https://github.com/MahmutCanYavuz/alarmify_app'
        >
          Mahmut Can Yavuz
        </a>
        <a target='_blank' href='https://github.com/rheayaunsq/alarmify'>
          Ibrahim Akkopru
        </a>
      </div>
    </div>
  );
}

export default App;
