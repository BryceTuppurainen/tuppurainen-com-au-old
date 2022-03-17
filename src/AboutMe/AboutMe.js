const portrait = require("../img/portrait.png");

function AboutMe() {
  return (
    <article class="flex flex-wrap">
      <img
        src={portrait}
        alt="Bryce Tuppurainen's Portrait"
        class="rounded-[2rem] m-9 min-h-[40vh] border border-white"
      />
      <div class="ml-3">
        <h2 class="py-6 text-5xl underline">Bryce Tuppurainen</h2>
        <ul>
          <li class="pt-6 text-2xl italic">
            Software Engineering (Honours) Student
          </li>
          <li class="pt-6 text-2xl italic">
            Core Electronics Support, Web Maintenance, and Manufacturing Staff
          </li>
          <li class="pt-6 text-2xl italic">
            NUbots Team Member - Robot Behaviour Team
          </li>
          <li class="pt-6 text-2xl italic">
            Studying Full-Stack Web-Developer
          </li>
          <li class="pt-6 text-2xl italic">
            Data Structures - SENG1120 2022 PASS Tutor
          </li>
          <li class="pt-6 text-2xl italic">
            Web Technologies - SENG1050 2021 PASS Tutor
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
