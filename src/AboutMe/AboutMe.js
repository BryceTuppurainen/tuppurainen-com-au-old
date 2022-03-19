const portrait = require("../img/bryce-tuppurainen-portrait.png");

function AboutMe() {
  return (
    <>
      <article class="flex flex-wrap bg-slate-200 py-3">
        <img
          src={portrait}
          alt="Bryce Tuppurainen's Portrait"
          class="rounded-[2rem] m-9 w-[30vw] smvp:w-[70vw] border border-black"
        />
        <div class="ml-9">
          <h2 class="py-6 text-6xl font-bold text-zinc-800 shadow-text-white-light">
            About Me
          </h2>
          <ul>
            <li class="pt-6 text-2xl italic text-zinc-800">
              Software Engineering (Honours) Student
            </li>
            <li class="pt-6 text-2xl italic text-zinc-800">
              Core Electronics Support, Web Maintenance, and Manufacturing Staff
            </li>
            <li class="pt-6 text-2xl italic text-zinc-800">
              NUbots Team Member - Robot Behaviour Team
            </li>
            <li class="pt-6 text-2xl italic text-zinc-800">
              Studying Full-Stack Web-Developer
            </li>
            <li class="pt-6 text-2xl italic text-zinc-800">
              Data Structures - SENG1120 2022 PASS Tutor
            </li>
            <li class="pt-6 text-2xl italic text-zinc-800">
              Web Technologies - SENG1050 2021 PASS Tutor
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}

export default AboutMe;
