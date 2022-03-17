import React from "react";
import Header from "./Header/Header";
import CodeExample from "./TypedCode/CodeExample";
import AboutMe from "./AboutMe/AboutMe";

function App() {
  return (
    <div class="App min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-black to-slate-800">
      <Header />

      <main>
        <CodeExample />

        <AboutMe />

        <hr />
      </main>
    </div>
  );
}

export default App;
