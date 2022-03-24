import React from "react";
import Header from "./Header/Header";
import HeaderCode from "./TypedCode/HeaderCode";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div class="App min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-slate-800">
      <Header />
      <main>
        <HeaderCode />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
