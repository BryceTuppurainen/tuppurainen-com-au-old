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

        <article class="flex flex-wrap">
          <div>
            <h2 class="p-3 py-6 text-5xl underline">My-Projects</h2>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
