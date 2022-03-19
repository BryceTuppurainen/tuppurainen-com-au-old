import React from "react";
import Header from "./Header/Header";
import CodeExample from "./TypedCode/CodeExample";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";

function App() {
  return (
    <div class="App min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-slate-800">
      <Header />
      <main>
        <CodeExample />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
